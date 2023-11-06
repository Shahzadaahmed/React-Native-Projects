import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
const smallWidth = windowWidth / 3
// STYLING 
export default StyleSheet.create
    ({
        container:
        {
            flex: 1,
            backgroundColor: theme.colors.white,
            paddingHorizontal: 10,
            // marginBottom: '40%'
        },
        headingText:
        {
            fontSize: actuatedNormalize(24),
            fontFamily: Fonts.Medium,
        },
        subHeadingText:
        {
            fontSize: actuatedNormalize(18),
            fontFamily: Fonts.Medium,
            color: theme.colors.black
        },
        text:
        {
            fontSize: actuatedNormalize(18),
            fontFamily: Fonts.Regular,
            color: theme.colors.darkGrey
        },
        subText:
        {
            fontSize: actuatedNormalize(16),
            fontFamily: Fonts.Regular,
            color: theme.colors.darkGrey,
            marginVertical: 5
        },
        row: {flexDirection: 'row', alignItems: 'center'},
        top5: {marginTop: '5%'},
        categoryView:
        {
            paddingHorizontal: 15,
            paddingVertical: 2,
            borderRadius: 15,
            marginLeft: 10,
            borderWidth: 2,
            marginTop: 5,
            backgroundColor: theme.colors.bgColor
        },
        // flatListSlider: {paddingLeft: gap * 2, paddingRight: gap}
        subTextBottomSheet: {fontSize: actuatedNormalize('16'), fontFamily: Fonts.Regular, color: theme.colors.darkGrey, marginVertical: 10},
        incrementIcon:
        {
            height: actuatedNormalize(59),
            width: actuatedNormalize(59),
            borderRadius: 15,
            backgroundColor: theme.colors.bgColor,
            justifyContent: 'center',
            alignItems: 'center'
        },
        applyButton:
        {
            // position: 'absolute',
            // width: windowWidth * 0.92,
            // alignSelf: 'center',
            // bottom: 10
            marginVertical: windowHeight*0.05
        },
        spaceBtw: {justifyContent: 'space-between'},
        marginVertical: {marginVertical: 10},
        margin: {margin: 10}
    })