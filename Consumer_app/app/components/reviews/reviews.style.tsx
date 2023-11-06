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
    ring: 
    {
      height: actuatedNormalize(110),
      width: actuatedNormalize(110),
      borderRadius: actuatedNormalize(55),
      borderColor: theme.colors.white,
      backgroundColor: theme.colors.bgColor,
      borderWidth: actuatedNormalize(10),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems:'center',
      marginTop: '-14%'
    },
    headingText: 
    {
      fontSize: actuatedNormalize(24), 
      fontFamily: Fonts.Medium,
      marginLeft: '5%',
      marginHorizontal: 5
    },
    subText:
    {
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Regular,
        color: theme.colors.darkGrey,
        marginVertical: 5
    },
    panelHandle:
    {
      height: 5,
      width: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.borderColor,
      alignSelf: 'center',
    },
    row: {flexDirection: 'row', alignItems: 'center'},
    progressBarView:
    {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: '5%'
    },
    progressBarWidth: {width: windowWidth*0.65,},
    progressBar: {borderRadius: 40, backgroundColor: theme.colors.white, height:5},
    smallText: 
    {
      fontSize: actuatedNormalize(14),
      fontFamily: Fonts.Regular,
      color: theme.colors.darkGrey,
      marginTop: 2
    },
    statsView:
    {
      paddingVertical: 5,
      paddingHorizontal: 5,
      borderRadius: 10,
      backgroundColor: theme.colors.bgColor,
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    },
    statsPercentView:
    {
      height: actuatedNormalize(50),
      width: actuatedNormalize(50),
      borderRadius: actuatedNormalize(10),
      backgroundColor: theme.colors.white,
      justifyContent: 'center',
      alignItems: 'center'
    },
    statsPerctentText:
    {
      fontSize: actuatedNormalize(18),
      fontFamily: Fonts.SemiBold,
      color: theme.colors.active
    },
    statsText:
    {
      fontSize: actuatedNormalize(14),
      fontFamily: Fonts.Regular,
      width: windowWidth*0.27,
      marginLeft: 5,
      color: theme.colors.black 
    },
    horizontal15: {marginHorizontal: 15},
    subHeadingText:
    {
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.Regular,
      color: theme.colors.black
    },
    menuTabs:
    {
      height: 40,
      margin: '5%'
    },
    // USER REVIEW COMPONENT
    userReviewComponent: 
    {
      paddingVertical: '5%',
      paddingHorizontal: 10,
      borderBottomColor: theme.colors.borderColor,
      borderBottomWidth: 0.7,
      marginHorizontal: 5,
      // marginVertical: 10
    },
    userImage:
    {
      height: actuatedNormalize(60),
      width: actuatedNormalize(60),
      borderRadius: actuatedNormalize(30),
      // resizeMode: 'contain'
    },
    timeText: 
    {
      fontSize: actuatedNormalize(15),
      fontFamily: Fonts.Regular,
      color: theme.colors.darkGrey,
      position: 'absolute',
      top: 10,
      right: 10
    },
    rating:
    {
      alignSelf: 'center',
      marginVertical: '5%'
    },
    userVideo:
    {
      height: ASPECT_RATIO * windowHeight / 2,
      width: windowWidth * 0.95,
      alignSelf: 'center'
    },
    videoDurationText:
    {
      fontSize: actuatedNormalize(14),
      fontFamily: Fonts.Medium,
      padding: 8,
      borderRadius: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      textAlign: 'center',
      position:'absolute',
      bottom:'40%',
      right:15,
      overflow: 'scroll'
    },
})