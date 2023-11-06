import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
const itemWidth = (windowWidth / 3) * 2.5;
const gap = (windowWidth - itemWidth) / 4;

// STYLING
export default StyleSheet.create
({
    container: {flex:1},
    map: {...StyleSheet.absoluteFillObject},
    backIcon: {position: 'absolute', top: '5%', left: 15},
    searchIcon: {position: 'absolute', top: '5%', right: 15},
    navigationIcons:
    {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: windowWidth*0.9,
      alignSelf: 'center',
      // position: 'absolute',
      top: '5%'
    },
    iconView:
    {
      shadowColor: theme.colors.darkGrey,
      shadowRadius: 2,
      shadowOffset: {height: 1, width:0},
      shadowOpacity: 0.9,
      zIndex: 1
    },
    scrollView: {position:'absolute', left:0, right:0, bottom:'10%', paddingVertical: 10},
    itemContainer:
    {
      borderRadius: 15,
      padding: 5,
      paddingBottom: 10,
      backgroundColor: theme.colors.bgColor,
      width: windowWidth * 0.8,
      marginHorizontal: 10
    },
    itemImageContainer:
    {
      // height: windowHeight * 0.2, 
      // width: windowWidth * 0.8, 
      // resizeMode: 'cover', 
      // alignSelf: 'center', 
      // marginTop: 6
      width: "100%",
      height: 150,
      alignSelf: "center"  
    },
    margin: {margin: 5},
    text: 
    {
      fontSize: actuatedNormalize('18'), 
      fontFamily: Fonts.Medium, 
      color: theme.colors.black, 
      marginTop: 10
    },
    row: {flexDirection: 'row', alignItems: 'center'},
    markerWrap: 
    {
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
    },
    marker: {height: 20, width:20},
    filledMarker: {height: 30, width: 30 },
    subText: 
    {
      fontSize: actuatedNormalize('15'), 
      fontFamily: Fonts.Regular, 
      color: theme.colors.darkGrey, 
    },
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
    headingText: 
    {
      fontSize: actuatedNormalize('22'), 
      fontFamily: Fonts.Medium,
      marginLeft: '5%',
      marginHorizontal: 5
    },
    categoryView: {paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, marginLeft: 10},
    // flatListSlider: {paddingLeft: gap * 2, paddingRight: gap}
    subTextBottomSheet: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, color: theme.colors.darkGrey, marginVertical: 10},
    restaurantImageView: {height: ASPECT_RATIO * windowHeight / 1.8, width: windowWidth, paddingHorizontal: '5%'},
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
    tappableViews: 
    {
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center',
      width: windowWidth*0.4,
      alignSelf: 'center',
      marginVertical: 10
    },
    subTitleText: {fontSize: actuatedNormalize(16), fontFamily: Fonts.Regular, marginVertical: 5},
    numericInput: 
    {
      width: windowWidth*0.3, 
      backgroundColor: theme.colors.bgColor, 
      height: actuatedNormalize(50),
      margin: 0
    },
    horizontal15: {marginHorizontal: 15},
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
    // DISH PAGE STYLES
    dishTitleText: 
    {
      fontSize: actuatedNormalize(24),
      fontFamily: Fonts.Medium,
      color: theme.colors.lightBlack,
      width: windowWidth*0.7
    },
    dishDescriptionText:
    {
      fontSize: actuatedNormalize(16),
      fontFamily: Fonts.Regular,
      color: theme.colors.subTextColor,
      marginTop: '5%',
      marginBottom: '3%'
    },
    segmentedControl:
    {
      marginVertical: '5%',
    },
    bannerContainer: {
      marginTop: -1000,
      paddingTop: 1000,
      alignItems: 'center',
      overflow: 'hidden',
  },
  dimBG: {backgroundColor: theme.colors.dimBG}
})