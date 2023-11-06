/*
   AUTHOR: Muhammad Munir
  SUMMARY: HEADER COMPONENT WITH SEARCH SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {Alert, StyleSheet, Text, TextInput, View} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '.';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {windowWidth} from './Constants';
import {actuatedNormalize, Fonts} from '../utils';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    leftAction: any,
    navigation: any,
    pickLocation: boolean,
    text: any,
    style: any,
    rightAction?: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
export const HeaderWithSearch = (props: Props) =>
{
    return (
        <View style={styles.container}>
            <Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28}
                onPress={props.leftAction} />
            {props.pickLocation &&
                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('PickLocation')}>
                    <View style={[styles.inputView, props.style]}>
                        <EvilIcons name="location" size={26} color={theme.colors.darkGrey}/>
                        <Text style={styles.text}>{props.text}</Text>
                    </View>
                </TouchableWithoutFeedback>   
            }
            <Feather name={'search'} color={theme.colors.darkGrey} size={28}  onPress={props.rightAction}/>
        </View>
    )
}



const styles = StyleSheet.create
    ({
        container: {flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 14},
        inputView:
        {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 8,
            borderRadius: 15,
            backgroundColor: theme.colors.bgColor,
            width: windowWidth * 0.7
        },
        text: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, width: windowWidth * 0.6}
    })
