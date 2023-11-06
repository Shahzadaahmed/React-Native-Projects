/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   RESTAURANT HOST PAGE COMPONENT SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useRef, useState} from 'react'
import {ImageBackground, FlatList, Text, View, TouchableWithoutFeedback, ScrollView, Animated, Alert} from 'react-native'

// IMPORT ICONS
import RestaunantLogo from '../../assets/svg/restaurantLogo.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../common';

import {areasList, badges, hangoutBanners, restaurantCategories, vendorsList} from '../../data'; // HARD CODE DATA

// IMPORT COMMON STYLES
import styles from './restaurant.style';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {actuatedNormalize, Fonts, Svgs} from '../../utils';

// IMPORT SUB COMPONENTS
import TappableView from '../../common/tappable.view';
import NumericInput from '../../common/comNumericInput';
import {CommonSlider} from '../../common/commonSlider';
import GridView from '../../common/common.gridview';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import TopNavigator from '../../common/top.navigator';
import PressableIcon from '../../common/pressable.icon';
import Review from '../reviews/reviews.component';
import InformationView from '../information/information.component';
import Filter from '../filter/filter.component';
import {PrimaryButton} from '../../common/primary.button';
import HostsList from './hosts.list';
import AreasList from './areas.list';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props 
{
    navigation: any,
    route: any
}

const BANNER_H = ASPECT_RATIO * windowHeight / 1.7 // DECLARE HEIGHT FOR TOP IMAGE

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HANGOUT STACK FILE.
const HostPage = (props: Props) => 
{
    const scrollA = useRef(new Animated.Value(0)).current;
    const {item} = props.route.params
    const {name, timing, rating, pricing, foods} = item
    const [type, setType] = useState('')
    const [quantity, setQuantity] = useState<any>(0);
    const [dateTime, setDateTime] = useState<any>("DD MMM, hh:mm")
    const [seats, setSeats] = useState<any>(0)
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [reviewsVisible, setReviewsVisible] = useState<boolean>(false);
    const [infoVisible, setInfoVisible] = useState<boolean>(false);
    const [filterVisible, setFilterVisible] = useState<boolean>(false);
    const [visibleSheet, setVisibleSheet] = useState<string>('');
    const reviewSheetRef = useRef<any>();

    // SHOW DATE_TIME PICKER METHOD
    const showDatePicker = () =>
    {
        setDatePickerVisibility(true);
    };

    // HIDE DATE_TIME PICKER METGHOD
    const hideDatePicker = () =>
    {
        setDatePickerVisibility(false);
    };

    // HANDLE CONFIRM METHOD ON PICKING DATE_TIME
    const handleConfirm = (datetime: any) =>
    {
        let formattedDate = moment(datetime).format("DD MMM, hh:mm")
        setDateTime(formattedDate);
        hideDatePicker();
    };
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
    const DecreaseItem = (value: number, type: any) => 
    {
        if (value >= 0) 
        {
            type == 'sitting' ? setSeats(value - 1) : setQuantity(value - 1)
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

    // RENDER FUNCTION FOR BADGE ITEM
    const renderBadgeItem = ({item}: any) => 
    {
        const {icon: Icon, text} = item
        return (
            <View style={{marginLeft: 10}}>
                <PrimaryButton
                    backgroundColor={theme.colors.bgColor}
                    onPress={null}
                    height={60}
                    width={windowWidth * 0.45}
                    textStyle={windowWidth * 0.26}
                    text={text}
                    borderRadius={10}
                    icon=
                    {
                        <PressableIcon
                            icon=
                            {
                                <Icon
                                    height={actuatedNormalize(25)}
                                    width={actuatedNormalize(25)}
                                />
                            }
                            style={styles.smallIcon}
                            onPress={null}
                        />
                    }
                    fontSize={actuatedNormalize(14)}
                />
            </View>
        )
    }

    // MAIN VIEW FOR HOST PAGE
    return (
        <View style={{...styles.container, backgroundColor: visibleSheet != '' ? 'rgba(0,0,0,0.9)' : 'white'}}>
            <View style={{opacity: visibleSheet != '' ? 0.3 : 1}}>
                <TopNavigator
                    title={name}
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
                            source={{uri: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/5d/c3/8d/ambiance.jpg'}} />
                    </View>

                    <View style={styles.mainView}>
                        <View style={styles.restaurantLogo}>
                            <RestaunantLogo height={windowHeight * 0.15} width={windowHeight * 0.15} />
                        </View>
                        <Text style={styles.titleText}>{name}</Text>
                        <Text style={{...styles.subText, fontSize: actuatedNormalize(18), textAlign: 'center'}}>{'Italian . Seafood . Turkish'}</Text>

                        <View style={styles.tappableViews}>
                            <TappableView
                                text={rating}
                                icon={<AntDesign name={'star'} size={20} color={theme.colors.lightBlack} />}
                                onPress={() => 
                                {
                                    setReviewsVisible(!reviewsVisible)
                                    setVisibleSheet('reviews')
                                }}
                            />
                            <TappableView
                                text={'8 Areas'}
                                icon={<Svgs.homeLocation />}
                                onPress={() => setVisibleSheet('areasList')}
                            />
                            <TappableView
                                text={'Hosts'}
                                icon={<Svgs.host_icon />}
                                onPress={() => setVisibleSheet('hostsList')}
                            />
                            <TappableView
                                text={'Info'}
                                icon={<MaterialIcons name={'info'} color={theme.colors.lightBlack} size={20} />}
                                onPress={() => 
                                {
                                    setInfoVisible(!infoVisible)
                                    setVisibleSheet('info')
                                }}
                            />
                        </View>

                        <View style={styles.marginTop}>
                            <PrimaryButton
                                backgroundColor={theme.colors.bgColor}
                                onPress={() => props.navigation.navigate('SpecialOrder')}
                                height={50}
                                width={windowWidth * 0.9}
                                text={'Special order'}
                                borderRadius={10}
                                icon={<Svgs.Edit height={24} width={24} />}
                                fontSize={actuatedNormalize(17)}
                            />
                        </View>

                        <FlatList
                            horizontal
                            data={badges}
                            style={styles.marginVertical}
                            showsHorizontalScrollIndicator={false}
                            renderItem={renderBadgeItem}
                        />

                        <CommonSlider
                            height={ASPECT_RATIO * windowHeight / 4}
                            data={hangoutBanners}
                            style={{margin: 15}}
                        />
                        <View style={{...styles.horizontal15, marginTop: 10}}>
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
                                    data={restaurantCategories}
                                    keyExtractor={(item) => item.id}
                                    renderItem={renderItem}
                                />
                            </View>
                            <View style={{...styles.row, flexWrap: 'wrap', justifyContent: 'space-between'}}>

                                {foods.map((item: any, index: number) =>
                                {
                                    return (
                                        <View key={item.id}>
                                            <GridView
                                                topHeading={name}
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
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="datetime"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
                    </View>

                </Animated.ScrollView>
                <View style={{...styles.cartButtonView, display: quantity != 0 ? 'flex' : 'none'}}>
                    <TouchableWithoutFeedback onPress={() => props.navigation.jumpTo('CartStack')}>
                        <View style={styles.cartButton}>
                            <Text style={styles.cartButtonText}>{`To Cart ${quantity}`}</Text>
                            <Text style={{...styles.cartButtonText, fontFamily: Fonts.Medium}}>{`$ ${totalPrice.toFixed(2)}`}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>

            {visibleSheet == 'reviews' &&
                <Review
                    sheetRef={reviewSheetRef}
                    navigation={props.navigation}
                    onClosePress={() => setVisibleSheet('')}
                />}
            {visibleSheet == 'info' &&
                <InformationView
                    title={name}
                    detail={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.'}
                    region=
                    {{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    address={'14 Brewer St, London W1F 0SG'}
                    totalSitting={'24 tables'}
                    timing={'Daily 08:00 to 20:00'}
                    onClosePress={() => setVisibleSheet('')}
                />
            }

            {visibleSheet == 'dishFilter' &&
                <Filter
                    onClosePress={() => setVisibleSheet('')}
                    goTo={visibleSheet}
                    snapPoints={[actuatedNormalize(100), '25%', '30%']}
                    overScroll={true}
                />
            }
            {visibleSheet == 'hostsList' &&
                <HostsList
                    vendorsList={vendorsList}
                    onClosePress={() => setVisibleSheet('')}
                    snapPoints={[actuatedNormalize(100), '25%', '30%']}
                    overScroll={true}
                    region=
                    {{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    location=
                    {{
                        latitude: 37.78825,
                        longitude: -122.4324
                    }}
                />
            }

            {visibleSheet == 'areasList' &&
                <AreasList
                    list={areasList}
                    onClosePress={() => setVisibleSheet('')}
                    snapPoints={['30%', '50%', '50%']}
                    overScroll={false}
                />
            }

        </View>
    )
}

// STYLE TO ANIMATE THE TOP IMAGE
const style = {
    banner: (scrollA: any) => ({
        height: BANNER_H,
        width: '200%',
        resizeMode: 'cover',
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


export default HostPage;
