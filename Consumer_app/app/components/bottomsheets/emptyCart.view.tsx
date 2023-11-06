/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   BOTTOM SHEET SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useRef, useMemo} from "react";
import {Alert, FlatList, TouchableWithoutFeedback, Text, TextInput, View, SafeAreaView} from 'react-native'
import {theme} from "../../common";
import styles from './bottomsheet.style';
import RBSheet from "react-native-raw-bottom-sheet";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Button from "../../common/comButton";

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    sheetRef: any,
    navigation: any,
    height: number,
    onClose: any
}

const EmptyCart = (props: Props) =>
 {
     const {sheetRef, navigation, height, onClose} = props
    return (
        <RBSheet
        ref={sheetRef}
        openDuration={250}
        customStyles={{
            container: {
                height: height,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            },
            wrapper: {
                backgroundColor: theme.colors.dimBG
            }
        }}
        closeOnDragDown={false}
        onClose={onClose}
    >
        <View style={styles.bottomSheet}>
            <View style={{marginHorizontal: '5%'}}>
                <View style={styles.dragSign} />
                <Text style={styles.headingText}>{'Empty shopping cart for a new order?'}</Text>
                <Text style={styles.subText}>{'You are about to select food from differnt vendor.'}</Text>
            </View>
        </View>
        <Button title={'Clear'} style={{width: '92%'}} onPress={() => props.navigation.goBack()} />
        <Button title={'Leave'} style={{width: '92%',backgroundColor: theme.colors.bgColor, marginVertical: '5%'}} onPress={() => sheetRef.current.close()} />

        {/* <View style={styles.bottomView}>
            <View style={styles.buttonView}>
                <Text style={styles.buttonText}>{'Add Address'}</Text>
            </View>
            <View style={{...styles.buttonView, backgroundColor: theme.colors.secondary}}>
                <Text style={styles.buttonText}>{'Done'}</Text>
            </View>
        </View> */}
    </RBSheet>

    )
}

export default EmptyCart;
