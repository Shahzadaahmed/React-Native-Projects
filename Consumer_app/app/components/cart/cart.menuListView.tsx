import React ,{useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity, } from 'react-native'
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import Images from '../../common/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NumericInput from '../../common/comNumericInput';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import Animated, {runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated'
import {PanGestureHandler, PanGestureHandlerGestureEvent} from 'react-native-gesture-handler'
//PROPS INTERFACE DATA COMES FROM PARENT TO CHILD HERE

interface Props
{
    details:any
    deleteStatus:any
    onDissmiss?:(details:any)=> void
}
//MENUVIEW WHICH IN IMPORTED IN CART.COMPONENT.TSX TO SHOW LIST OF MENUS
const MenuView = (props: Props,) => 
{
    //VARIABLES DECLARATION
    const menuImage = "https://khappa.pk/wp-content/uploads/2018/10/ff1.jpg"
    const [quantity, setQuantity] = useState<any>(0); //QUANTITY VARIABLE ITS TAKE VALUSE OF NUMERIC INPUT
    const {details,deleteStatus,onDissmiss} = props
    const translationX = useSharedValue(0)
    const [isHideTrash,setHideTrash] = useState(deleteStatus)
    const translateXTreshhold = -windowWidth*0.3
    const listItemHeight = windowHeight*0.13
    const itemHeight = useSharedValue(listItemHeight)
    const marginVertical = useSharedValue(15)
    const opacity = useSharedValue(1)
    //HOOK WHICH CALL FIRST TIME ON SCREEN LOADING
    useEffect(() => {
        setHideTrash(deleteStatus) //SETSTATUS OF TRASH 
       });
    //ANIMATED GESTURE HANDLER USE FOR ANIMATED PURPOSE WHICH IS CONCAT WITH MENUCARD
    const panGesture = useAnimatedGestureHandler <PanGestureHandlerGestureEvent>({
        onActive : (event)=> //EVENT CALL WHEN GESTURE IS ACTIVATED
        {
           translationX.value = event.translationX
        },
        onEnd: ()=>{ //EVENT CALL WHEN GESTURE IS ON END SCALE
            const shouldDismmised = translationX.value < translateXTreshhold;
            if (shouldDismmised)
            {
                  translationX.value = withTiming(-windowWidth);
                  itemHeight.value = withTiming(0)
                  marginVertical.value = withTiming(0)
                  opacity.value = withTiming(0, undefined, (isFinished)=>{
                     if(isFinished && onDissmiss){
                        runOnJS (onDissmiss)?.(details)
                     }
                 });
            }else{
                translationX.value = withTiming(0);
            }
        }
    })
   //NUMERIC INPUT FUNTION FOR INCREMENT OF QUANTITY
    const IncrementItem =() => 
    {
        if(quantity > 1000) //IF QUANTITY GRATER THEN 1000 NUMERIC INPUT DISABLE FOR INCREMENT
        {
            }else{
                setQuantity(quantity + 1 )
            }
    }
    //NUMERIC INPUT FUNTION FOR DECREMENT OF QUANTITY
    const  DecreaseItem =() => 
    {
            if(quantity <= 0) //IF QUANTITY LESS THEN 0 NUMERIC INPUT DISABLE FOR DECREMENT
            {

            }else{
                setQuantity(quantity - 1)
            }
        }
        //ANIMATED STYLE FOR MENUCARD
        const rStyle = useAnimatedStyle(()=>({
          transform: [{
              translateX:translationX.value
          }]
        }));
         //ANIMATED STYLE FOR TRASH ICON
        const trashAnimatedStyle = useAnimatedStyle(() => {
            let opacity = translationX.value < translateXTreshhold?1:0
            if (isHideTrash===true){
                opacity=translationX.value < translateXTreshhold?0:0
            }
            return {opacity}
        }
          )
           //ANIMATED STYLE FOR BOXCONTAINER WHICH IS HELP TO CHANGE ITS STYLE WHEN CARD ANIMATED DURING END EVENT
          const boxContainerStyle =  useAnimatedStyle(()=>{
              return{
                  height:itemHeight.value,
                  marginVertical:marginVertical.value,
                  opacity:opacity.value,
            } 
          })
            //MAIN VIEW FOR MENU CARD 
             return (
            <Animated.View style={[boxContainerStyle,styles.boxMain]}>
            <Animated.View style={[styles.trshStyle,trashAnimatedStyle]}>
            <TouchableOpacity style={{height:windowHeight*0.13,width:windowWidth*0.18,backgroundColor:theme.colors.trashBg,right:isHideTrash===true?70:0,alignSelf:"center",alignItems:"center",justifyContent:"center",borderRadius:20,top:5}}>
            <Svgs.trash  height={26} width={26}  />
            </TouchableOpacity>
            </Animated.View>
            <PanGestureHandler onGestureEvent ={panGesture} >
            <Animated.View style={[rStyle,{flexDirection:"row",backgroundColor:"transparent",width:"90%",alignSelf:"center",alignItems:"center"}]}>
            <View style={{backgroundColor:theme.colors.bgColor,
            flexDirection:"row",
            borderRadius:16,
            height:windowHeight*0.15,
            alignSelf:"center",justifyContent:"center",
            right:isHideTrash===true?85:null,}}>
            <Image source={{uri:menuImage}}  style={styles.ImgageView}/>
            <View style={styles.NumericBox}>
            <View style={{width:"100%",backgroundColor:"transparent",padding:5,height:"55%"}}  >
            <Text style={styles.textH2} numberOfLines={2}>{details.name}</Text>
            </View>
            <NumericInput btnIconLeft={"minus"} style={{width:windowWidth*0.35,backgroundColor:theme.colors.white,height:windowHeight*0.043}}  btnIconLeftSize ={22} btnIconRightSize={22} btnIconRight ="plus" value={quantity}  onPressLeft={()=>DecreaseItem()} onPressRight={()=>IncrementItem()}/>
            </View>
            <View style={{backgroundColor:"transparent",width:windowWidth*0.25}}>
            <Text style={styles.text} numberOfLines={1}>$10</Text>
            </View>
            </View>
            {
            isHideTrash===true?
            <View style={{justifyContent:"center"}}>
            <TouchableOpacity style={{height:windowHeight*0.12,width:windowWidth*0.18,backgroundColor:theme.colors.trashBg,right:isHideTrash===true?75:0,alignSelf:"center",alignItems:"center",justifyContent:"center",borderRadius:20}}>
            <Svgs.trash  height={26} width={26}/>
            </TouchableOpacity>
            </View>
            :
            null
            }
        </Animated.View>
        </PanGestureHandler>
        </Animated.View>
    )
}
//STYLING
export default MenuView;
const styles = StyleSheet.create({ 
    ImgageView:
    {
        height:windowHeight*0.12,
        width:windowWidth*0.24,
        borderRadius:12,
        alignSelf:"center",
        marginHorizontal:13
        
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    NumericBox:{
        width:"40%",
        backgroundColor:"transparent",
        justifyContent:"center"
    },
    text:
    {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.black,
    textAlign: 'center',
    margin:20
    },
  textH2:
    {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
   
    },
  trshStyle: 
  {
      position:"absolute",
      right:"1%",
      alignSelf:"center"
  },
  boxMain:
  {
    backgroundColor:"transparent",
    
  }

})
