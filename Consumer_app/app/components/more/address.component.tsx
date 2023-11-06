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

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}
// START THE ADDRESS PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const Address = (props: Props) =>
{
    const [shetIndex,setSheetIndex] = useState(windowHeight*0.04) //SHEET HEIGHT 
    const [sheetAddAdressStatus,setSheetAddAressStatus] = useState(false) //SHEET ADDADDEESS STATUS 
      //FUNCTION BOTTOMSHEET ACCESS
      const RenderBottomSheet = ()=>
      {
          return(
              <ScrollBottomSheet<string> // If you are using TS, that'll infer the renderItem `item` type
                  componentType="FlatList"
                  snapPoints={[shetIndex, '50%', windowHeight - 200]} 
                  initialSnapIndex={2} //SNAP INDEX
                  renderHandle={() => (
                  <View style={styles.header}>
                  <View style={BottomSheetStyle.panelHandle} />
                  <AddAddress handleSheetStatus={handleSheetStatus}/>
                  </View>
                  )}
                  contentContainerStyle={BottomSheetStyle.contentContainerStyle}
              />
          )
      }
    //FUNCTION HANDLE BOTTOMSHEET STATUS
    const handleSheetStatus = ()=>
    {
    if (sheetAddAdressStatus===true)
    {  
        setSheetAddAressStatus(false)
    }else{
        setSheetAddAressStatus(true)
       
    }
    }
    //MAIN PAGE WHICH IS RETURN ADDRESS LIST
    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:'center'}}>          
            <TouchableOpacity onPress={()=> props.navigation.goBack()} style={{margin:11}}>
            <Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={22} />
            </TouchableOpacity>
            <Text style={styles.header}>{'Address'}</Text>
            <TouchableOpacity onPress={()=>handleSheetStatus()} style={{margin:11}}>
            <AntDesign name={'plus'} color={theme.colors.black} size={25} style={{right:"50%"}} />
            </TouchableOpacity>
            </View>
            <ScrollView>
            {AddressItems.map((item, index)=> 
                <View key={item.id}>
                    <TouchableOpacity>
                    <AddressList
                    name={item.place_name}
                    address={item.address}
                    icon={item.icon}
                    />
                    </TouchableOpacity>
                </View>
            )}
           
        </ScrollView>
        {
            sheetAddAdressStatus===true?
        <RenderBottomSheet/>
        :
        null
         }
        </SafeAreaView>
    )
}

export default Address;