import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
const smallWidth = windowWidth/3
// STYLING 
export default StyleSheet.create
    ({
        container:
        {
            flex: 1,
            backgroundColor: theme.colors.white
        },
        panelHandle:
        {
            height: 5,
            width: 40,
            borderRadius: 20,
            backgroundColor: theme.colors.borderColor,
            alignSelf: 'center',
        },
        header:
        {
            backgroundColor: 'white',
            padding: 40,
            paddingBottom: 10,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40
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
        addressView:
        {
            padding: 10,
            flexDirection: "row",
            alignItems:'center',
        },
        BottomSheetText:
        {
            fontSize: actuatedNormalize('16'),
            fontFamily: Fonts.Regular,
            color: theme.colors.darkGrey,
            marginHorizontal: 10,
            width: windowWidth * 0.7
        },
        bottomBox:
        {
            flexDirection: "row",
            backgroundColor: "transparent",
            justifyContent: "space-evenly",
            alignItems: "center",
        },
        buttonView:
        {
            borderRadius: 15,
            backgroundColor: theme.colors.bgColor,
            flexDirection: "row",
            width: windowWidth * 0.7,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            height: 50,

        },

        CallButtonView:
        {
            borderRadius: 15,
            backgroundColor: theme.colors.bgColor,
            width: "15%",
            justifyContent: "center",
            height: 50,
        },
        btnText:
        {
            fontSize: actuatedNormalize('16'),
            fontFamily: Fonts.Regular,
            color: theme.colors.text,
            textAlign: 'center',
        },
        map: 
        {
          height: ASPECT_RATIO * windowHeight / 2,
          width:windowWidth*.9,
          alignSelf:"center",
          borderRadius:10
        },
        row: { flexDirection: 'row', borderRadius:15, backgroundColor:"transparent", alignItems: 'center' },
        rowWrap: { flexWrap: 'wrap',borderRadius:15 },
        flex: { flex: 1,borderRadius:15 },
        item1: { height: smallWidth, width: windowWidth*0.326, padding: 1,borderRadius:10 },
        item2: { height: smallWidth * 2.08, width: smallWidth * 1.95, padding: 1,borderRadius:10 },
        item1Inner: { flex: 1, backgroundColor: 'transparent' },
        index: { color: '#fff', fontSize: 20, position: 'absolute', bottom: 5, right: 5,borderRadius:15 },
        fill: { height: '93%', width: '95%',borderRadius:15 },
        markerImage:
        {
            height: actuatedNormalize(20),
            width: actuatedNormalize(20),
            resizeMode: 'contain'
        }
      
    })