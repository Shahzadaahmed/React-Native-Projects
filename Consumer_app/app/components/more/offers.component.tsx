/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState} from 'react'
import {FlatList, SafeAreaView, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {windowHeight, windowWidth} from '../../common/Constants';
import {AddressItems, roles} from '../../data';
import {AddressList} from './addressList.View';
import styles from './more.styles';
import PressableIcon from '../../common/pressable.icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { theme } from '../../common';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import BottomSheetStyle from '../bottomsheets/bottomsheet.style'
import  AddAddress from './addAdrress.coomponent'
import {set} from 'react-native-reanimated';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import OfferList from './offersList.View'
import {offerItems} from '../../data/index'
import HeaderTitleBack from './../../common/headerTitleBack'
// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}
// START THE OFFERS PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const Offers = (props: Props) =>
{
    const [shetIndex,setSheetIndex] = useState(windowHeight*0.04) //SHEET HEIGHT 
    const [sheetAddAdressStatus,setSheetAddAressStatus] = useState(false) //SHEET ADDADDEESS STATUS 
    //MAIN PAGE WHICH IS RETURN OFFERS LIST
    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitleBack title={"Offers"} onPress={()=> props.navigation.goBack() } iconName={"arrow-back"} iconColor={theme.colors.darkGrey} iconSize={22}/>
            <ScrollView>
            {offerItems.map((item, index)=> 
                <View key={item.id}>
                    <TouchableOpacity onPress={()=>props.navigation.navigate("OfferDetail",{details:item})}>
                    <OfferList
                    title={item.title}
                    discounts={item.discount}
                    icon={item.icon}
                    />
                    </TouchableOpacity>
                </View>
            )}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Offers;