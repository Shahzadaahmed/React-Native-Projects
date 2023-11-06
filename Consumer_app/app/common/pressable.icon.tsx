/*
   AUTHOR: Muhammad Munir
  SUMMARY: PRESSABLE ICON SUMMARY SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {StyleSheet, Text, View, TouchableWithoutFeedback, Alert} from 'react-native'
import {theme} from '.';
import Ionicons from 'react-native-vector-icons/Ionicons';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT
interface Props
{
    icon: any,
    onPress: any,
    style: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const PressableIcon = (props: Props) =>
{
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
            <View style={[styles.iconView, props.style]}>
                {props.icon}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default PressableIcon;

const styles = StyleSheet.create({
    iconView:
    {
        height: 50,
        width: 50,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.bgColor
    },
})
