/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState} from 'react'
import {FlatList, SafeAreaView, Image,Text, View, ScrollView,TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import {windowHeight, windowWidth} from '../../common/Constants';
import {moreItems, roles} from '../../data';
import {MoreItem} from './more.item';
import styles from './faqStyles';
import Header from '../../common/headerTitleBack';
import {theme} from '../../common';
import icon from '../../../assets/icons'
import {faqCategory,faqQuestion} from '../../data/index'
import {actuatedNormalize, Fonts} from '../../utils';
import Entypo from 'react-native-vector-icons/Entypo';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}

// START THE FAQ PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const Faq = (props: Props) =>
{    //VARIABLE DECLARATION
     const [type, setType] = useState('') // TYPE VARIABLE USE TO UPDATE STATUS 
     const [status,setStatus] = useState('') // STATUS VARIABLE USE FOR DESCRIPTION SHOW OR NOT ON TAP
    //RENDER FUNCTION FOR CATEGORIES LIST
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
    //HANDLE FUNCTION TO UPDATE STATUS AND SHOW DESCRIPTION
    const hanleQuestionDescription = (items:any) =>
    {
        if (items.id === status)
        {
            setStatus("") // SET STATUS EMPTY IS ID MATCH
           
        }else{
            setStatus(items.id) // SET STATUS HERE TO SHOW DESCRIPTION
        }
     

    }
    // RENDER FUNCTION FOR FAQ QUESTION CARD
    const RenderFaqQuestionCard= ({items}:any) =>
    {
        const {question,description,id} = items //MANIPULATION OF ITEMS 
        return(
            <View>
            <View style={{backgroundColor:"transprent",flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:10}}>
            <Text style={styles.h1}>{question} </Text>
            <TouchableOpacity onPress ={()=>hanleQuestionDescription(items)}>
            {
             id === status? 
             <Entypo name="chevron-small-up" size={30}/>
             :
            <Entypo name="chevron-small-down" size={30}/>
              }
            </TouchableOpacity>
            </View>
            {
             id === status?   
             <View style={{margin:10}}>
            <Text style={styles.textH3}>{description} </Text>
            </View>
            :
            null
             }
            </View>
        )
    }
    // RETURN FAQ SCREEN 
    return (
        <SafeAreaView style={styles.container}>
           <Header title={"Faq"} iconName={"arrow-back"} iconColor={theme.colors.darkGrey} onPress={()=>props.navigation.goBack()}/>
           <ScrollView>
           <View style={{margin:15,justifyContent:"center",alignItems:"center",backgroundColor:"transparent"}}>
           <Image source={icon.help_icon} resizeMode="contain" resizeMethod="auto" style={{height:windowHeight*0.18,width:"100%",backgroundColor:"transparent"}}/>
           </View>
           <View style={{marginHorizontal:"5%"}}>
           <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginVertical: '1%'}}
                data={faqCategory}
                keyExtractor={(item)=> item.id}
                renderItem={renderItem}
                />
                </View>
                <View style={{margin:15}}>
                {faqQuestion.map((item, index)=> 
                <View key={item.id}>
                    <RenderFaqQuestionCard items = {item}/>
                </View>
            )}
            </View>
           </ScrollView>
        </SafeAreaView>
    )
}

export default Faq;