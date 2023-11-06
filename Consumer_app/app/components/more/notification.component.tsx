/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {FlatList, SafeAreaView, Text, View, TouchableOpacity,ScrollView} from 'react-native'
import {windowHeight, windowWidth} from '../../common/Constants';
import {moreItems, roles} from '../../data';
import {MoreItem} from './more.item';
import styles from './accountStyles';
import TextInput from '../../common/text.input'
import Header from '../../common/headerTitleBack';
import {theme} from '../../common';
import Button from '../../common/comButtonWithIcon'
import {Switch} from 'react-native-paper'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any,
    route: any
}

// START THE NOTIFICATION PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const Notification = (props: Props) =>
{  
    //VARIABLE DECLARATION
    const [isSwitchOn, setIsSwitchOn] = React.useState(false); // VARIABLE IS DECLARED TO KEEP STATUS OF SWITCH
    const [isSwitchOn1, setIsSwitchOn1] = React.useState(false); // VARIABLE IS DECLARED TO KEEP STATUS OF SWITCH
    const [isSwitchOn2, setIsSwitchOn2] = React.useState(false); // VARIABLE IS DECLARED TO KEEP STATUS OF SWITCH
    //FUNCTION DECLARATION
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn); // FUNCTION CALL WHEN SWITCH STATUS IS TAP 
    const onToggleSwitch1 = () => setIsSwitchOn1(!isSwitchOn1); // FUNCTION CALL WHEN SWITCH STATUS IS TAP 
    const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2); // FUNCTION CALL WHEN SWITCH STATUS IS TAP 
    // RETURN ACCOUNT SCREEN 
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Notification"} iconName={"arrow-back"}  iconColor={theme.colors.darkGrey} onPress={()=>props.navigation.goBack()}/>
             <ScrollView>
             <View style={{margin:15,backgroundColor:"transparent"}}>
                <View style={{backgroundColor:"transparent",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={styles.textH2}>
                        Title
                        </Text>
                        <Switch value={isSwitchOn} color={theme.colors.orange} style={{ transform: [{ scaleX: 1 }, { scaleY: 1.2 }] }} onValueChange={onToggleSwitch} />
                    </View>
                   <View style={{paddingRight:"20%"}}>
                       <Text style={styles.textH5} >You will recive notifications with updates and other events </Text>
                       </View>
                </View>
                <View style={{margin:15,backgroundColor:"transparent"}}>
                <View style={{backgroundColor:"transparent",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={styles.textH2}>
                        Title
                        </Text>
                        <Switch value={isSwitchOn1} color={theme.colors.orange} style={{ transform: [{ scaleX: 1 }, { scaleY: 1.2 }] }} onValueChange={onToggleSwitch1} />
                    </View>
                   <View style={{paddingRight:"20%"}}>
                       <Text style={styles.textH5} >You will recive notifications with updates and other events </Text>
                       </View>
                </View>
                <View style={{margin:15,backgroundColor:"transparent"}}>
                <View style={{backgroundColor:"transparent",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={styles.textH2}>
                        Title
                        </Text>
                        <Switch value={isSwitchOn2} color={theme.colors.orange} style={{ transform: [{ scaleX: 1 }, { scaleY: 1.2 }] }} onValueChange={onToggleSwitch2} />
                    </View>
                   
                </View>
               
                </ScrollView>
               
        </SafeAreaView>
    )
}

export default Notification;