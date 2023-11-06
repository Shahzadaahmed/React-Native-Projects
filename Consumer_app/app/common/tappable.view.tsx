/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   TAPPABLE SMALL VIEW SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import {theme} from '.';
import {actuatedNormalize, Fonts} from '../utils';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    icon: any,
    text: string,
    onPress: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const TappableView = (props: Props) => 
{
    const {icon, text, onPress} = props
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
        {icon}
            <Text style={styles.text}>{text}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default TappableView;

const styles = StyleSheet.create
({
    container: 
    { 
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10, 
      padding: 5, 
      borderRadius: 25, 
      backgroundColor: theme.colors.bgColor
    },
    text:
    {
      fontSize: actuatedNormalize(14),
      fontFamily: Fonts.Regular,
      paddingLeft: 5
    }
})
