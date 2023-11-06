import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
// STYLING
export default StyleSheet.create
({
    container: {flex: 1, backgroundColor: theme.colors.white},
    header: 
    {
        padding: 15,
        justifyContent: 'space-between'
    },
    row: {flexDirection: 'row', alignItems: 'center'},
    cancelButton:
    {
        fontFamily: Fonts.Regular,
        fontSize: actuatedNormalize(16),
        color: theme.colors.active
    },
    menuTabs: {height: 40},
    segmentedControl: {marginHorizontal:'5%'},
    itemContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor:"transparent"
    },
    text:
    {
        fontSize: actuatedNormalize('16'),
        fontFamily: Fonts.Regular,
        color: theme.colors.lightBlack,
        width: windowWidth*0.6
    },
    subText:
    {
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Regular,
        color: theme.colors.darkGrey,
        marginLeft: 2
    },
    divider:
    {
        borderBottomWidth: 0.8,
        borderBottomColor: theme.colors.borderColor,
        width: windowWidth*0.8,
        alignSelf: 'flex-end',
        paddingBottom: '5%'
    },
    headingText:
    {
        fontSize: actuatedNormalize(22),
        fontFamily: Fonts.Medium,
        marginVertical: '5%'
    },
    horizontal15: {marginHorizontal: 15},
    itemImage:
    {
        height: windowWidth*0.2,
        width: windowWidth*0.2,
        borderRadius: windowWidth*0.1,
        resizeMode:'contain',
        backgroundColor: theme.colors.overlay
    },
    subView:
    {
        justifyContent: 'space-between',
        marginTop: 10
    }
})