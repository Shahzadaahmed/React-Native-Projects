import {Platform, StyleSheet} from 'react-native';
import normalize from 'react-native-normalize';
import {theme} from '../../common';
import {actuatedNormalize, Fonts} from '../../utils';

// STARTUP COMPONENTS STYLING
export default StyleSheet.create(
	{
        container: {flex: 1, backgroundColor: '#ffffff'},
        textShow: {
			flexDirection: 'row',
			justifyContent: 'center',
			marginTop: 50,
			marginBottom: 30,
		},
        langHeadingText: {
			fontSize: actuatedNormalize(24),
			textAlign: 'center',
			fontFamily: Fonts.Medium,
			color: theme.colors.lightBlack,
		},
        lanShow: {
			backgroundColor: '#F7F7FA',
			marginTop: 12,
			marginLeft: 15,
			marginRight: 15,
			marginBottom: 0,
			borderRadius: 16,
			height: 70,
            justifyContent: 'center'
		},
		lanText: {
			color: theme.colors.black,   //Taking these styles from  figma !!
			margin: 20,
			alignSelf: 'flex-start',
			fontFamily: Fonts.Regular,
			fontSize: actuatedNormalize(16),
		},
        buttonShow: {
			display: 'flex',
			justifyContent: 'center',
			position: 'absolute',
			alignItems: 'center',
			bottom: 10,
			width: '100%',
		},
        submitButton: {
			alignItems: 'center',
			justifyContent: 'center',
			bottom: 10,
			margin: 15,
			height: 48,
			borderRadius: 12,
			width: "80%",
			backgroundColor: theme.colors.secondary,
		},
		cnfrmText: {
			fontSize: actuatedNormalize(17),
			fontFamily: Fonts.Regular,
			color: theme.colors.lightBlack,
			lineHeight: 25
		},
	});
