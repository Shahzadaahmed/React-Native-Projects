/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   DISH PAGE SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useRef, useState, useEffect} from 'react'
import {Text, View, Animated, TouchableWithoutFeedback, ImageBackground, FlatList, ScrollView, Alert} from 'react-native'

// IMPORT COMMON STYLES
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts, Svgs} from '../../utils';
import styles from './restaurant.style';
import {theme} from '../../common';
import {foodDetail, ingredientsList, nutritionValues} from '../../data';

// IMPORT ICONS
import FireIcon from '../../assets/svg/fire.svg';
import ClockIcon from '../../assets/svg/clock.svg';
import DoctorIcon from '../../assets/svg/doctor.svg';
import IngredientIcon from '../../assets/svg/ingredients.svg';
import RestaunantLogo from '../../assets/svg/restaurantLogo.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

// IMPORT SUB COMPONENTS
import GridView from '../../common/common.gridview';
import NumericInput from '../../common/comNumericInput';
import TappableView from '../../common/tappable.view';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import Extras from '../../common/extras.view';
import TopNavigator from '../../common/top.navigator';
import EmptyCart from '../bottomsheets/emptyCart.view';
import Filter from '../filter/filter.component';
import IngredientsList from './ingredients.list';
import BottomSheet from '../bottomsheets/bottomSheet.component';

const BANNER_H = ASPECT_RATIO * windowHeight / 1.7 // DECLARE HEIGHT FOR TOP IMAGE

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any,
    route: any,
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HANGOUT STACK FILE.
const DishPage = (props: Props) => 
{
    const scrollA = useRef(new Animated.Value(0)).current;
    const {title, description, price, weight, stats, ingredients, hostDetail, weightOptions, sideDishes, extras} = foodDetail
    const [type, setType] = useState('')
    const [showIngredients, setShowIngredients] = useState<boolean>(false)
    const [quantity, setQuantity] = useState<any>(1);
    const [dateTime, setDateTime] = useState<any>("DD MMM, hh:mm")
    const [visibleSheet, setVisibleSheet] = useState<string>('')
    const [seats, setSeats] = useState<any>(0)
    const [totalPrice, setTotalPrice] = useState<number>(price)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [extrasList, setExtrasList] = useState<any>(extras)
    const sheetRef = useRef<any>()
    const nutritionSheet = useRef<any>()
    // INCREMENT FUNCTION
    const IncrementItem = (value: number, type: any, price?: any) => 
    {
        if (value <= 1000) 
        {
            if (type == 'foodItem')
            {
                setQuantity(value + 1)
                setTotalPrice(totalPrice + price)
            }
            else
            {
                setSeats(value + 1)
            }
        }
    }

    // DECREMENT FUNCTION
    const DecreaseItem = (value: number, type: any, price?: any) => 
    {
        if (value > 1) 
        {
            if (type == 'foodItem')
            {
                setQuantity(value - 1)
                setTotalPrice(totalPrice - price)
            }
            else
            {
                setSeats(value - 1)
            }
        } else
        {
            sheetRef.current.open()
        }
    }

    // FUNCTION FOR MULTI_SELECTION EXTRAS ITEMS
    const onClickExtras = (item: any, index: any) => 
    {
        let array = [...extrasList]
        let items = array[index]
        items.selected = !items.selected
        setExtrasList(array)
    }
    // MAIN VIEW FOR DISH PAGE
    return (
        <View style={{...styles.container, backgroundColor: visibleSheet != '' ? 'rgba(0,0,0,0.9)' : 'white'}}>
        <View style={{opacity: visibleSheet != '' ? 0.3 : 1}}>
            <TopNavigator
                title={title}
                scrollA={scrollA}
                onPressBack={() => props.navigation.goBack()}
                onPressLike={() => Alert.alert('Liked')}
            />
            <Animated.ScrollView
                // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollA}}}],
                    {useNativeDriver: true}
                )}
                contentContainerStyle={{paddingBottom: '20%'}}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                <View style={styles.bannerContainer}>
                    <Animated.Image
                        style={style.banner(scrollA)}
                        source={{uri: 'https://image.brigitte.de/11225976/t/Lx/v3/w960/r1.5/-/ramen-teaser.jpg'}}
                        resizeMode={'contain'}
                    />
                </View>
                <View style={styles.mainView}>
                    <View style={styles.horizontal15}>
                        <View style={{...styles.row, justifyContent: 'space-between'}}>
                            <Text style={styles.dishTitleText}>{title}</Text>
                            <TappableView
                                text={weight}
                                icon={null}
                                onPress={null}
                            />
                        </View>

                        <Text style={styles.dishDescriptionText}>{description}</Text>
                        <View style={{...styles.row, justifyContent: 'space-between'}}>
                            {stats.map((item, index) => 
                            {
                                return (
                                    <View key={item.id}>
                                        <TappableView
                                            text={item.text}
                                            icon={item.id == 'nutrional' ? <FireIcon /> : item.id == 'time' ? <ClockIcon /> : <DoctorIcon />}
                                            onPress={()=> item.id == 'nutrional' && nutritionSheet.current.open()}
                                        />
                                    </View>
                                    )
                            })}
                        </View>

                        <View style={[styles.row, {justifyContent: 'space-between', marginTop: '5%'}]}>
                            <View style={styles.row}>
                                <IngredientIcon height={45} width={45} style={{marginRight: 10}} />
                                <View >
                                    <Text style={styles.subTitleText}>{'Ingredients'}</Text>
                                    <Text style={styles.subText}>{`${ingredients.length} items`}</Text>
                                </View>
                            </View>
                            <Ionicons
                                name={showIngredients ? "chevron-up" : "chevron-down"}
                                size={actuatedNormalize(34)}
                                color={theme.colors.lightBlack}
                                onPress={() => 
                                    {
                                    setVisibleSheet('ingredients')
                                    setShowIngredients(!showIngredients)
                                }}
                            />
                        </View>


                        {/* SEGMENTED CONTROL VIEW */}
                        <SegmentedControl
                            values={weightOptions}
                            selectedIndex={selectedIndex}
                            onChange={(event: any) => 
                            {
                                setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
                            }}
                            style={styles.segmentedControl}
                            tintColor={theme.colors.white}
                            backgroundColor={theme.colors.bgColor}
                            activeFontStyle={{color: theme.colors.lightBlack, fontFamily: Fonts.Medium}}
                            fontStyle={{color: theme.colors.darkGrey, fontFamily: Fonts.Regular}}
                        />

                        <Text style={{...styles.titleText, textAlign: 'left'}}>
                            {'Side Dishes'}
                        </Text>

                        <View style={{...styles.row, flexWrap: 'wrap', justifyContent: 'space-between'}}>

                            {sideDishes.map((item: any, index: number) =>
                            {
                                return (
                                    <View key={item.id}>
                                        <GridView
                                            topHeading={null}
                                            image={item.image}
                                            title={item.name}
                                            price={item.price}
                                            weight={item.weight}
                                            onPress={() => props.navigation.navigate('DishPage', {item})}
                                            onPressAdd={null}
                                        />
                                    </View>
                                )
                            })
                            }
                        </View>

                        <Text style={{...styles.titleText, textAlign: 'left', marginVertical: 10}}>
                            {'Extras'}
                        </Text>

                        <FlatList
                            data={extrasList}
                            horizontal
                            style={{height: '14%'}}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id}
                            renderItem={({item, index}) =>
                            (
                                <Extras
                                    name={item.name}
                                    icon={item.icon}
                                    price={item.price}
                                    selected={item.selected}
                                    onPress={() => 
                                    {
                                        onClickExtras(item, index)
                                        item.selected ? IncrementItem(quantity, 'foodItem', item.price)
                                            : DecreaseItem(quantity, 'foodItem', item.price)
                                    }}
                                />
                            )
                            }
                        />

                        <View style={{...styles.row, justifyContent: 'space-between', marginVertical: '5%'}}>
                            <NumericInput
                                btnIconLeft={"minus"}
                                btnIconRight="plus"
                                style={styles.numericInput}
                                btnIconLeftSize={23}
                                btnIconRightSize={23}
                                value={quantity}
                                onPressLeft={() => DecreaseItem(quantity, 'foodItem', price)}
                                onPressRight={() => IncrementItem(quantity, 'foodItem', price)}
                                disabled={false}
                                textStyle={{fontFamily: Fonts.SemiBold, fontSize: actuatedNormalize(20)}}
                                styleLeftButton={null}
                                styleRightButton={null}
                            />
                            <TouchableWithoutFeedback>
                                <View style={{...styles.cartButton, margin: 0, width: windowWidth * 0.55}}>
                                    <Text style={styles.cartButtonText}>{`To Cart ${quantity}`}</Text>
                                    <Text style={{...styles.cartButtonText, fontFamily: Fonts.Medium}}>{`$ ${totalPrice.toFixed(2)}`}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </View>
            </Animated.ScrollView>
            </View>
            {visibleSheet == 'ingredients' &&
            <IngredientsList
            list={ingredientsList}
            onClosePress={() => 
                {
                    setVisibleSheet('')
                    setShowIngredients(false)
                }}
            snapPoints={['30%', '50%', '50%']}
            overScroll={false}
            />
            }
             <BottomSheet
                sheetRef={nutritionSheet}
                height={ASPECT_RATIO * windowHeight / 2.5}
                onClose={() => console.log('')}
                children={
                    (
                        <>
                        <View style={styles.dragSign}/>
                        <Text style={styles.headingText}>{'Nutritional Value'}</Text>
                        <View style={[styles.row, styles.spacebtw, styles.nutritionView]}>
                        {nutritionValues.map((item, index)=>
                            {
                                return(
                        <View key={index}>
                            <View>
                            <Text style={styles.subHeadingText}>{item.value}</Text>
                            <Text style={{...styles.subTitleText, marginVertical: 0}}>{item.unit}</Text>
                            </View>
                        </View>
                                )
                            })}
                        
                        </View>
                        </>
                    )
                }
            />
            <EmptyCart
                sheetRef={sheetRef}
                onClose={console.log('hello')}
                height={300}
                navigation={props.navigation}
            />
        </View>
    )
}

// STYLE TO ANIMATE TOP IMAGE WHILE SCROLLING
const style = {
    banner: (scrollA: any) => ({
        height: BANNER_H,
        // aspectRatio:,
        // transform: [{ scale: 0.55 }],
        width: '200%',
        backgroundColor: theme.colors.overlay,
        transform: [
            {
                translateY: scrollA.interpolate({
                    inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
                    outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
                }),
            },
            {
                scale: scrollA.interpolate({
                    inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
                    outputRange: [2, 1, 0.5, 0.5],
                }),
            },
        ],
    }),
};

export default DishPage;
