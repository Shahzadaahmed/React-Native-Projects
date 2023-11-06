import React ,{useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View,Image, TouchableOpacity, } from 'react-native'
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import Images from '../../common/Images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import NumericInput from '../../common/comNumericInput';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import Animated, {runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming} from 'react-native-reanimated'
import {TextInput} from 'react-native-gesture-handler';
import normalize from 'react-native-normalize';
import Button from '../../common/comButton'

//PROPS INTERFACE DATA COMES FROM PARENT TO CHILD HERE
interface Props
{
    details:any
}
//MENUVIEW WHICH IN IMPORTED IN CART.COMPONENT.TSX TO SHOW LIST OF MENUS
const PromoCode = (props: Props,) => 
{
            //MAIN VIEW FOR PROMO CODE 
             return (
            <View style={{height:"100%",backgroundColor:"transparent",width:"99%",padding:20}}>
              <Text style={styles.title}>PromoCode</Text>
              <View style={styles.inputContainer}>
                <TextInput
                placeholder={"Enter PromoCode"}
                placeholderTextColor={theme.colors.black}
                style={styles.textInput}
                />
                <AntDesign name="checkcircle" color="#4BB34B" size={22} style={{alignSelf:"center",}} />
                </View>
                <Text style={styles.textH2}>Discount $ 12</Text>
                <Button title={"Apply"} style={{width:"100%",height:48,borderRadius:12}}/>
          </View>
    )
}

//STYLING
export default PromoCode;
const styles = StyleSheet.create({ 
    row:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:
    {
    fontSize: actuatedNormalize('24'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.black,
    marginHorizontal:5
    },
    textH2:
    {
    fontSize: actuatedNormalize('14'),
    fontFamily: Fonts.Regular,
    color: "#4BB34B",
    padding:10
    },
    inputContainer:
    {
    width:"100%",
    backgroundColor:theme.colors.bgColor,
    height:48,
    borderRadius:20,
    flexDirection:"row",
    marginTop:20
    },
    textInput:
    {
    fontSize:normalize(16),
    fontFamily:Fonts.Regular,color:theme.colors.black,
    width:"88%",
    backgroundColor:"transparent",
    padding:10
    }

})
