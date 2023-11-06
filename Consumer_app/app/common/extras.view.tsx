/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   EXTRA (VIEW) SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import {theme} from '.';
import {actuatedNormalize, Fonts} from '../utils';
import {windowWidth} from './Constants';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    name: string,
    icon: any,
    price: number,
    selected: boolean,
    onPress: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const Extras = (props: Props) => 
{
    const {name, icon: Icon, price, selected, onPress} = props
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={{...styles.container, borderColor: selected ? theme.colors.secondary : theme.colors.bgColor}}>
                <Icon height={'50%'} width={'100%'} style={{alignSelf: 'center'}} />
                <Text style={styles.text}>{name}</Text>
                <Text style={styles.subText}>{`$ ${price}`}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Extras;

const styles = StyleSheet.create
    ({
        container:
        {
            marginRight: 15,
            width: windowWidth * 0.23,
            backgroundColor: theme.colors.bgColor,
            borderRadius: 15,
            overflow: 'scroll',
            borderWidth: 2.5,
            paddingVertical: '5%'
        },
        text:
        {
            fontSize: actuatedNormalize(16),
            fontFamily: Fonts.Regular,
            textAlign: 'center',
            color: theme.colors.black,
            marginVertical: 5
        },
        subText:
        {
            fontSize: actuatedNormalize(16),
            fontFamily: Fonts.Regular,
            textAlign: 'center',
            color: theme.colors.darkGrey
        },
    })
