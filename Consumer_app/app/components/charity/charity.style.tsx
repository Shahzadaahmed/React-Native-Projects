import { Platform, StyleSheet } from 'react-native';
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import { actuatedNormalize, Fonts } from '../../utils';

// STYLING
export default StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  imageView:
  {
    height: windowHeight*0.28,
    width: windowWidth,
    resizeMode: 'contain',
    paddingHorizontal: '5%'
  },
  mainView:
  {
    paddingVertical: '6%',
    paddingHorizontal: '4%',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    backgroundColor:'white',
    marginTop: -30
  },
  titleText:
  {
    fontSize: actuatedNormalize ('22'),
    fontFamily: Fonts.SemiBold,
    color: theme.colors.lightBlack
  },
  row:
  {
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconView:
  {
    height: 50,
    width: 50,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white
  },
  subText:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    marginVertical: 10
  },
  text:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
    textAlign: 'center'
  },
  buttonView:
  {
    padding: '5%',
    borderRadius: 15,
    backgroundColor: theme.colors.bgColor,
    marginVertical: 15
  },
  categoryView:
  {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginRight: 20
  }
})
