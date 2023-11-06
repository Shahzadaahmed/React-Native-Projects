/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB ITEM COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.import React from 'react'
import { Text, View,Image,StyleSheet } from 'react-native'
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Fonts} from '../../utils';
import {windowHeight, windowWidth} from '../../common/Constants';
import {theme} from '../../common';
import icon from '../../utils/icon';
import normalize from 'react-native-normalize';


// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    title: string,
    icon: any,
    discounts:any,
}
// START THE MORE ITEM FUNCTION THAT WILL BE IMPORTED IN PARNET FILE.
export const  OfferList = (props: Props) => 
{
    const {title,icon,discounts} = props
    return (
        <View style={styles.itemContainer}>
        <View style={styles.scondaryContainer}>
            <View style={styles.imageView}>
                <Image source = {icon} style={{height:windowHeight*0.09,width:windowWidth*0.22,borderRadius:15}}/>
                </View>
                <View style={{height:"70%",backgroundColor:"transparent",width:windowWidth*0.6,alignSelf:"center",justifyContent:"center"}}>
                <Text style={{fontSize:normalize(16),color:theme.colors.darkGrey}}>{title}</Text>
                <View style={{flexDirection:"row"}}>
                <Text style={{fontSize:normalize(20),color:theme.colors.darkGrey,fontWeight:"600",marginVertical:5}}>{discounts}</Text>
                <Text style={{alignSelf:"center",marginHorizontal:5,color:theme.colors.darkGrey,fontSize:12}}>On selected Items</Text>
                </View>
                </View>
            </View>
            
        </View>
    )
}


//STYLING
const styles = StyleSheet.create({ 
    itemContainer: 
    {
        paddingVertical: '1%', 
        paddingHorizontal: 10,
        backgroundColor: theme.colors.white, 
        borderRadius: 15, 
        marginTop: 12,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    scondaryContainer:
    {
        height:windowHeight*0.13,
        width:windowWidth*0.9,
        flexDirection:"row",
        backgroundColor:theme.colors.bgColor,
        alignSelf:"center",
        borderRadius:16
    },
    imageView:
    {
        height:"100%",
        backgroundColor:"transparent",
        width:windowWidth*0.3,
        justifyContent:"center",
        alignItems:"center"

    }

})


export default OfferList

