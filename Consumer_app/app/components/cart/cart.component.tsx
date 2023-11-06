/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   CART COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useCallback, useState,} from 'react'
import { ImageBackground, Text,Animated,View, TouchableWithoutFeedback,TouchableOpacity,Image,TextInput } from 'react-native'
import Images from '../../common/Images';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import styles from './cart.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { theme } from '../../common';
import { ScrollView } from 'react-native-gesture-handler';
import PressableIcon from '../../common/pressable.icon';
import icons from '../../../assets/icons'
import {windowHeight, windowWidth} from '../../common/Constants';
import MenuView from './cart.menuListView'
import {charityCategoryList} from '../../data/index'
import normalize from 'react-native-normalize';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import {color} from 'react-native-reanimated';
import Button from '../../common/comButton'
import {FlatList} from 'react-native-gesture-handler'
import PromoCode from './promoCode.View'
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
    navigation: any,
    route: any
}
// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HOME STACK FILE.
 const Cart = (props: Props) => 
    {
        const [isDelete, setIsDelete] = useState(false)
        const [data,setData] = useState(charityCategoryList)
        const [shetIndex,setSheetIndex] = useState(windowHeight*0.5) //SHEET HEIGHT 
        const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
        const [sheetPromoStatus,setPromoSheetStatus] = useState(false) //SHEET INFORMATION STATUS 
        //FUNCTION WHEN PRESS TRASH ICON ITS CHECK STATUS AND UPDATE ACOORDING TO CONDITION
        const list_delete=()=> 
        {
          if(isDelete===false)
            {
            setIsDelete(true)
             }else{
            setIsDelete(false)
            }
        }
    //FUNCTION HANDLE BOTTOMSHEET STATUS
    const hanlePromoSheetStatus = ()=>
    {
    if (sheetPromoStatus===true)
    {  
        setPromoSheetStatus(false)
    }else{
        setPromoSheetStatus(true)
       
    }
    }
        //RENDER FUNCTION ADDRESS AND DESCRIPTION CARD
        const RnderHeaderAddresCard=()=> 
        {
            return(
            <View>
            <View style={styles.cartDescriptionBox}>
            <View style={styles.markerBox}>
            <Svgs.marker height={26} width={26}/>
                </View>
                <View style={{padding:8,}}>
                <Text style={styles.textH2}>Harley Street Clinic</Text>
                <Text style={styles.subText}>35 Weymouth Street,WIG BBJ</Text>
                </View>   
            </View>
            <Text style={styles.subTitleText}>Order</Text>
            </View>
             )
        }
        //Dissmiss FUNCTION CALL WHEN USER SWIPE FOR DELETE ANY ROW
        const onDismiss = useCallback((detail:any)=>{
            console.log("Hey Its calling here",detail.id)
        //    setData((data)=> data.filter((Item)=>Item.id! == detail.id))
        },[])
       // FUNCTION FOR FOOTER COMPONENT 
       const RenderFooterFunction=()=>
       {
           return(
           <View style={styles.footerMainBox}>
               <Text style={styles.textH3}>
                   Special Notes
                   </Text>
                   <View style={styles.descriptionTextBox}>
                   <TextInput
                   placeholderTextColor = {theme.colors.darkGrey}
                   placeholder="Enter text" multiline={true} numberOfLines={3} maxLength={200} 
                   style={styles.textInput}
                //    value={this.state.des}
                //    onChangeText = {(des)=> this.setState({
                //      des:des
                //     })}
                    />
                 </View>
                <Button title="Promocode" textStyle={{color:"#0E5561",fontSize: actuatedNormalize('17'),fontFamily: Fonts.Regular,}} style={{width:"50%",backgroundColor:theme.colors.bgColor,}} onPress={()=>hanlePromoSheetStatus()}/>
                <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
                <Text style={styles.textH3}>Delivery</Text>
                <Text style={styles.textH1}>Free</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
                <Text style={styles.textH3}>Promocode</Text>
                <Text style={styles.textH1}>-$2.99</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
                <Text style={styles.textH3}>Loyality Points</Text>
                <Text style={styles.textH1}>-$0.50</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
                <Text style={styles.textH3}>Total</Text>
                <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <View style={{width:70,}}>
                <Text style={styles.textH3}>$ 4.49</Text>
                </View>
                <Text style={styles.textH1}>$1.00</Text>
                </View>
                </View>
                </View>
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
                     <PromoCode/>
                     </View>
                     )}
                     contentContainerStyle={styles.contentContainerStyle}
                 />
             )
 
         }
    // MAIN VIEW FOR CART PAGE
    return (
        <View style={styles.container}>
         <View style={styles.topHeader}>
                <PressableIcon
                icon={<Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28} />}
                onPress={()=> props.navigation.goBack()}
                style={{backgroundColor:theme.colors.white}}/>
                <Text style={styles.text}> Cart</Text>
                <TouchableOpacity onPress={()=>list_delete()}>
                <Svgs.trash height={26} width={26} />
                </TouchableOpacity>
                </View>  
                    <AnimatedFlatList
                     showsHorizontalScrollIndicator={false}
                     ListHeaderComponent={
                         <RnderHeaderAddresCard/>
                     }
                     ListFooterComponent={
                         <RenderFooterFunction/>
                     }
                     data={data}
                     keyExtractor={(item)=> item.id}
                     renderItem={({item})=>
                     <MenuView details={item} deleteStatus={isDelete} onDissmiss={onDismiss} />
                     }/>
                    <View style={styles.btnOrderView}>
                        <TouchableOpacity style={styles.btnOrder}>
                           <AntDesign name="apple1" size={15} style={{padding:3}}/>
                            <Text style={styles.textH1}>Pay</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnApple}>
                            <Text style={styles.textH2}>Order for $4.99</Text>
                            </TouchableOpacity>
                    </View>
                    {
                        sheetPromoStatus===true?
                        <RenderBottomSheet/>
                        :
                        null
                    }
                </View>
            )
    }

export default Cart;
