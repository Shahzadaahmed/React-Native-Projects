import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';

// STYLING
export default StyleSheet.create
({
    container: {flex: 1, backgroundColor: theme.colors.white},
    orderCardContainer:
    {
        backgroundColor: theme.colors.bgColor,
        padding: '6%',
        borderRadius: 15,
        marginTop: '5%'
    },
    row: {flexDirection: 'row', alignItems: 'center'},
    spacebtw: {justifyContent: 'space-between'},
    headingText: 
    {
        fontSize: actuatedNormalize(21),
        fontFamily: Fonts.Medium,
        color: theme.colors.black
    },
    subHeadingText: 
    {
        fontSize: actuatedNormalize(18),
        fontFamily: Fonts.SemiBold,
        color: theme.colors.black
    },
    subText: 
    {
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Regular,
        color: theme.colors.active
    },
    horizontal5: {marginHorizontal: '5%'},
    vertical5: {marginVertical: '5%'},
    bottom5: {marginBottom: '5%'},
    top5: {marginBottom: '5%'},
    margin: {margin: 15},
    alignCenter: {alignSelf: 'center'},
    cartButton:
    {
      padding: '4.4%', 
      backgroundColor: theme.colors.secondary,
      borderRadius: 12,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      margin: '4%',
    },
    cartButtonText:
    {
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.Regular,
      color: theme.colors.black
    },
    categoryView: {paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, marginLeft: 10},
    subTextBottomSheet: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, color: theme.colors.darkGrey, marginVertical: 10},
    cartButtonView:
    {
      paddingTop: 5,
      paddingBottom: '5%',
      paddingHorizontal: 10,
      backgroundColor: theme.colors.white,
      position: 'absolute',
      bottom: 0,
      width: windowWidth
    },
    horizontal15: {marginHorizontal: 15},
    marginVertical: {marginVertical: '5%'},
    subTitleText: {fontSize: actuatedNormalize(16), fontFamily: Fonts.Regular, marginVertical: 5},
    gridText: {fontSize: actuatedNormalize(16), fontFamily: Fonts.Medium, color: theme.colors.lightBlack, marginTop: 10},
})