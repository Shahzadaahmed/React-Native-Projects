/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   COMMON GRID VIEW SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import {theme} from '.';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ASPECT_RATIO, windowHeight, windowWidth} from './Constants';
import {actuatedNormalize, Fonts} from '../utils';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    topHeading?: any,
    image: string,
    title: string,
    weight: string,
    price?: any,
    onPress: any,
    onPressAdd: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const GridView = (props: Props) => 
{
    const {topHeading, image, title, weight, price, onPress, onPressAdd} = props
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image source={{uri: image}} style={styles.image} />
                <Text style={{...styles.topHeaingText, display: topHeading ? 'flex' : 'none'}} numberOfLines={1}>{topHeading}</Text>
                <Text style={{...styles.titleText, height: actuatedNormalize(45)}} numberOfLines={2}>{title}</Text>
                <Text style={{...styles.subText, width: windowWidth * 0.35}}>{weight}</Text>
                <View style={{...styles.row, justifyContent: 'space-between'}}>
                    <View style={styles.whiteBG}>
                        <Text style={styles.titleText}>{price == 0 ? 'Free' : `$ ${price}`}</Text>
                    </View>
                    <AntDesign
                        name={'plus'}
                        size={24}
                        color={theme.colors.lightBlack}
                        style={styles.icon}
                        onPress={onPressAdd} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default GridView;

// STYLES
const styles = StyleSheet.create
    ({
        container:
        {
            width: windowWidth * 0.44,
            borderRadius: 12,
            backgroundColor: theme.colors.bgColor,
            marginTop: 10,
            padding: 10
        },
        image:
        {
            height: ASPECT_RATIO * windowHeight / 3.3,
            width: windowWidth * 0.4,
            borderRadius: 10,
            alignSelf: 'center'
            // resizeMode: 'contain'
        },
        topHeaingText:
        {
            fontSize: actuatedNormalize(12),
            fontFamily: Fonts.Regular,
            padding: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.6)',
            borderRadius: 10,
            position: 'absolute',
            top: 15,
            textAlign: 'center',
            width: windowWidth * 0.35,
            alignSelf: 'center',
            overflow: 'scroll'
        },
        titleText:
        {
            fontSize: actuatedNormalize(18),
            fontFamily: Fonts.Regular,
            color: theme.colors.lightBlack,
            marginVertical: 5,
            marginTop: '5%',
            textAlign: 'center',
        },
        subText:
        {
            fontSize: actuatedNormalize(14),
            fontFamily: Fonts.Regular,
            color: theme.colors.darkGrey,
            textAlign: 'center'
        },
        row:
        {
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 10
        },
        whiteBG:
        {
            width: windowWidth * 0.24,
            backgroundColor: theme.colors.white,
            paddingVertical: 6,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10
        },
        icon:
        {
            padding: 9,
            borderRadius: 10,
            backgroundColor: theme.colors.white,
            overflow: 'scroll',
            zIndex: 1
        }
    })
