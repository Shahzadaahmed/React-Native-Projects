/*
   AUTHOR: Muhammad Munir
  SUMMARY: PRIMARY BUTTON SUMMARY SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import
{
    View,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    Dimensions,
    TouchableWithoutFeedback,
} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '.';
import {actuatedNormalize, Fonts} from '../utils';
import {windowWidth} from './Constants';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT
interface Props
{
    height: number,
    width: number,
    backgroundColor: string,
    borderRadius: number,
    onPress: any,
    fontSize: number,
    text: string,
    icon?: any,
    style?: any,
    textStyle? : any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
export const PrimaryButton = (props: Props) => 
{
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View
            style=
            {[
                styles.container,
                props.style && props.style,
            {
                height: props.height,
                width: props.width,
                backgroundColor: props.backgroundColor,
                borderRadius: props.borderRadius ? props.borderRadius : 10,
            }
            ]}>
            {props.icon}
            <Text
                style={{
                    fontSize: props.fontSize,
                    color: theme.colors.black,
                    textAlign: 'left',
                    fontFamily: Fonts.Regular,
                    marginLeft: 10,
                    width: props.textStyle && props.textStyle
                }}
                numberOfLines={2}>
                {props.text}
            </Text>
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        padding: 10,
        paddingHorizontal: 15
    },
});
