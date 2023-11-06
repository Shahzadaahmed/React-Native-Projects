import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../common';
import { windowHeight, windowWidth } from '../../common/Constants';
import Images from '../../common/Images';
import { actuatedNormalize, Fonts } from '../../utils';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props 
{
    title: String,
    description: String
}
const SubscriptionView = (props: Props) => 
{
    const {title, description} = props
    return (
        <ImageBackground source={Images.CharitySubBG1} style={styles.container} borderRadius={15}>
            <View style={styles.row}>
                <Ionicons name={'star'} color={theme.colors.secondary} style={{ marginRight: 5 }} />
                <Text style={{ ...styles.subscriptionViewText, color: theme.colors.secondary }} numberOfLines={3}>{title}</Text>
            </View>
            <Text style={{ ...styles.subscriptionViewText, fontSize: actuatedNormalize('17') }}>{description}</Text>
        </ImageBackground>
    )
}

export default SubscriptionView;

const styles = StyleSheet.create({
    container:
    {
        height: windowHeight / 7.5,
        width: windowWidth * 0.8,
        marginRight: 15,
        padding: 10,
        paddingVertical: 15,
        justifyContent: 'space-between',
        backgroundColor:"transparent"
    },
    subscriptionViewText:
    {
        fontSize: actuatedNormalize('16'),
        fontFamily: Fonts.SemiBold,
        color: theme.colors.white,
        width: windowWidth * 0.5
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center'
    }
    
})
