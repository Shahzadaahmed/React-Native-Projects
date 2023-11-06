/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState} from 'react'
import {FlatList, SafeAreaView, Text, View, ScrollView, TouchableOpacity, DevSettingsStatic,Image} from 'react-native'
import {windowHeight, windowWidth} from '../../common/Constants';
import {moreItems, roles} from '../../data';
import {MoreItem} from './more.item';
import styles from './settingStyles';
import HeaderWithTitle from '../../common/headerTitleBack'
import HeaderTitleBack from '../../common/headerTitleBack';
import {theme} from '../../common';
import normalize from 'react-native-normalize';
import icons from '../../../assets/icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import SeetingList from './settingItem.View'
import {offerItems} from '../../data/index'
import {Switch} from 'react-native-paper'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation:any,
    route: any
}

// START THE SETTING PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const Setting = (props: Props) =>
{   //VARIABLE DECLARATION
    const [shetIndex,setSheetIndex] = useState(windowHeight*0.2) //SHEET HEIGHT 
    //FUNCTION BOTTOMSHEET ACCESS
    const RenderBottomSheet = ()=>
    {
         return(
             <ScrollBottomSheet<string> // If you are using TS, that'll infer the renderItem `item` type
                 componentType="FlatList"
                 snapPoints={[shetIndex, '100%','30%', windowHeight - 80]} 
                 initialSnapIndex={2} //SNAP INDEX
                 renderHandle={() => (
                 <View style={styles.header}>
                 <View style={styles.panelHandle} />
                 <ScrollView>
                <View>
                <SeetingList  navigation = {props.navigation}/>
                </View>
                </ScrollView>
                 </View>
                 )}
                 contentContainerStyle={styles.contentContainerStyle}
             />
         )
    }
    // RETURN ADDRESS SCREEN 
    return (
        <SafeAreaView style={styles.container}>
           <HeaderTitleBack title={"Settings"} iconName="arrow-back" iconColor={theme.colors.darkGrey} onPress={()=>props.navigation.goBack()} textStyle={{fontSize:normalize(16)}}/>
           <View style={{backgroundColor:"transparent",padding:30,margin:15,justifyContent:"center",alignItems:"center"}}>
               <View>
               <Image source={icons.pic_bg} style={{height:120,width:120,borderRadius:120/2}}/>
               <View style={{position:"absolute",height:30,width:30,borderRadius:30/2,backgroundColor:theme.colors.white,right:"0%",justifyContent:"center",alignItems:"center",top:"69%"}}>
               <EvilIcons name="pencil" size={26}  />
               </View>
               </View>
               <View style={{padding:10}}>
               <Text style={styles.h1}>Cody Brain</Text>
               </View>
               </View>
               <RenderBottomSheet/>
        </SafeAreaView>
    )
}

export default Setting;