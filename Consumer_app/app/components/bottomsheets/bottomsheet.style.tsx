import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';

// STYLING
export default StyleSheet.create
  ({
    header:
    {
      backgroundColor: 'white',
      padding: 20,
      paddingBottom: 10,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40
    },
    panelHandle:
    {
      height: 5,
      width: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.borderColor,
      alignSelf: 'center',
    },
    bottomSheet: {flex: 1},
    dragSign:
    {
      height: 5,
      width: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.borderColor,
      alignSelf: 'center',
      marginVertical: 10
    },
    headingText:
    {
      fontSize: actuatedNormalize(22),
      fontFamily: Fonts.SemiBold,
      marginTop: 20
    },
    subText:
    {
      fontSize: actuatedNormalize(18),
      fontFamily: Fonts.Regular,
      color: theme.colors.darkGrey,
      marginVertical: 5
    },
    contentContainerStyle: {
      padding: 16,
      backgroundColor: '#F3F4F9',
    },
  })