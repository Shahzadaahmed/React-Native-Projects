/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   MORE TAB ITEM COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.import React from 'react'
import React from 'react';
import { Text, View } from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import styles from './more.styles';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    name: string,
    icon: any,
    onPress: ()=> {}
}

// START THE MORE ITEM FUNCTION THAT WILL BE IMPORTED IN PARNET FILE.
export const MoreItem = (props: Props) => 
{
    const {name, icon: Icon, onPress} = props
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.itemContainer}>
            <View style={styles.itemIconView}>
                {Icon ? <Icon height={22} width={22}/>: null}
            </View>
            <View>
            <Text style={styles.itemText}>{name}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

