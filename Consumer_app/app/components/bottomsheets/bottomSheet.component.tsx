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
import InputWithLable from "../../common/inputwithlable";
import {windowWidth} from "../../common/Constants";

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    sheetRef: any,
    height: number,
    onClose: any,
    children: any
}

const BottomSheet = (props: Props) =>
 {
     const {sheetRef, height, onClose, children} = props
     
    return (
        <RBSheet
        ref={sheetRef}
        openDuration={250}
        customStyles={{
            container: 
            {
                height: height ,
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
       {children}
    </RBSheet>

    )
}

export default BottomSheet;
