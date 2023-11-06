/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   NOTIFICATION HEADER SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../common';
import styles from './notification.style';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
    {
       title: String,
       rightIcon: any,
       rightAction: any,
       leftAction: any
    }

// START THE HEADER FUNCTION THAT WILL BE IMPORTED IN NOTIFICATION COMPONENT FILE.
export const Header = (props: Props) => 
{
    const {title, rightIcon, rightAction, leftAction} = props
    return (
        <View style={styles.headerContainer}>
            <Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28}
            onPress={leftAction}/>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableWithoutFeedback onPress={rightAction}>
            {rightIcon}
            </TouchableWithoutFeedback>
        </View>
    )
}

