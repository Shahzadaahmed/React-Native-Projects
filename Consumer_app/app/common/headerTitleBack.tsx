import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View
} from 'react-native';
import theme from './theme';
import { Colors } from '../../style';
import normalize from 'react-native-normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { actuatedNormalize, Fonts,Svgs } from '../utils';

//INTERFACE 
export type HeaderType = {    
    style?: any
    onPress?: void
    title?: string
    textStyle?: any
    disabled?: boolean
    iconName?:any
    iconColor?:any
    iconSize?:any
    iconViewStyle?:any
}

//HEADER WITH TITLE AND BACK BUTTON
const HeaderTitleBack = (props: HeaderType) => {
    const { style, onPress, title, textStyle, disabled,iconName,iconColor,iconViewStyle,} = props;
    return (
        <View style={{flexDirection:"row",}}> 
            <View style={{width:"20%"}}>         
            <TouchableOpacity  style={[iconViewStyle,{margin:11}]} onPress={onPress}>
            <Ionicons name={iconName} color={iconColor} size={25}/>
            </TouchableOpacity>
            </View>
            <View style={{width:"60%"}}>         
            <Text style={[styles.headerText,textStyle]}>{title}</Text>
            </View>
            <View style={{width:"20%"}}>  
            </View>
            </View>
        )
}
//STYLING
const styles = StyleSheet.create({
    headerText:
    {
        fontSize:actuatedNormalize('20'),
        fontFamily: Fonts.SemiBold,
        padding: '4%',
        textAlign: 'center',
    }
});

export default HeaderTitleBack;