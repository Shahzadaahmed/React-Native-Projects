/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB ITEM COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.import React from 'react'
import { Text, View,Image,StyleSheet,FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Fonts,actuatedNormalize} from '../../utils';
import {windowHeight, windowWidth} from '../../common/Constants';
import {theme} from '../../common';
import icon from '../../utils/icon';
import normalize from 'react-native-normalize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import svgs from '../../utils/svgs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Switch} from 'react-native-paper'
import Feather from 'react-native-vector-icons/Feather'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{   
    title?: string,
    icon?: any,
    discounts?:any,
    navigation?: any
}

// START THE MORE ITEM FUNCTION THAT WILL BE IMPORTED IN PARNET FILE.
export const  SeetingList = (props: Props) => 
{
    const [isSwitchOn, setIsSwitchOn] = React.useState(false); // VARIABLE IS DECLARED TO KEEP STATUS OF SWITCH
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn); // FUNCTION CALL WHEN SWITCH STATUS IS TAP 
    // RENDER FUNCTION FOR ACCOUNT
    const  RenderAccountCard = () =>
    {
        return(
            <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                <View style={styles.iconBox}>
                    <FontAwesome5 name="user-alt" size={15}/>
                    </View>
                    <View style={{justifyContent:"center",paddingHorizontal:10}}>
                    <Text style={styles.textH4}>Account</Text>
                    </View>
                    </View>
                    <View style={styles.iconRightView}>
                    <AntDesign name={"right"} color={theme.colors.darkGrey} size={20} style={{alignSelf:"center",}}/>
                    </View>
                </View>
        )
    }
    // RENDER FUNCTION FOR NOTIFICATION
    const  RenderNotificationCard = () =>
    {
        return(
            <View style={styles.itemContainer}>
                <View style={styles.iconContainer}>
                <View style={styles.iconBox}>
                    <Ionicons name="notifications-sharp" size={20}/>
                    </View>
                    <View style={{justifyContent:"center",paddingHorizontal:10}}>
                    <Text style={styles.textH4}>Notification</Text>
                    </View>
                    </View>
                    <View style={styles.iconRightView}>
                    <AntDesign name={"right"} color={theme.colors.darkGrey} size={20} style={{alignSelf:"center",}}/>
                    </View>
                </View>
        )
    }
    // RENDER FUNCTION FOR FAQ
    const  RenderFaqCard = () =>
    {
        return(
            <View style={styles.itemFaqContainer}>
                <View style={styles.iconContainer}>
                <View style={styles.iconBox}>
                    <AntDesign name="questioncircle" size={17}/>
                    </View>
                    <View style={{justifyContent:"center",paddingHorizontal:10}}>
                    <Text style={styles.textH4}>Faq</Text>
                    </View>
                    </View>
                    <View style={styles.iconRightView}>
                    <AntDesign name={"right"} color={theme.colors.darkGrey} size={20} style={{alignSelf:"center",}}/>
                    </View>
                </View>
        )
    }
    // RENDER FUNCTION FOR LOCATION
    const  RenderLocationCard = () =>
    {
        return(
            <View style={styles.itemLocationContainer}>
                <View style={styles.iconContainer}>
                <View style={styles.iconBox}>
                   <FontAwesome5 name="map-marker-alt" size={20}/>
                    </View>
                    <View style={{justifyContent:"center",paddingHorizontal:10}}>
                    <Text style={styles.textH4}>Location</Text>
                    </View>
                    </View>
                    <View style={styles.iconRightView}>
                    <Switch value={isSwitchOn} color={theme.colors.orange} style={{ transform: [{ scaleX: 1 }, { scaleY: 1.2 }] }} onValueChange={onToggleSwitch} />
                    </View>
                </View>
        )
    }
      // RENDER FUNCTION FOR PRIVACY POLICY
      const  RenderPrivacyCard = () =>
      {
          return(
              <View style={styles.itemLocationContainer}>
                  <View style={styles.iconContainer}>
                  <View style={styles.iconBox}>
                    <svgs.privacy_icon height={17} width={17}/>
                      </View>
                      <View style={{justifyContent:"center",paddingHorizontal:10,backgroundColor:"transparent",}}>
                      <Text style={styles.textH4}>Privacy Policy</Text>
                      </View>
                      </View>
                      <View style={styles.iconRightView}>
                     <AntDesign name={"right"} color={theme.colors.darkGrey} size={20} style={{alignSelf:"center",}}/>
                    </View>
                  </View>
          )
      }
      // RENDER FUNCTION FOR TERM OF USE
      const  RenderTermUseCard = () =>
      {
          return(
              <View style={styles.itemLocationContainer}>
                  <View style={styles.iconContainer}>
                  <View style={styles.iconBox}>
                  <svgs.term_icon height={17} width={17}/>
                      </View>
                      <View style={{justifyContent:"center",paddingHorizontal:10}}>
                      <Text style={styles.textH4}>Terms of Use</Text>
                      </View>
                      </View>
                      <View style={styles.iconRightView}>
                    <AntDesign name={"right"} color={theme.colors.darkGrey} size={20} style={{alignSelf:"center",}}/>
                    </View>
                  </View>
          )
      }
       // RENDER FUNCTION FOR TERM OF USE
       const  RenderLogOutCard = () =>
       {
           return(
               <View style={styles.itemLocationContainer}>
                   <View style={styles.iconContainer}>
                   <View style={styles.iconBox}>
                      <Feather name="log-out" size={20}/>
                       </View>
                       <View style={{justifyContent:"center",paddingHorizontal:10}}>
                       <Text style={styles.textH4}>Log Out</Text>
                       </View>
                       </View>
                       <View style={styles.iconRightView}>
                     <AntDesign name={"right"} color={theme.colors.darkGrey} size={20} style={{alignSelf:"center",}}/>
                     </View>
                   </View>
           )
       }
        // MAIN RETURN ITS SHOW PAGE OF SETTING WITH COMPONENTS
        return (
        <View style={{padding:10}}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Account")} >
            <RenderAccountCard/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Notification")}>
            <RenderNotificationCard/>
            </TouchableOpacity>
            <TouchableOpacity>
            <RenderLocationCard/>
            </TouchableOpacity>
            <View style={{height:40}}>
                </View>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Faq")}>
            <RenderFaqCard/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Privacy")}>
            <RenderPrivacyCard/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Terms")}>
            <RenderTermUseCard/>
            </TouchableOpacity>
            <TouchableOpacity>
            <RenderLogOutCard/>
            </TouchableOpacity>
        </View>
    )
}


//STYLING
const styles = StyleSheet.create({ 
    itemContainer: 
    {
        backgroundColor:"transparent",
        flexDirection:"row",
        width:"100%",
        paddingTop:20,
    },
    itemLocationContainer: 
    {
        backgroundColor:"transparent",
        flexDirection:"row",
        width:"100%",
        paddingTop:15,
    },
    itemFaqContainer: 
    {
        backgroundColor:"transparent",
        flexDirection:"row",
        width:"100%",    
    },
    iconRightView:
    {
        justifyContent:"flex-end",
        flexDirection:"row",
        backgroundColor:"transparent",
        width:"60%"
    },
    iconBox:{
        backgroundColor:theme.colors.bgColor,
        height:40,
        width:40,
        borderRadius:8,
        justifyContent:"center",
        alignItems:"center"
    },
    iconContainer:
    {
        width:"40%",
        flexDirection:"row",
        backgroundColor:"transparent"
    },
    textH2:
    {
      fontSize: actuatedNormalize('17'),
      fontFamily: Fonts.Regular,
      color: theme.colors.black,
    },
    textH3:{
      fontSize: actuatedNormalize('17'),
      fontFamily: Fonts.Regular,
      color: theme.colors.darkGrey,
    },
    textH1:
    {
      fontSize: actuatedNormalize('12'),
      fontFamily: Fonts.Regular,
      color: theme.colors.black,
      marginHorizontal:5
    },
    textH4:
    {
      fontSize: actuatedNormalize('14'),
      fontFamily: Fonts.Medium,
      color: theme.colors.black,
    },
    textH5:
    {
      fontSize: actuatedNormalize('16'),
      fontFamily: Fonts.Regular,
      color: theme.colors.black,
      marginHorizontal:10
    },

})


export default SeetingList

