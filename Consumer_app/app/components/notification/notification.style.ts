import {Platform, StyleSheet} from 'react-native';
import { theme } from '../../common';
import { windowWidth } from '../../common/Constants';
import { actuatedNormalize, Fonts } from '../../utils';

// STYLING
export default StyleSheet.create({
  container: 
    {
      flex: 1,
      backgroundColor: theme.colors.white
    },
  header:
  {
    fontSize: actuatedNormalize('20'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack,
    backgroundColor: theme.colors.white,
    padding: 10,
    marginBottom: 10
  },
  headerContainer:
  {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '5%'
  },
  headerText: 
  {
      fontSize: actuatedNormalize('22'),
      fontFamily: Fonts.SemiBold,
      color: theme.colors.lightBlack
  },
  text:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.lightBlack,
    width: windowWidth * 0.5
  },
  subText:
  {
      fontSize: actuatedNormalize('14'),
      fontFamily: Fonts.Regular,
      color: theme.colors.darkGrey
  },
  divider:
  {
      borderBottomWidth: 0.8,
      borderBottomColor: theme.colors.borderColor,
      width: windowWidth * 0.8,
      alignSelf: 'flex-end'
  },
  rightAction:
  {
      backgroundColor: theme.colors.delete,
      justifyContent: 'center',
      alignItems: 'flex-end',
      borderRadius: 15,
      marginRight: 5
  },
  notificationImage:
  {
      height: 60,
      width: 60,
      borderRadius: 15,
      backgroundColor: theme.colors.bgColor
  },
  row:
  {
    flexDirection: 'row',
    alignItems: 'center'
  },
  segmentedControl:
  {
    margin: 5,
    marginHorizontal:'6%'
  }
 
})