/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   SPECIAL ORDER COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React from 'react'
import {FlatList, SafeAreaView, Text, TouchableWithoutFeedback, View} from 'react-native';

// IMPORT COMMON STYLES
import {theme} from '../../common';
import {actuatedNormalize} from '../../utils';
import styles from './special_order.style';
import CommonHeader from '../../common/header'; // IMPORT COMMON COMPONENTS

// IMPORT ICONS
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileIcon from '../../assets/svg/profileWithBG.svg';
import ShopIcon from '../../assets/svg/shopWithBG.svg';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT STACK FILE.
const OrderCard = (props: any) => 
{
    const {type, icon: Icon, text, goTo} = props
    return(
        <TouchableWithoutFeedback onPress={goTo}>
        <View style={styles.orderCardContainer}>
            <View style={[styles.row,styles.spacebtw,styles.bottom5]}>
                <Text style={styles.subText}>{`For ${type}`}</Text>
                <Ionicons name='chevron-forward' 
                size={actuatedNormalize(22)}
                color={theme.colors.active}
                />
            </View>
            <Icon height={40} width={40} style={styles.vertical5}/>
            <Text style={styles.headingText}>{text}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}

const SpecialOrder = (props: Props) =>
{
    return (
        <SafeAreaView style={styles.container}>
        <CommonHeader
          title={'Special Order'}
          backgroundColor={theme.colors.white}
          iconColor={theme.colors.darkGrey}
          allowTextWrap={true}
          hideIcon={false}
        />

        <View style={styles.horizontal5}>
        <OrderCard
        type={'you'}
        icon={ProfileIcon}
        text={'Create special orders in the chat with the vendor'}
        goTo={()=> props.navigation.navigate('WeekPlan')}
        />  

        <OrderCard
        type={'your company'}
        icon={ShopIcon}
        text={'Create large orders scheduled for up to 6 months'}
        goTo={()=> props.navigation.navigate('WeekPlan')}
        />  
        </View>  


        </SafeAreaView>
    )
}

export default SpecialOrder;
