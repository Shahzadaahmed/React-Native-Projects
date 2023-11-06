import { Platform, StyleSheet } from 'react-native';
import {Tooltip} from 'react-native-elements/dist/tooltip/Tooltip';
import normalize from 'react-native-normalize';
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import { actuatedNormalize, Fonts } from '../../utils';

// STYLING FOR FAQ.COMPONENT.TSX
export default StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: theme.colors.white
  },
 
  titleText:
  {
    fontSize: actuatedNormalize('32'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack,
  },
  h1:
  {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.black,
  },
  row:
  {
    flexDirection: 'row',
    alignItems: 'center'
  },
 
  subText:
  {
    fontSize: actuatedNormalize('15'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    marginVertical: 10
  },
  descriptionText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    marginVertical: 10,
    fontWeight:"400",
  },
  text:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    textAlign: 'center'
  },
 
  addressView:{
    flexDirection:"row",
    width:"95%",
    alignSelf:"center",
    backgroundColor:"transparent",
    padding:5
  },

  map: 
  {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  containerBottomSheet: {
    flex: 1,
  },
  categoryView:
  {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 20
  },
  textH2:
  {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
  },
  textH3:{
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
  },
  textH1:
  {
    fontSize: actuatedNormalize('12'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
    marginHorizontal:5
  },
  textH4:
  {
    fontSize: actuatedNormalize('14'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
  },
  textH5:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.black,
  },
  
})