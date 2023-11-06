/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {FlatList, SafeAreaView, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {windowHeight, windowWidth} from '../../common/Constants';
import {moreItems, roles} from '../../data';
import {MoreItem} from './more.item';
import styles from './privacyStyles';
import Header from '../../common/headerTitleBack';
import {theme} from '../../common';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}
// START THE TERMS OF USE PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const Terms = (props: Props) =>
{

    // RETURN TERMS OF USE SCREEN 
    return (
        <SafeAreaView style={styles.container}>
          <Header title={"Terms of Use"} iconName={"arrow-back"} iconColor={theme.colors.darkGrey} textStyle={styles.textH5} onPress={()=>props.navigation.goBack()}/>
          <ScrollView>
           <View style={{margin:10,backgroundColor:"transparent",padding:8}}>
               <Text style={styles.titleText}>Terms of Use</Text>
               <View style={{paddingTop:5,paddingHorizontal:3}}>
               <Text style={styles.textH4}>Last updated July 2, 2021</Text>
               </View>
               <View style={{paddingTop:25}}>
               <Text style={styles.textH3}>You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos, or see more relevant search results. And you can use many Google services when you’re signed out or without creating an account at all, like searching on Google or watching YouTube videos. You can also choose to browse the web privately using Chrome in Incognito mode. And across our services, you can adjust your privacy settings to control what we collect and how your information is used.</Text>
                   </View>
                   <View style={{paddingTop:20}}>
                   <Text style={styles.h1}>Title</Text>
                       </View>
                       <View style={{paddingTop:20}}>
                           <Text style={styles.textH3}>You can use our services in a variety of ways to manage your privacy. For example, you can sign up for a Google Account if you want to create and manage content like emails and photos, or see more relevant search results. And you can use many Google services when you’re signed out or without creating an account at all, like searching on Google or watching YouTube videos. You can also choose to browse the web privately using Chrome in Incognito mode. And across our services, you can adjust your privacy settings to control what we collect and how your information is used.</Text>
                           </View>
               </View>
        </ScrollView>
        </SafeAreaView>
    )
}

export default Terms;