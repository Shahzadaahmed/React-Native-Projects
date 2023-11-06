import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {theme} from '.'
import {actuatedNormalize, Fonts} from '../utils'

interface Props
{
    title?: any,
    value?: any,
    onPress: any,
    style?: any
}
const GreySkeleton = (props: Props) =>
{
    const {title, value, onPress, style} = props
    return (
        <TouchableOpacity onPress={onPress}>
        <View style={[styles.container, style]}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.valueText}>{value}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default GreySkeleton;

const styles = StyleSheet.create
({
    container:
    {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        borderRadius: 15,
        backgroundColor: theme.colors.bgColor,
        marginTop: 10
    },
    titleText:
    {
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Regular,
        color: theme.colors.darkGrey,
        textAlign: 'left'
    },
    valueText:
    {
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Regular,
        color: theme.colors.black,
        marginLeft: 10
    }
})
