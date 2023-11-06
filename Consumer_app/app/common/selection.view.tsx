import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import {theme} from '.';
import {actuatedNormalize, Fonts} from '../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props
{
    value: string,
    selected: boolean,
    onPress: any,
    icon? : boolean
}

const SelectionView = (props: Props) =>
{
    const {value, selected, onPress, icon} = props

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.text}>{value}</Text>
                {icon ? 
                selected ? 
                <Ionicons name={'checkbox'} size={30} color={theme.colors.active} /> 
                :
                <MaterialIcons name={'check-box-outline-blank'} size={30} color={theme.colors.darkGrey} /> 
                :
                <View style={styles.dotView}>
                <View style={{...styles.dot, backgroundColor: selected ? theme.colors.active : theme.colors.white}} />
            </View>
                }
               
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SelectionView;

const styles = StyleSheet.create
    ({
        container:
        {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // marginHorizontal: '5%',
            marginTop: '5%'
        },
        dotView:
        {
            height: actuatedNormalize(25),
            width: actuatedNormalize(25),
            borderRadius: actuatedNormalize(12.5),
            borderWidth: 2,
            borderColor: theme.colors.active,
            padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
        },
        dot:
        {
            height: actuatedNormalize(12.5),
            width: actuatedNormalize(12.5),
            borderRadius: actuatedNormalize(6.25),
        },
        text:
        {
            fontSize: actuatedNormalize(16),
            fontFamily: Fonts.Regular,
            color: theme.colors.lightBlack
        },
        icon:
        {
            height: 25,
            width: 25,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: theme.colors.darkGrey
        }
    })
