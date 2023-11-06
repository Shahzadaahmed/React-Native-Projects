import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
// STYLING
export default StyleSheet.create
({
    container: {flex: 1, backgroundColor: theme.colors.white},
    header: {fontSize: actuatedNormalize('20'), fontFamily: Fonts.SemiBold, padding: '4%', textAlign: 'center'},
    itemContainer: 
    {
        paddingVertical: '5%', 
        paddingHorizontal: 10,
        backgroundColor: theme.colors.white, 
        borderRadius: 15, 
        marginTop: 12,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText:
    {
        fontSize: actuatedNormalize('16'),
        fontFamily: Fonts.Regular
    },
    itemTitle:
    {
        fontSize: actuatedNormalize('16'),
        fontFamily: Fonts.Medium
    },
    itemIconView:
    {
        height: 48,
        width: 48,
        borderRadius: 16,
        backgroundColor: theme.colors.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    row: {flexDirection: 'row', alignItems:'center'}

})  