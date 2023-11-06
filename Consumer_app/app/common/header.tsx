/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   HEADER COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react';
import {StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {actuatedNormalize, Fonts} from '../utils';
import * as RootNavigation from '../navigations/root.navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {theme} from '.';
import {windowWidth} from './Constants';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    title: string,
    backgroundColor?: string,
    textStyle?: any,
    icon?: any,
    iconColor?: string,
    hideIcon: boolean,
    rightAction?: any,
    allowTextWrap?: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const CommonHeader = (props: Props) =>
 {
     const {title, backgroundColor, textStyle, icon, iconColor, hideIcon, rightAction, allowTextWrap} = props
  return (
    <>
    <StatusBar
			translucent
            barStyle={'dark-content'}/>
    <View
      style={{
        ...styles.container,
        backgroundColor: backgroundColor ? backgroundColor : theme.colors.white,
      }}>
      <View style={styles.leftAction}>
        {!hideIcon && (
          <TouchableOpacity onPress={() => RootNavigation.goBack()}>
            {icon ? (
              <Ionicons
                name={icon}
                color={iconColor}
                size={actuatedNormalize(25)}
                style={{alignSelf: 'center'}}
              />
            ) : (
              <Ionicons
                name="arrow-back"
                size={
                 actuatedNormalize('34')
                }
                color={iconColor}
                style={{alignSelf: 'center'}}
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      <Text
        style={[styles.headerTitle, textStyle]}
        numberOfLines={allowTextWrap ? 3 : 1}>
        {title}
      </Text>

      <View style={styles.rightAction}>
        {rightAction && rightAction}
      </View>
    </View>
    </>
  );
}

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: 10
  },
  headerTitle: {
    fontFamily: Fonts.Medium,
    fontSize: actuatedNormalize(20),
    color: theme.colors.lightBlack,
    textAlign: 'center',
    // textTransform: 'capitalize',
    width: windowWidth * 0.66,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // alignContent: 'center'
  },
  leftAction: {
    width: windowWidth * 0.17,
  },
  rightAction: {
    width: windowWidth * 0.17,
    // backgroundColor:'red',
    // justifyContent: 'flex-end',
    // alignSelf:'flex-end'
  },
});
