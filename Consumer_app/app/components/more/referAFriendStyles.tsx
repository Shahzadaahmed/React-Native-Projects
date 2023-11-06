import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
import { Colors } from '../../../style';

// STYLING FOR REFER A FRIEND.COMPONENT.TSX
export default StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  referImg:
  {
    width: windowWidth * 0.9,
    marginTop: -40,

  },
  mainView:
  {
    width: windowWidth * 0.9,
    backgroundColor: 'white',
    marginTop: 30
  },
  titleText:
  {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack
  },
  subText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.lightBlack,
    marginVertical: 10
  },
  copyBtn:
  {
    width: windowWidth * 0.9,
    height: 48,
    borderRadius: 12,
    backgroundColor: Colors.textInputColor,
    marginBottom: 16,
    marginTop: windowHeight * 0.18,
  },
  inviteBtn:
  {
    width: windowWidth * 0.9,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 10
  }

})