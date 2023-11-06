/*
   AUTHOR:   Khuram Haseeb
  SUMMARY:   REFER A FRIEND.
*/

//  IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState} from 'react'
import {SafeAreaView, Text, View, Image, TouchableOpacity, Share} from 'react-native'
import styles from './referAFriendStyles';
import HeaderTitleBack from '../../common/headerTitleBack';
import {theme} from '../../common';
import normalize from 'react-native-normalize';
import icons from '../../../assets/icons';
import ButtonWithIcon from '../../common/comButtonWithIcon';
import Button from '../../common/comButton';
import Clipboard from '@react-native-clipboard/clipboard';

//  DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any,
    route: any
}

//  START THE REFER A FRIEND PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const ReferAFriend = (props: Props) =>
{
    const {detail} = props.route.params
    const {title, description, copy, invite} = detail;//CONTENT DETAIL FROM PROP

    //  FUNCTION COPY  TO CLIPBOARD
    const copyToClipboard = async () =>
    {
        Clipboard.setString(copy);
    };

    const onShare = async () =>
    {
        try
        {
            const result = await Share.share({
                message: 'Invite a friend',
            });
            if (result.action === Share.sharedAction)
            {
                if (result.activityType)
                {
                    //  shared with activity type of result.activityType
                } else
                {
                    //  shared
                }
            } 
            else if (result.action === Share.dismissedAction)
            {
                //  dismissed
            }
        } 
        catch (error)
        {
            alert(error.message);
        }
    };

    //  RETURN REFER A FIREND SCREEN 
    return (
        <SafeAreaView style={styles.container}>
            <HeaderTitleBack title={"Refer a Friend"} iconName="arrow-back" iconColor={theme.colors.darkGrey} onPress={() => props.navigation.goBack()} textStyle={{fontSize: normalize(16)}} />
            <View style={{backgroundColor: "transparent", padding: 30, margin: 15, justifyContent: "center", alignItems: "center"}}>
                <View>
                    <Image source={icons.refer_friend_head} style={styles.referImg} resizeMode={'cover'} borderRadius={20} />
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.titleText}>{title}</Text>
                    <Text style={styles.subText}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <ButtonWithIcon iconName={"copy"} title={copy} iconColor={theme.colors.darkGrey} iconSize={20} style={styles.copyBtn} iconStyle={{right: 12}} textStyle={{color: "#1C1C1C"}} onPress={copyToClipboard} />
                </TouchableOpacity>
                <Button title={invite} style={styles.inviteBtn} onPress={onShare} />
            </View>
        </SafeAreaView>
    )
}

export default ReferAFriend;