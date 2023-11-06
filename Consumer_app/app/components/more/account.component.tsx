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

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any,
    route: any
}
// START THE MORE PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const Account = (props: Props) =>
{
    // RETURN ACCOUNT SCREEN 
    return (
        <SafeAreaView style={styles.container}>
            <Header title={"Account"} iconName={"arrow-back"} iconColor={theme.colors.darkGrey} onPress={()=>props.navigation.goBack()}/>
             <ScrollView>
             <View style={{margin:15,backgroundColor:"transparent"}}>
                <View>
                    <View style={{padding:10}}>
                    <Text style={styles.textH4}>Full name</Text>
                    </View>
                    <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
                    <TextInput placeholderTitle="Enter full name" TextInputView={{height:48,width:"100%",backgroundColor:theme.colors.bgColor}} placeholderTextColor={theme.colors.black} />
                    </View>
                    </View>
                    <View>
                    <View style={{padding:10}}>
                    <Text style={styles.textH4}>Phone</Text>
                    </View>
                    <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
                    <TextInput placeholderTitle="Enter phone number" TextInputView={{height:48,width:"100%",backgroundColor:theme.colors.bgColor}} placeholderTextColor={theme.colors.black} />
                    </View>
                    </View>
                    <View>
                    <View style={{padding:10}}>
                    <Text style={styles.textH4}>Email</Text>
                    </View>
                    <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
                    <TextInput placeholderTitle="Enter email" TextInputView={{height:48,width:"100%",backgroundColor:theme.colors.bgColor}} placeholderTextColor={theme.colors.black} />
                    </View>
                    </View>
                    <View>
                    <View style={{padding:10}}>
                    <Text style={styles.textH4}>Date of birth</Text>
                    </View>
                    <View style={{justifyContent:"center",width:"100%",alignItems:"center"}}>
                    <TextInput placeholderTitle="Enter date of birth" TextInputView={{height:48,width:"100%",backgroundColor:theme.colors.bgColor}} placeholderTextColor={theme.colors.black} />
                    </View>
                    </View>
                    <Button title="Save" style={{marginVertical:25,width:"100%"}}/>
                   
                </View>
               
                </ScrollView>
                <View style={{backgroundColor:"transparent",padding:20,position:"absolute",top:"95%",alignSelf:"center",justifyContent:"center"}}>
                    <Button iconName={"trash"} title={"Delete"} iconColor={"red"} iconSize={20} style={{backgroundColor:theme.colors.white,}} iconStyle={{right:5}} textStyle={{color:"red"}}/>
                        </View>
        </SafeAreaView>
    )
}

export default Account;