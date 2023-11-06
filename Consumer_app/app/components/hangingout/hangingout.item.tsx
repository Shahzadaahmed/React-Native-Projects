/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   HANGOUT ITEM SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import { Text, View, Image, Alert } from 'react-native';
import {theme} from '../../common';
import {windowWidth} from '../../common/Constants';
import styles from './hangingout.style';
import AntDesign from 'react-native-vector-icons/AntDesign';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    name: string,
    image: any,
    timing: any,
    rating: string,
    pricing: string,
    distance: any
}

// START THE HANGOUT ITEM FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
export const HangoutItem = (props: Props) => {
    const {name, image, timing, rating, pricing, distance} = props
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri: image}} style={styles.itemImageContainer} borderRadius={15} />
             <View style={styles.margin}>
                 <View style={{...styles.row,justifyContent:'space-between'}}>
                <Text style={{...styles.text,width: windowWidth*0.55}}>{name}</Text>
                <Text style={styles.text}>{pricing}</Text>
                </View>
                <View style={{...styles.row,justifyContent:'space-between'}}>
                    <View style={{...styles.row,marginTop:5}}>
                    <AntDesign name={'clockcircleo'} size={20} color={theme.colors.darkGrey} style={styles.margin}/>
                    <Text style={styles.subText}>{`${timing} . ${distance}`}</Text>
                    </View>
                    <Text style={styles.subText}>{`Per Person`}</Text>
                </View>
             </View>
        </View>
    )
}

