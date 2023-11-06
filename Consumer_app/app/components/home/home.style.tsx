import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import { actuatedNormalize, Fonts } from '../../utils';

// STYLING
export default StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  homeMainView:
  {
    width: windowWidth * 0.9,
    alignSelf: 'center',
    padding: 15,
    marginVertical: '5%',
  },
  row:
  {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },
  headingText:
  {
    fontSize: actuatedNormalize('30'),
    fontFamily: Fonts.Bold,
    color: theme.colors.lightBlack
  },
  iconView:
  {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.bgColor
  },
  subText:
  {
    fontSize: actuatedNormalize('18'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.white,
    padding: '3%'
  },
  subHeadingText:
  {
    fontSize: actuatedNormalize('22'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.white,
    width: windowWidth*0.6,
    padding: '3%'
  },
  badge:
  {
    height:10,
    width:10,
    borderRadius:5,
    backgroundColor:theme.colors.error,
    position:'absolute',
    right:12,
    top:8,
    zIndex:1
  }
})