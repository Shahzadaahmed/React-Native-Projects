/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB ITEM COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.import React from 'react'
import { Text, View } from 'react-native'
import styles from './addressStyles';
import React from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {Fonts} from '../../utils';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    name: string,
    icon: any,
    address:any,
}
// START THE MORE ITEM FUNCTION THAT WILL BE IMPORTED IN PARNET FILE.
export const AddressList = (props: Props) => 
{
    const {name, icon: Icon,address} = props
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemIconView}>
                {Icon ? <Icon height={22} width={22}/>: null}
            </View>
            <View>
                <View>
            <Text style={styles.itemTitle}>{name}</Text>
            </View>
            <View style={{paddingTop:8}}>
            <Text style={styles.itemText}>{address}</Text>
            </View>
            </View>
            <View style={{right:"0%",position:"absolute"}}>
            <EvilIcons name="chevron-right" size={40}/>
            </View>
        </View>
    )
}

