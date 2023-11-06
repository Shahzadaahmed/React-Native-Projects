import { Platform, StyleSheet } from 'react-native';
import {Tooltip} from 'react-native-elements/dist/tooltip/Tooltip';
import normalize from 'react-native-normalize';
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import { actuatedNormalize, Fonts } from '../../utils';

// STYLING FOR ACCOUNT.COMPONENT.TSX
export default StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: theme.colors.white
  },
 
  titleText:
  {
    fontSize: actuatedNormalize('22'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack,
    alignSelf:"center",
    top:20
   
  },
  h1:
  {
    fontSize: actuatedNormalize('24'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack,
    alignSelf:"center"
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
  btnText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.text,
    textAlign: 'center',
    
  },
  buttonView:
  {
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    marginVertical: 15,
    flexDirection:"row",
    width:"92%",
    alignSelf:"center",
    alignItems:"center",
    justifyContent:"center"
  },
  cartBtnText1:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.text,
    textAlign: 'center',
    right:40
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

  textH2:
  {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
  },
  textH3:{
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
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
    fontSize: actuatedNormalize('12'),
    fontFamily: Fonts.Medium,
    color: theme.colors.black,
  },
 
  

})