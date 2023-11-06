import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../common';
import {windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts} from '../../utils';
// STYLING
export default StyleSheet.create
({
    container: {flex: 1, backgroundColor: theme.colors.white},
    header: {fontSize: actuatedNormalize('20'), fontFamily: Fonts.SemiBold, padding: '4%', textAlign: 'center',},
    itemContainer: 
    {
        paddingVertical: '5%', 
        paddingHorizontal: 10,
        backgroundColor: theme.colors.bgColor, 
        borderRadius: 15, 
        marginTop: 12,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText:
    {
        fontSize: actuatedNormalize('18'),
        fontFamily: Fonts.Regular
    },
    itemIconView:
    {
        height: 45,
        width: 45,
        borderRadius: 22.5,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15
    },
    row: {flexDirection: 'row', alignItems:'center'}

})  