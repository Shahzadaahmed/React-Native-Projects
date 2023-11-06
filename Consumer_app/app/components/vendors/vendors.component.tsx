/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   VENDORS COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState,useEffect,useRef} from 'react'
import { ImageBackground, Text, View, TouchableWithoutFeedback,TouchableOpacity,Image } from 'react-native'
import Images from '../../common/Images';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import styles from './vendors.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../common';
import { ScrollView } from 'react-native-gesture-handler';
import PressableIcon from '../../common/pressable.icon';
import {charityCategoryList} from '../../data/index'
import { windowHeight, windowWidth } from '../../common/Constants';
import RBSheet from "react-native-raw-bottom-sheet";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import InformationSheetView from './vendors.InformationView'
import MenuView from './vendors.menulistView'
import AntDesign from 'react-native-vector-icons/AntDesign';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../common/comButton'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
 navigation: any,
 route: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HOME STACK FILE.
const Vendors = (props: Props) => 
    {
        const {detail} = props.route.params //PARENT DATA 
        const {charityDetail} = props.route.params //PARENT DATA 
        const {title, description,icon} = detail //DATA MANIPULATION
        const [type, setType] = useState('')
        const mapView = useRef<any>()
        const [sheetInfoStatus,setInfoSheetStatus] = useState(false) //SHEET INFORMATION STATUS 
        const [sheetEmptyStatus,setEmptysheetStatus] = useState(false) //SHEET EMPTYCART STATUS
        const [shetIndex,setSheetIndex] = useState(windowHeight*0.2) //SHEET HEIGHT 
        //FUNCTION HANDLE BOTTOMSHEET STATUS
        const hanleInfoSheetStatus = ()=>
        {
            if (sheetInfoStatus===true)
            {   setSheetIndex(windowHeight*0.45)
                setInfoSheetStatus(false)
            }else{
                setInfoSheetStatus(true)
                setSheetIndex(windowHeight*0.2)
            }
        }
        //FUNCTION HANDLE BOTTOMSHEET EMPTY CART ORGANIZATION STATUS
        const hanleEmptySheetStatus = ()=>
        {
            if (sheetEmptyStatus===true)
            {
                setEmptysheetStatus(false)
                setSheetIndex(windowHeight*0.2)
            }else{
                setEmptysheetStatus(true)
                setSheetIndex(windowHeight*0.45)
            }
        }
        // RENDER FUNCTION FOR CATEGORIES LIST
        const renderItem = ({item}:any) => 
        {
            const {name} = item
           return(   
            <TouchableWithoutFeedback onPress={()=> setType(name)}>
                 <View style={{...styles.categoryView,backgroundColor: type == name ? theme.colors.bgColor : theme.colors.white}}>
                 <Text style={{...styles.subText,color:type == name ? theme.colors.active : theme.colors.darkGrey, fontFamily: type == name ? Fonts.SemiBold : Fonts.Regular}}>{name}</Text>
                </View>
             </TouchableWithoutFeedback>
           ) 
        }
        //FUNCTION BOTTOMSHEET ACCESS
        const RenderBottomSheet = ()=>
        {
            return(
                <ScrollBottomSheet<string> // If you are using TS, that'll infer the renderItem `item` type
                    componentType="FlatList"
                    snapPoints={[shetIndex, '100%', windowHeight - 200]} 
                    initialSnapIndex={2} //SNAP INDEX
                    renderHandle={() => (
                    <View style={styles.header}>
                    <View style={styles.panelHandle} />
                    {
                        sheetInfoStatus===true?
                    <InformationSheetView charityData={charityDetail} details ={detail}/> 
                    :
                    <RenderEmptyCart/>
                    }
                    </View>
                    )}
                    contentContainerStyle={styles.contentContainerStyle}
                />
            )

        }
            //RENDER HEADER FUNCTION  FOR FLATLIST
            const RenderHeaderComponents = ()=>
            {
                return(
                   <><ImageBackground source={Images.CharityBG} style={styles.imageView}>
                        <View style={{...styles.row, justifyContent: 'space-between', marginTop: '13%'}}>
                            <PressableIcon icon={<Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28} />}onPress={() => props.navigation.goBack()} />
                            </View>
                            </ImageBackground>
                            <View style={styles.mainView}>
                            <Text style={styles.titleText}>{title}</Text>
                            <View style={styles.addressView}>
                            <View style={{width: "24%", flexDirection: "row"}}>
                            <View style={{width: "90%"}}>
                            <Text style={styles.subText}>Hospitals</Text>
                            </View>
                            <View style={{width: "10%", justifyContent: "center"}}>
                            <View style={styles.dotView}>
                            </View>
                            </View>
                            </View>
                            <Text style={styles.subText}>{description}</Text>
                            </View>
                            <View style={{padding:5}}>
                            <Text style={styles.text}>{charityDetail.description}</Text>
                            </View>
                            <View style={styles.btnOrderView}>
                            <View style={styles.btnOrder}>
                            <AntDesign name="star" size={19} style={{padding:3,right:"4%"}}/>
                            <Text style={styles.textH1}>4.5</Text>
                            </View>
                            <TouchableOpacity style={styles.btnApple} onPress={()=>hanleInfoSheetStatus()} >
                            <Svgs.infoIcon height={17} width={17} style={{right: "8%",padding:9}} />
                            <Text style={styles.textH2}>Info</Text>
                            </TouchableOpacity>
                            </View>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{marginVertical: '1%',}}
                                data={charityDetail.categories}
                                keyExtractor={(item) => item.id}
                                renderItem={renderItem} />
                           </View>
                             </> 
                     )
            }
            //BOTTOM SHEET FOR EMPTY SHOPING CART FOR NEW ORDER    
            const RenderEmptyCart = ()=>
            {
              return(
                  <View style={{backgroundColor:"transparent",height:"100%",width:"100%"}}>
                    <View style={{padding:"8%",backgroundColor:"transparent",}}> 
                    <Text style={styles.h1}>Empty Shopping Cart for a new order?</Text>
                    <View style={{backgroundColor:"transparent",}}>
                    <Text style={styles.descriptionText}>You are about to select food for different charity organization</Text>
                         </View>
                    <Button title="Clear" style={{marginVertical:10,width:"100%"}}/>
                    <Button title="Leave" style={{backgroundColor:theme.colors.bgColor,width:"100%"}} onPress={()=>hanleEmptySheetStatus()}/>
                    </View>
                      </View>
              )

            }
            //RENDER FOOTER FUNCTION BUTTON
            const RenderButton = ()=>
            {
             return(
                    <TouchableOpacity onPress={()=>hanleEmptySheetStatus()} style={styles.cartButtonView}>
                    <Text style={styles.cartBtnText1}>To Cart 2</Text>
                    <Text style={styles.cartBtnText}>$ 13.98</Text>
                    </TouchableOpacity>
                    )
                }
            // MAIN VIEW FOR VENDOR PAGE
            return (
                 <View style={styles.container}>
                 <View style={{flex:1,}}>
                    <FlatList //FLATLIST WHICH IS DISPLAY RENDER MENU LIST
                     key={'#'}
                     showsHorizontalScrollIndicator={false}
                     data={charityCategoryList}
                     ListHeaderComponent={
                     <RenderHeaderComponents/>//RENDER HEADER COMPONENTS TO INCLUDE WHOLE CONTAINER IN FALTLIST
                    }
                    numColumns={2}
                    keyExtractor={(item)=> item.id}
                    renderItem={({item})=> <MenuView charityDetail={item} />}/>
                    </View>
                    <RenderButton/> 
                    {
                     sheetInfoStatus===true?
                    <RenderBottomSheet/>
                    :
                    null
                    }
                    {
                     sheetEmptyStatus===true?
                     <RenderBottomSheet/>
                    :
                    null
                    }
                     </View>
                )
            }


export default Vendors;
