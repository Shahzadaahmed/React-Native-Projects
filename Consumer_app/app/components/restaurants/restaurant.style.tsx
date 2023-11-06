import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
const itemWidth = (windowWidth / 3) * 2.5;
const gap = (windowWidth - itemWidth) / 4;
// STYLING
export default StyleSheet.create
  ({
    container: {flex: 1, backgroundColor: theme.colors.white},
    banner: {height: 140, resizeMode: 'contain', borderRadius: 20, justifyContent: 'flex-end'},
    marginVertical: {marginVertical: '5%'},
    headingText: {fontSize: actuatedNormalize('28'), fontFamily: Fonts.SemiBold, marginHorizontal: '5%'},
    categoryView: {paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, marginLeft: 10},
    subText: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, color: theme.colors.darkGrey, marginVertical: 10},
    wrap: {width: windowWidth, height: windowHeight * 0.2, marginVertical: 10},
    // wrapDot: {flexDirection: 'row', alignItems: 'center'},
    dot: {height: 3, width: 3, borderRadius: 2.5, backgroundColor: theme.colors.black, alignSelf:'center', marginVertical: 10, marginRight: 10},
    dotActive: {height: 35, width: 35, borderRadius: 5, backgroundColor: theme.colors.active},
    row: {flexDirection: 'row', alignItems: 'center'},
    horizontal: {margin: 15},
    listContainer: {padding: 5, paddingBottom: 15, backgroundColor: theme.colors.bgColor, borderRadius: 15, marginTop: '5%'},
    listItemContainer: {height: windowHeight * 0.2, width: windowWidth * 0.9, resizeMode: 'cover', alignSelf: 'center', marginTop: 6},
    listText: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Medium, color: theme.colors.lightBlack, width: windowWidth * 0.6, marginTop: 10},
    listSubText: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, color: theme.colors.darkGrey, marginLeft: 10},
    listSubTextView: {flexDirection: 'row', alignItems: 'center', marginTop: 8},
    clockView:
    {
      position: 'absolute',
      top: 20,
      left: 10,
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 20,
      justifyContent: 'space-between',
      paddingVertical: 3,
      width: windowWidth * 0.25,
      paddingHorizontal: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    likeView: {position: 'absolute', top: 20, right: 10},
    gridContainer: {padding: 5, paddingBottom: 15, backgroundColor: theme.colors.bgColor, borderRadius: 15, marginTop: '5%', width: windowWidth * 0.45},
    gridItemContainer: {height: windowHeight * 0.2, width: windowWidth * 0.4, resizeMode: 'cover', alignSelf: 'center', marginTop: 6},
    gridText: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Medium, color: theme.colors.lightBlack, marginTop: 10},
    gridSubText: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, color: theme.colors.darkGrey, marginLeft: 10},
    gridSubTextView: {flexDirection: 'row', alignItems: 'center', marginTop: 8},
    gridIconView:
    {
      height: 30,
      width: 30,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    listIconsView:
    {
      height: 45,
      width: 45,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.6)'
    },
    flatListSlider: {paddingLeft: gap * 2, paddingRight: gap, marginTop: '5%'},
    dimBG: {backgroundColor: theme.colors.dimBG},
    blurBG: {backgroundColor: theme.colors.dimBG, opacity: 0.6},
    subTextBottomSheet: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, color: theme.colors.darkGrey, marginVertical: 10},
    bannerContainer: {
      marginTop: -1000,
      paddingTop: 1000,
      alignItems: 'center',
      overflow: 'hidden',
    },
    mainView:
    {
      paddingVertical: '6%',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      backgroundColor: theme.colors.white,
      marginTop: -30
    },
    restaurantLogo:
    {
      alignSelf: 'center',
      marginTop: -windowHeight*0.1,
      marginBottom: 10
    },
    titleText: {fontSize: actuatedNormalize(20), fontFamily: Fonts.Medium, textAlign:'center',color: theme.colors.black},
    margin: {margin: 5},
    tappableViews: 
    {
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center',
      width: windowWidth*0.86,
      alignSelf: 'center',
      marginVertical: 10
    },
    horizontal15: {marginHorizontal: 15},
    subTitleText: {fontSize: actuatedNormalize(16), fontFamily: Fonts.Regular, marginVertical: 5},
    numericInput: 
    {
      width: windowWidth*0.3, 
      backgroundColor: theme.colors.bgColor, 
      height: actuatedNormalize(50),
      margin: 0
    },
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
    cartButton:
    {
      padding: '4.4%', 
      backgroundColor: theme.colors.secondary,
      borderRadius: 12,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
    },
    cartButtonText:
    {
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.Regular,
      color: theme.colors.black
    },
    marginTop:
    {
      // alignSelf: 'center',
      marginTop: '5%'
    },
    spacebtw: {justifyContent:'space-between'},
    smallIcon: 
    {
      backgroundColor: theme.colors.white,
      height: actuatedNormalize(50),
      width: actuatedNormalize(50),
      borderRadius: 15,
      marginLeft: 10
    },
    map: 
    {
      height: ASPECT_RATIO * windowHeight / 2,
      width:windowWidth*0.92,
      alignSelf:"center",
      borderRadius:10,
      marginVertical: '5%'
    },
    markerImage:
    {
        height: actuatedNormalize(20),
        width: actuatedNormalize(20),
        resizeMode: 'contain'
    },
    hostLogo:
    {
      height: actuatedNormalize(90),
      width: actuatedNormalize(90),
      borderRadius: actuatedNormalize(45),
    },
    hostViewContainer:
    {
      borderBottomWidth: 0.8,
      borderColor: theme.colors.borderColor,
      marginTop: 5
    },
    subHeadingText:
    {
      fontSize: actuatedNormalize(18),
      fontFamily: Fonts.SemiBold,
      color: theme.colors.lightBlack,
      marginVertical: '5%'
    },
    // DISH PAGE STYLES
    dishTitleText: 
    {
      fontSize: actuatedNormalize(24),
      fontFamily: Fonts.Medium,
      color: theme.colors.lightBlack,
      width: windowWidth*0.7
    },
    segmentedControl:
    {
      marginVertical: '5%',
    },
    dishDescriptionText:
    {
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.Regular,
      color: theme.colors.subTextColor,
      marginTop: '5%',
      marginBottom: '3%'
    },
    nutritionView:
    {
      position: 'absolute',
      bottom: '20%',
      // marginVertical: '10%',
      width: windowWidth -30,
      alignSelf: 'center'
    },
    dragSign:
    {
      height: 5,
      width: 40,
      borderRadius: 20,
      backgroundColor: theme.colors.borderColor,
      alignSelf: 'center',
      marginVertical: 10
    },
  })