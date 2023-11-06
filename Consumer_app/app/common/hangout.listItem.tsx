/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   MAIN LIST ITEM SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import {Text, View, Image, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {theme} from '.';
import {actuatedNormalize, Fonts} from '../utils';
import {ASPECT_RATIO, windowHeight, windowWidth} from './Constants';
import PressableIcon from './pressable.icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity as RNGHTouchableOpacity } from "react-native-gesture-handler";

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    name: string,
    image: any,
    timing: any,
    rating: string,
    pricing: string,
    distance: any,
    isliked?: boolean,
    closing?: any,
    onPress: any
}

// START THE MAIN LIST ITEM FUNCTION THAT CAN BE USED IN MAIN LIST OF ITEMS(E.G, RESTAURANT).
export const HangoutListItem = (props: Props) =>
{
    const {name, image, timing, rating, pricing, distance, onPress} = props
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <Image source={{uri: image}} style={styles.itemImageContainer} borderRadius={12} />
            <View style={styles.margin}>
                <View style={{...styles.row, justifyContent: 'space-between'}}>
                    <Text style={{...styles.text, width: windowWidth * 0.55}}>{name}</Text>
                    <Text style={styles.text}>{pricing}</Text>
                </View>
                <View style={{...styles.row, justifyContent: 'space-between'}}>
                    <View style={{...styles.row, marginTop: 5}}>
                        <AntDesign name={'clockcircleo'} size={20} color={theme.colors.darkGrey} style={styles.margin} />
                        <Text style={styles.subText}>{`${timing} . ${distance}`}</Text>
                    </View>
                    <Text style={styles.subText}>{`Per Person`}</Text>
                </View>
            </View>
            <View style={styles.likeView}>
                <PressableIcon
                icon={<Ionicons name={'heart'} size={actuatedNormalize(32)} color={theme.colors.delete} />}
                onPress={() => Alert.alert('liked')}
                style={styles.iconView}
                />
            </View>
            <View style={[styles.starView,styles.iconView]}>
               <AntDesign name={'star'} size={actuatedNormalize(22)} color={theme.colors.secondary} />
               <Text style={styles.rating}>{'4.9'}</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create
    ({
        container:
        {
            borderRadius: 15,
            padding: 8,
            paddingBottom: 8,
            backgroundColor: theme.colors.bgColor,
            // width: windowWidth * 0.9,
            marginHorizontal: 10,
            marginTop: 10
        },
        itemImageContainer:
        {
            width: "100%",
            height: ASPECT_RATIO * windowHeight / 2.5,
            alignSelf: "center"
        },
        margin: {margin: 5},
        text:
        {
            fontSize: actuatedNormalize(18),
            fontFamily: Fonts.Medium,
            color: theme.colors.lightBlack,
            marginTop: 5
        },
        row: {flexDirection: 'row', alignItems: 'center'},
        subText:
        {
            fontSize: actuatedNormalize('16'),
            fontFamily: Fonts.Regular,
            color: theme.colors.darkGrey,
        },
        likeView: {position:'absolute', top:15, right:15},
        iconView:
        {
          height: actuatedNormalize(45),
          width: actuatedNormalize(45),
          borderRadius: actuatedNormalize(10),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.6)'
        },
        starView: {position:'absolute', top: 15, left: 15},
        rating:
        {
            fontSize: actuatedNormalize(13),
            fontFamily: Fonts.Regular,
            marginTop: 1
        }
    })