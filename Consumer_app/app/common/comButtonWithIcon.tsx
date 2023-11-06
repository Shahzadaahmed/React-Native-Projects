/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   COMMON BUTTON WITH ICON SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import theme from './theme';
import { Colors } from '../../style';
import normalize from 'react-native-normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { actuatedNormalize, Fonts,Svgs } from '../utils';
import svgs from '../utils/svgs';

export type ButtonType = {    
    style?: any
    onPress?: any
    title?: string
    textStyle?: any
    disabled?: boolean
    iconName?:any,
    iconSize?:any,
    iconStyle?:any,
    iconColor?:any,
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const comButton = (props: ButtonType) => {
    const { style, onPress, title, textStyle, disabled,iconName,iconSize,iconStyle,iconColor} = props;
    return (
     <TouchableOpacity disabled={disabled} style={[styles.button, style]} onPress={onPress}>
      <Ionicons name={iconName} size={iconSize} color={iconColor} style={[iconStyle]}/>   
    <Text style={[styles.textField, textStyle]}>{title}</Text>
    </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    button:
    {
        alignItems: 'center',
        backgroundColor: Colors.buttonText,
        width: "90%",
        alignSelf: 'center',
        height: 48,
        justifyContent: 'center',
        borderRadius: 15,
        opacity: 1,
        flexDirection:"row"
    },
    textField: 
    { 
        fontSize: actuatedNormalize('16'), 
        color: Colors.loginButtonText, 
        fontFamily: Fonts.Regular 
    }
});

export default comButton;