/*
   AUTHOR: Muhammad Munir
  SUMMARY: COMMON INPUT COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useRef} from 'react'
import {StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Alert} from 'react-native'
import {theme} from '.'
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {actuatedNormalize, Fonts} from '../utils';
import {windowWidth} from './Constants';
import {onChange} from 'react-native-reanimated';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
  placeHolder: string,
  value: string,
  onChangeText: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
export const CustomInput = (props: Props) =>
{
  const [clear, setClear] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false)
  let ref: any = ''
  const {
    placeHolder, value, onChangeText
  } = props;

  const setValue = (value: any) =>
  {
    onChangeText(value)
    if (value.length > 0)
    {
      setClear(true)
    } else
    {
      setClear(false)
    }
  }

  return (
    <>
      <View style={styles.inputView}>
        {/* <EvilIcons name="location" size={26} color={theme.colors.darkGrey} /> */}
        <TextInput
          style={styles.input}
          ref={input => ref = input}
          onChangeText={setValue}
          value={value}
          placeholder={placeHolder}
          placeholderTextColor={theme.colors.darkGrey}
          returnKeyType={'done'}
        />
        <Ionicons name="close-circle" size={20} color={theme.colors.borderColor} style={{display:clear ? 'flex':'none'}}
         onPress={()=>{
           ref.clear()
           setClear(false)
           }}/>
      </View>

    </>
  )
}

const styles = StyleSheet.create
  ({
    inputView:
    {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 8,
      borderRadius: 15,
      backgroundColor: theme.colors.bgColor,
      width: windowWidth * 0.7
    },
    input:
    {
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.Regular,
      paddingHorizontal: 5,
      width: windowWidth * 0.6
    }
  })
