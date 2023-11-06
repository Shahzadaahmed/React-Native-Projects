import React from 'react'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import { theme } from '../../common'
import { windowWidth } from '../../common/Constants'
import { actuatedNormalize, Fonts, Svgs } from '../../utils'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT
interface Props
{
    icon: any,
    title: String,
    description: String,
    type: String,
    onPress: any,
}

    const CategoryView = (props: Props) =>
    {
        const {icon, title, description, type} = props
    return (
        <TouchableOpacity  onPress={() => props.onPress()}>
        <View style={styles.container}>
            {icon == 'c1' ? 
            <Svgs.Clinic1 height={60} width={60} /> :
             icon == 'c2' ?
            <Svgs.Clinic2 height={60} width={60} /> :
             icon == 'c3' ?
             <Svgs.Clinic3 height={60} width={60} /> :
             <Svgs.Clinic4 height={60} width={60} /> 
            }
            <View style={{marginLeft: 15}}>
                <Text style={styles.text} numberOfLines={1}>{title}</Text>
                <Text style={styles.subText}>{description}</Text>
                <View style={styles.divider}/>
            </View>
        </View>
        </TouchableOpacity>
    )
    }

export default CategoryView;
const styles = StyleSheet.create({
    container:
    {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
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
        fontSize: actuatedNormalize('16'),
        fontFamily: Fonts.Regular,
        color: theme.colors.darkGrey,
        width: windowWidth*0.7
    },
    divider:
    {
        borderBottomWidth: 0.8,
        borderBottomColor: theme.colors.borderColor,
        width: windowWidth*0.8,
        alignSelf: 'flex-end',
        paddingVertical: 5
    },
})
