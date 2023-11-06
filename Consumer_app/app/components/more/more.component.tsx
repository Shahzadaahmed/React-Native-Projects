/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {FlatList, SafeAreaView, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import {windowHeight, windowWidth} from '../../common/Constants';
import {moreItems, roles, referFriendDetail} from '../../data';
import {MoreItem} from './more.item';
import styles from './more.styles';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}
// START THE MORE PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const More = (props: Props) =>
{
    // FUNCTION WHICH IS PERFORM NAVIGATION ACORDING TO INDEX
    const handleIndexNavigation = (item: any,) =>
    {
        console.log("Your Index", item.id)
        if (7 == item.id)
        {
            props.navigation.navigate("Address") // PERFORM NAVIAGTION FROM MORE SCREEN TO ADDREES SCREEN 
        }
        if (5 == item.id)
        {
            props.navigation.navigate("Offers") // PERFORM NAVIAGTION FROM MORE SCREEN TO ADDREES SCREEN 
        }
        if (10 == item.id)
        {
            props.navigation.navigate("Setting") // PERFORM NAVIAGTION FROM MORE SCREEN TO ADDREES SCREEN 
        }
        if (8 == item.id)
        {
            props.navigation.navigate("ReferAFriend", {detail: referFriendDetail}) // PERFORM NAVIAGTION FROM MORE SCREEN TO ADDREES SCREEN 
        }
    }
    // RETURN MORE SCREEN 
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>{'More'}</Text>
            <ScrollView>
                {moreItems.map((item, index) =>
                    <View key={item.id}>
                        <TouchableOpacity onPress={() => handleIndexNavigation(item)}>
                            <MoreItem
                                name={item.name}
                                icon={item.icon}
                            // onPress={()=> props.navigation.navigate('Hangout')}
                            />
                        </TouchableOpacity>
                    </View>
                )}
                <View style={{...styles.row, marginHorizontal: 5}}>
                    <ScrollView horizontal
                        showsHorizontalScrollIndicator={false}>
                        {roles.map((item, index) =>
                            <View key={item.id} style={{marginLeft: 10}}>
                                <item.icon height={windowHeight * 0.25} width={windowWidth * 0.32} />
                            </View>
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default More;