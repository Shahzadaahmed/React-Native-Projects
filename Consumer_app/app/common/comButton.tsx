/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   COMMON BUTTON SUMMARY.
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

export type ButtonType = {    
    style?: any
    onPress?: any
    title?: string
    textStyle?: any
    disabled?: boolean
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const comButton = (props: ButtonType) => {
    const { style, onPress, title, textStyle, disabled,} = props;
    return (
        <TouchableOpacity disabled={disabled} style={[styles.button, style]} onPress={onPress}>
            <Text style={[styles.textField, textStyle]}>{title}</Text>
    </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    button:
    {
        alignItems: 'center',
        backgroundColor: Colors.buttonText,
        width: "100%",
        alignSelf: 'center',
        paddingVertical: 16,
        justifyContent: 'center',
        borderRadius: 10,
        opacity: 1,
    },
    textField: 
    { 
        fontSize: actuatedNormalize('16'), 
        color: Colors.loginButtonText, 
        fontFamily: Fonts.Regular 
    }
});

export default comButton;