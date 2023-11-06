/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   NOTIFICATION ITEM SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import { Text, View, Image, TouchableOpacity, Animated } from 'react-native'
import styles from './notification.style';
import { windowWidth } from '../../common/Constants'
import { actuatedNormalize, Fonts, Svgs } from '../../utils'
import Swipeable from 'react-native-gesture-handler/Swipeable';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
    avatar: any,
    order: String,
    status: String,
    duration: any
}

// START THE NOTIFICATION ITEM FUNCTION THAT WILL BE IMPORTED IN NOTIFICATION COMPONENT FILE.
export const NotificationItem = (props: Props) => 
{
    const { avatar, order, status, duration } = props

    // SWIPE RIGHT FUNCATION
    function RightActions({ dragX, onPress }: any) 
    {
        const scale = dragX.interpolate
        ({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        })
        return (
            <TouchableOpacity onPress={onPress} style={styles.rightAction}>
                <Animated.View style={[{ padding: actuatedNormalize('25') }, { transform: [{ scale: scale }] }]}>
                    <Svgs.BinIcon height={30} width={30} fill='#fff' />
                </Animated.View>
            </TouchableOpacity>
        );
    }

    return (
        <>
            <Swipeable
                renderRightActions={((progress, dragX) =>
                    <RightActions progress={progress} dragX={dragX} />)}
            >
                <View style={{...styles.row,padding:10}}>
                    <View style={styles.row}>
                        <Image source={{ uri: avatar }} style={styles.notificationImage} />
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={styles.text}>{order}</Text>
                            <Text style={{ ...styles.subText, width: windowWidth * 0.6 }}>{status}</Text>
                        </View>
                    </View>
                    <Text style={{ ...styles.subText, width: windowWidth * 0.15 }}>{duration}</Text>
                </View>
                <View style={styles.divider} />
            </Swipeable>
        </>
    )
}

