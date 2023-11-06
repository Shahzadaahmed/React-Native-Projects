/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   RESTAURANT ITEM SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {Alert, Image, StyleSheet, Text, View, ImageBackground, TouchableWithoutFeedback} from 'react-native'
import {theme} from '../../common'
import styles from './restaurant.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Svgs} from '../../utils';
import PressableIcon from '../../common/pressable.icon';
import Ionicons from 'react-native-vector-icons/Ionicons';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    image: any,
    name: String,
    rating: String,
    distance: String,
    type: string,
    closing: any,
    isList: boolean,
    onPress: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HOME STACK FILE.
const RestaurantItem = (props: Props) =>
{
    const {image, name, rating, type, distance, closing, isList, onPress} = props
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={isList ? styles.listContainer : styles.gridContainer}>
            <Image source={{uri: image}} style={isList ? styles.listItemContainer : styles.gridItemContainer} borderRadius={15} />
            <View style={styles.horizontal}>
                <Text style={isList ? styles.listText : styles.gridText}>{name}</Text>
                <View style={isList ? styles.listSubTextView : styles.gridSubTextView}>
                    <AntDesign name={'star'} color={theme.colors.secondary} size={20} />
                    <Text style={{...isList ? styles.listSubText : styles.gridSubText, color: theme.colors.black}}>{rating}</Text>
                    <Text style={{...styles.listSubText, display: isList ? 'flex' : 'none'}} numberOfLines={1}>{`.  ${type}  .  ${distance}`}</Text>
                </View>
                <Text style={{...styles.listSubText, display: isList ? 'none' : 'flex'}} numberOfLines={1}>{`.  ${type}  .  ${distance}`}</Text>
            </View>
            <View style={{...styles.clockView, display: closing ? 'flex' : 'none'}}>
                <Svgs.ClockIcon height={24} width={24} />
                <Text style={{...styles.subText, color: theme.colors.black}}>{closing}</Text>
            </View>
            <View style={styles.likeView}>
                <PressableIcon
                icon={<Ionicons name={'heart'} size={isList ? 32 : 22} color={theme.colors.delete} />}
                onPress={() => Alert.alert('liked')}
                style={isList ? styles.listIconsView : styles.gridIconView}
                />
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default RestaurantItem;
