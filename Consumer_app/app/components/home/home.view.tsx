import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import { windowHeight, windowWidth } from '../../common/Constants';
import { theme } from '../../common';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    title: String,
    icon: any,
    text: String,
    onPress: any
}

export const ChildView = (props: Props) => {
    const {title, icon, text} = props
    return (
        <TouchableWithoutFeedback onPress={props.onPress}>
        <View style={styles.container}>
            <View style={{...styles.row,justifyContent:'space-between'}}>
                <Text style={styles.titleText}>{title}</Text>
                <Ionicons name="chevron-forward" size={26} color={theme.colors.active}/>
            </View>
            <View style={styles.icon}>
                {icon}
            </View>
            <Text style={styles.text}>{text}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container:
    {
        backgroundColor: theme.colors.bgColor,
        paddingVertical: '7%',
        paddingHorizontal: '3%',
        borderRadius: 15,
        width: windowWidth * 0.43,
        marginTop: 20
    },
    titleText:
    {
        fontSize: actuatedNormalize('16'),
        color: theme.colors.active,
        fontFamily: Fonts.SemiBold
    },
    text:
    {
        fontSize: actuatedNormalize('22'),
        color: theme.colors.lightBlack,
        fontFamily: Fonts.Medium,
        width: windowWidth*0.3,
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:
    {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: windowHeight*0.09,
        marginBottom:'5%'
    }
})
