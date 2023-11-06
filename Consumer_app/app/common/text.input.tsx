import React, {useState} from 'react';
import
  {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    Alert
  } from 'react-native';
import theme from './theme';
import {Colors} from '../../style';
import normalize from 'react-native-normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {actuatedNormalize, Fonts, Svgs} from '../utils';
import {windowWidth, windowHeight} from './Constants';

export type textInputType = {
  TextInputStyle?: any
  onChange?: any
  placeholderTitle?: any
  placeholderTextColor?: any
  iconStyle?: any
  iconSize?: any
  iconName?: any
  textStyle?: any
  disabled?: boolean
  value?: any,
  TextInputView?: any
  iconColor?: any
  InputStyle?: any
  closeBtnStyle?: any
  on_search_focus: any
}


const CustomTextInput = (props: textInputType) =>
{
  const {TextInputStyle, onChange, TextInputView, placeholderTextColor, iconStyle, iconName, iconSize, placeholderTitle, textStyle, disabled, value, iconColor , InputStyle, closeBtnStyle, on_search_focus} = props;
  const [clear, setClear] = useState<boolean>(false);
  let ref: any = ''


  const setValue = (text: any) =>
  {
    onChange(value)
    if (text.length > 0)
    {
      setClear(true)
    } else
    {
      setClear(false)
    }
  }
  return (
    <View style={[styles.inputView, InputStyle]}>
      <Ionicons name={iconName} size={iconSize} style={iconStyle} color={iconColor} />
      <TextInput
        ref={input => ref = input}
        value={value}
        style={[styles.input, closeBtnStyle]}
        placeholder={placeholderTitle}
        placeholderTextColor={placeholderTextColor}
        onChangeText={setValue}
        onFocus={()=>{
          on_search_focus ? on_search_focus(true) : null
        }}
        onBlur={()=>{
          on_search_focus ? on_search_focus(false) : null
        }}
      />
       <Ionicons name="close-circle" size={20} color={theme.colors.borderColor} style={{display:clear ? 'flex':'none'}}
         onPress={()=>{
           ref.clear()
           setClear(false)
           on_search_focus ? on_search_focus(false) : null
           }}/>
    </View>
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
      width: windowWidth * 0.75
    },
    input:
    {
      fontSize: actuatedNormalize('16'),
      fontFamily: Fonts.Regular,
      paddingHorizontal: 5,
      width: windowWidth * 0.6
    },
    clear:
    {
      position: 'absolute',
      top: 10,
      right: 5
    }
  })

export default CustomTextInput;