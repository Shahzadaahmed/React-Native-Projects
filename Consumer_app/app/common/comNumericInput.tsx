import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import theme from './theme';
import { Colors } from '../../style';
import normalize from 'react-native-normalize';
import { actuatedNormalize, Fonts } from '../utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View} from 'native-base';

export type NumericButtonType = {    
    style?: any
    styleLeftButton:any
    styleRightButton:any
    onPressLeft?: any
    onPressRight?:any
    value?: string
    textStyle?: any
    btnIconLeft?:any
    btnIconLeftSize:any
    btnIconRight?:any
    btnIconRightSize:any
    disabled?: boolean
}

// <Text style={[styles.textField, textStyle]}>{value}</Text>
const NumericInput = (props: NumericButtonType) => {
    const { style, onPressLeft,onPressRight,styleLeftButton,styleRightButton ,value, textStyle, disabled,btnIconLeft,btnIconRight,btnIconLeftSize,btnIconRightSize } = props;
    return (
        <View style={[styles.boxView, style]} >
        <TouchableOpacity disabled={disabled}  onPress={onPressLeft}>
           <AntDesign name={btnIconLeft} size={btnIconLeftSize}  />
         </TouchableOpacity>
 <Text style={[styles.textField, textStyle]}>{value}</Text>
         <TouchableOpacity disabled={disabled}  onPress={onPressRight}>
           <AntDesign name={btnIconRight} size={btnIconRightSize}  />
         </TouchableOpacity>
    </View>
        )
}

const styles = StyleSheet.create({
    boxView:
    {
        alignItems: 'center',
        backgroundColor: Colors.buttonText,
        width: "90%",
        height: 40,
        justifyContent: "space-evenly",
        borderRadius: 15,
        opacity: 1,
        flexDirection:"row",
        margin:5
    },
    textField: 
    { 
        fontSize: actuatedNormalize('16'), 
        color: Colors.loginButtonText, 
        fontFamily: Fonts.Regular 
    }
});

export default NumericInput;