/*
   AUTHOR:   Muhammad Munir
  SUMMARY:  FOOD LIST COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

// IMPORT COMMON STYLES
import {theme} from '../../common';
import GridView from '../../common/common.gridview';
import {windowWidth} from '../../common/Constants';
import {Fonts, Svgs} from '../../utils';
import styles from './special_order.style';

// IMPORT COMMON COMPONENTS
import CommonHeader from '../../common/header';
import PressableIcon from '../../common/pressable.icon';


import {foods, hangoutRestaurantsList, restaurantCategories, restaurantOffers} from '../../data';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN PARENT STACK FILE.
const FoodList = (props: Props) =>
{
    const [visibleSheet, setVisibleSheet] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [quantity, setQuantity] = useState<number>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0)

    // INCREMENT FUNCTION
    const IncrementItem = (value: number, price?: any) => 
    {
        if (value <= 1000) 
        {
            setQuantity(value + 1)
            setTotalPrice(totalPrice + price)
        }
    }

    // RENDER FUNCTION FOR CATEGORIES LIST
    const renderItem = ({item}: any) => 
    {
        const {name} = item
        return (
            <TouchableWithoutFeedback onPress={() => setType(name)}>
                <View style={{...styles.categoryView, backgroundColor: type == name ? theme.colors.bgColor : theme.colors.white}}>
                    <Text style={{...styles.subTextBottomSheet, color: type == name ? theme.colors.active : theme.colors.darkGrey, fontFamily: type == name ? Fonts.SemiBold : Fonts.Regular}}>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <CommonHeader
                title={'Monday'}
                backgroundColor={theme.colors.white}
                iconColor={theme.colors.darkGrey}
                allowTextWrap={true}
                hideIcon={false}
            />
            <ScrollView >
                <View style={styles.margin}>
                <View style={styles.row}>
                    <PressableIcon
                        icon={<Svgs.FilterIcon height={24} width={24} />}
                        onPress={() => setVisibleSheet('dishFilter')}
                        style={null}
                    />
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        // contentContainerStyle={{marginVertical: '5%'}}
                        data={restaurantOffers}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                    />

                </View>
                <View style={{...styles.row, flexWrap: 'wrap', justifyContent: 'space-between',paddingBottom:'25%'}}>

                    {foods.map((item: any, index: number) =>
                    {
                        return (
                            <View key={item.id}>
                                <GridView
                                    // topHeading={name}
                                    image={item.image}
                                    title={item.name}
                                    price={item.price}
                                    weight={item.weight}
                                    onPress={() => props.navigation.navigate('RestaurantDishpage', {item})}
                                    onPressAdd={() => IncrementItem(quantity, 'foodItem', item.price)}
                                />
                            </View>
                        )
                    })
                    }
                </View>
                </View>
                <View style={{...styles.cartButtonView, display: 'flex',}}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.jumpTo('CartStack')}>
                        <View style={styles.cartButton}>
                            <Text style={styles.cartButtonText}>{`To Cart ${quantity}`}</Text>
                            <Text style={{...styles.cartButtonText, fontFamily: Fonts.Medium}}>{`$ ${totalPrice.toFixed(2)}`}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default FoodList;