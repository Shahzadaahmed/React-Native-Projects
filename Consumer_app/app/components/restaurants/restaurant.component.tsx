/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   RESTAURANT SCREEN SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useState, useEffect} from 'react'
import {SafeAreaView, FlatList, Image, View, Text, TouchableWithoutFeedback, ImageBackground, TouchableOpacity, Animated, Alert} from 'react-native'
import {HeaderWithSearch} from '../../common/header.searchview';
import styles from './restaurant.style';  // IMPORT CSS
import {banners, restaurantCategories, charityDetail, restaurantsList, hangoutRestaurantsList, areasList} from '../../data'
import {theme} from '../../common';
import {actuatedNormalize, Fonts, Svgs} from '../../utils';
import CategoryView from '../charity/charity.category.view';
import {ScrollView} from 'react-native-gesture-handler';
import RestaurantItem from './restaurant.item';
import PressableIcon from '../../common/pressable.icon';
import {ASPECT_RATIO, windowHeight, windowWidth} from '../../common/Constants';
import {CommonSlider} from '../../common/commonSlider';
import Filter from '../filter/filter.component';
import useStorage from '../../utils/useStorage';
import GetLocation from 'react-native-get-location'; // IMPORT GEO LOCATION
import {MapKey} from '../../env';
import AreasList from './areas.list';

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any,
    route: any
}

// START THE MAIN FUNCTION THAT WILL BE IMPORTED IN HOME STACK FILE.
const Restaurants = (props: Props) =>
{
    const [type, setType] = useState<string>('All');
    const [isList, setIsList] = useState(true);
    const [showFilter, setShowFilter] : [string, Function] = useState('')
	const [{latitude, longitude}]: any = useStorage('userLocation', {isObject: true})
    const [userLocation, setUserLocation] = useState<string>('')

    useEffect(() => 
    {
        fetchAddress()
    }, 
    [])

    // RENDER FUNCTION FOR CATEGORIES LIST
    const renderItem = ({item}: any) => 
    {
        const {name} = item
        return (
            <TouchableWithoutFeedback onPress={() => setType(name)}>
                <View style={{...styles.categoryView, backgroundColor: type == name ? theme.colors.bgColor : theme.colors.white}}>
                    <Text style={{...styles.subText, color: type == name ? theme.colors.active : theme.colors.darkGrey, fontFamily: type == name ? Fonts.SemiBold : Fonts.Regular}}>{name}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }

        // FETCH LOCATION DETAILS AS A JSON FROM GOOGLE MAP API
        const fetchAddress = () =>
        {
            fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + latitude + "," + longitude + "&key=" + MapKey)
                .then((response) => response.json())
                .then((responseJson) =>
                {
                    const userLocation = responseJson.results[0].formatted_address;
                    console.log(userLocation)
                    setUserLocation(userLocation)
                });
        }
    return (
        <SafeAreaView style={[styles.container, showFilter != '' && styles.dimBG]}>
            {/* HEADER WITH SEARCH COMPONENT */}
            <HeaderWithSearch
                navigation={props.navigation}
                pickLocation={true}
                text={userLocation}
                leftAction={() => props.navigation.goBack()} 
                style={showFilter != '' && styles.dimBG}
                rightAction={()=> props.navigation.navigate('SearchScreen')}
                />

            <ScrollView scrollEnabled={showFilter != '' ? false : true}>
                <Text style={styles.headingText}>{'Delivery'}</Text>
                <CommonSlider
                height={ASPECT_RATIO * windowHeight / 3}
                data={banners}
                style={[styles.flatListSlider,]}
                />
                <View style={styles.horizontal}>
                    <View style={styles.row}>
                        <PressableIcon
                            icon={<Svgs.FilterIcon height={24} width={24} />}
                            onPress={() => setShowFilter('mainFilter')}
                            style={showFilter != '' && styles.dimBG}
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
                    <View style={{flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between'}}>
                        {hangoutRestaurantsList.map((item: any) =>
                            <View key={item.id}>
                                <RestaurantItem
                                    image={item.image}
                                    name={item.name}
                                    rating={item.rating}
                                    type={item.type}
                                    distance={item.distance}
                                    closing={item.closing}
                                    isList={isList}
                                    onPress={()=> props.navigation.navigate('RestaurantHostpage',{item:item})}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
            {showFilter == 'mainFilter' &&
            <Filter
            goTo={showFilter}
            onClosePress={()=> setShowFilter('')}
            onPressListView={()=>setIsList(true)}
            onPressGridView={()=>setIsList(false)}
            gridView={!isList}
            listView={isList}
            snapPoints={[actuatedNormalize(100), '15%', '15%']}
            overScroll={false}
            />
            }

        </SafeAreaView>
    )
}
export default Restaurants;