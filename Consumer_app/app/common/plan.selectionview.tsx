/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   PLAN SELECTION VIEW COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native'
import {theme} from '.'
import {actuatedNormalize, Fonts, Svgs} from '../utils'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {ASPECT_RATIO, windowHeight, windowWidth} from './Constants'
import GridView from './common.gridview'
import PressableIcon from './pressable.icon'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    onPress: any,
    uri?: string
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT FILE.
const PlanSelectionView = (props: Props) =>
{
    const {onPress, uri} = props
    return (
        <View>
            <View style={styles.imageItem}>
                {uri ? (
                    <TouchableWithoutFeedback onPress={onPress}>
                        <View style={styles.container}>
                            <Image source={{uri: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'}} style={styles.image} />
                            <PressableIcon
                                icon={<Svgs.BinIcon height={actuatedNormalize(26)} width={actuatedNormalize(26)} />}
                                onPress={null}
                                style={styles.binIcon}
                            />
                            <Text style={{...styles.titleText, height: actuatedNormalize(45)}} numberOfLines={2}>{'Pasta with shrimps in sauce'}</Text>
                            <Text style={{...styles.subText, width: windowWidth * 0.35}}>{'244 g'}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                ) : (
                    <TouchableWithoutFeedback onPress={onPress}>
                        <AntDesign color={theme.colors.darkGrey} name="plus" size={50} />
                    </TouchableWithoutFeedback>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create
({
    labelText:
    {
        fontSize: actuatedNormalize(17),
        fontFamily: Fonts.Medium,
        color: theme.colors.black
    },
    imageItem:
    {
        width: windowWidth * 0.41,
        height: ASPECT_RATIO * windowHeight / 1.85,
        borderRadius: 15,
        // display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.bgColor,
        marginLeft: 15
    },
    imageContainer:
    {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    image:
    {
        height: ASPECT_RATIO * windowHeight / 3.5,
        width: windowWidth * 0.36,
        borderRadius: 10,
        alignSelf: 'center'
        // resizeMode: 'contain'
    },
    container:
    {
        width: windowWidth * 0.41,
        borderRadius: 12,
        backgroundColor: theme.colors.bgColor,
        // marginTop: 10,
        padding: 10,
    },
    binIcon:
    {
        height: actuatedNormalize(45),
        width: actuatedNormalize(45),
        fontFamily: Fonts.Regular,
        padding: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 10,
        position: 'absolute',
        top: 15,
        right: 12,
        textAlign: 'center',
        // width: windowWidth * 0.35,
        alignSelf: 'center',
        overflow: 'scroll'
    },
    titleText:
    {
        fontSize: actuatedNormalize(16),
        fontFamily: Fonts.Regular,
        color: theme.colors.lightBlack,
        marginVertical: 5,
        marginTop: '5%',
        textAlign: 'center',
    },
    subText:
    {
        fontSize: actuatedNormalize(14),
        fontFamily: Fonts.Regular,
        color: theme.colors.darkGrey,
        textAlign: 'center',
        marginVertical: 5
    },
})

export default PlanSelectionView;