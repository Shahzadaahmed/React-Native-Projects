/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   PICK LOCATION SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useEffect, useState, useRef} from 'react';
import {Alert, Platform, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location'; // IMPORT GEO LOCATION
import styles from './location.styles';
import {actuatedNormalize, Svgs} from '../../utils';
import PressableIcon from '../../common/pressable.icon';
import BottomView from './location.view';
import {theme} from '../../common';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'; // IMPORT GOOGLE PLACE AUTOCOMPLETE 
import {LATITUDE_DELTA, LONGITUDE_DELTA, windowHeight, windowWidth} from '../../common/Constants';
import LottieView from "lottie-react-native";

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}

// DEFINE REGION INTERFACE
interface Region
{
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}
// START THE PICK LOCATION FUNCTION THAT WILL BE IMPORTED IN HOME STACK FILE.
const PickLocation = (props: Props) =>
{
    const [region, setRegion] = useState<Region>() // DELARE REGION STATE
    const [userLocation, setUserLocation] = useState<any>('Loading...') // USER LOCATION STATE TO DISPLAY ADDRESS
    const [regionChangeProgress, setRegionChangeProgress] = useState<boolean>(false) // INITIALIZE STATE TO ANIMATE MARKER
    const [addressSheet, setAddressSheet] = useState<boolean>(false)
    const [showAddressPopup, setShowAddressPopup] = useState<boolean>(false)
    const [showAddFavouriteSheet, setShowAddFavouriteSheet] = useState<boolean>(false)
    const [sheetOpen, setSheetOpen] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(300)
    const mapView = useRef<any>() // MAP REF
    const sheetRef = useRef<any>() // SHEET REF
    const sheetRefFav = useRef<any>() // SHEET REF2
    let animationVar: any // DECLARE VARIABLE FOR PLAYING MARKER ANIMATION

    // FETCH USER CURRENT POSITION METHOD
    useEffect(() =>
    {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000
        })
            .then((location) =>
            {
                console.log('location', location);
                const currentLocation = {"latitude": location.latitude, "longitude": location.longitude, "latitudeDelta": LATITUDE_DELTA, "longitudeDelta": LONGITUDE_DELTA}
                console.log(currentLocation)
                setRegion(currentLocation)
                fetchAddress(currentLocation)
            })
            .catch(error =>
            {
                if (error.code == 'UNAVAILABLE')
                {
                    Alert.alert('Location', 'To continue, turn on device location', [
                        {text: 'Ok', onPress: () => GetLocation.openGpsSettings()},
                        {text: 'No Thanks', onPress: () => props.navigation.goback()},
                    ])
                }

                const {code, message} = error;
                console.warn(code, message);
            })
    }, [])

    // FETCH LOCATION DETAILS AS A JSON FROM GOOGLE MAP API
    const fetchAddress = (location: any) =>
    {
        fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + location.latitude + "," + location.longitude + "&key=" + "AIzaSyAog7HDdJENr2KfNMrmoKLrGlDIXI83i6I")
            .then((response) => response.json())
            .then((responseJson) =>
            {
                const userLocation = responseJson.results[0].formatted_address;
                setUserLocation(userLocation)
                setTimeout(() =>
                {
                    setRegionChangeProgress(false)
                }, 100);
            });
    }

    // FUNCTION TO SET LAT & LNG ON REGION CHANGE
    const on_region_change = (region: any) =>
    {
        animationVar.play();
        setAddressSheet(true)
        sheetRef.current.open();
        setSheetOpen(true)
        setRegionChangeProgress(true);
        setRegion(region);
        fetchAddress(region);
        setHeight(300)
    }

    // GOOGLE PLACES AUTOCOMPLETE METHOD
    const google_place = () =>
    {
        return (
            <>
                <GooglePlacesAutocomplete
                    placeholder={userLocation ? userLocation : ''}
                    query={{
                        key: 'AIzaSyAog7HDdJENr2KfNMrmoKLrGlDIXI83i6I',
                        language: 'en', // LANGUAGE OF THE RESULTS
                    }}
                    enablePoweredByContainer={false}
                    fetchDetails
                    listViewDisplayed={false}
                    textInputProps={{
                        onChangeText: (value) => setUserLocation(value),
                        placeholderTextColor: theme.colors.black,
                        // CLEAR INPUT AND INCREASE SIZE OF BOTTOM SHEET WHEN USER SEARCH FOR LOCATION
                        onFocus: () =>
                        {
                            setUserLocation(''),
                                setHeight(windowHeight * 0.75)
                        },
                        // onBlur}
                    }}
                    styles={{textInput: styles.input}}
                    onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) =>
                    {
                        setRegionChangeProgress(true)
                        setHeight(300)
                        const pickedLoc: any = {
                            latitude: details?.geometry.location.lat,
                            longitude: details?.geometry.location.lng,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA
                        }

                        setRegion(pickedLoc); // SET REGION WITH RESULT
                        mapView.current.animateToRegion(pickedLoc, 3 * 1000); // ANIMATE TO REGION AFTER SEARCH
                        console.log(details)
                        setUserLocation(details?.formatted_address) // SET USER LOCATION WITH RESULT
                    }
                    }
                />
            </>
        )
    }

    const openFavSheet = () =>
    {
        setShowAddFavouriteSheet(true)
        sheetRefFav.current.open()
    }

    return (
        <View style={styles.container}>

            <MapView
                ref={mapView}
                // provider={Platform.OS == 'android' && PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={region}
                showsUserLocation={false}
                onPanDrag={() => setRegionChangeProgress(true)}
                // GET REGION WHEN USER STOP SWIPING MAP
                onRegionChangeComplete={(region: any) =>
                {
                    on_region_change(region)
                }}
            />
            <View style={styles.backIcon}>
                <PressableIcon
                    icon={<Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28} />}
                    onPress={() => props.navigation.navigate({
                        name: 'RestaurantsScreen',
                        params: {address: userLocation},
                        merge: true,
                    })}
                    style={styles.iconView}
                />
            </View>

            {/* FIXED MARKER WITH LOTTIE ANIMATION */}
            <View style={{...styles.markerFixed, top: sheetOpen ? '10%' : '40%'}}>
                <LottieView
                    ref={animation =>
                    {
                        animationVar = animation;
                    }}
                    source={require('../../assets/animation/markerAnimation.json')}
                    loop={false}
                    style={{height: 90}}
                />
            </View>

            {/* FAVOURITE VIEW POPUP*/}
            <View style={{...styles.favViewPopup, display: showAddressPopup ? 'flex' : 'none'}}>
                <PressableIcon
                    icon={<EvilIcons name="location" size={32} color={theme.colors.darkGrey} />}
                    style={{marginRight: 10}}
                    onPress={null}
                />
                <View>
                    <Text style={styles.smallText} numberOfLines={1}>{'Selected Address'}</Text>
                    <Text style={{...styles.subText, width: windowWidth * 0.6}} numberOfLines={2}>{userLocation}</Text>
                </View>
                <AntDesign name={'star'} size={actuatedNormalize(22)} color={showAddFavouriteSheet ? theme.colors.active : theme.colors.darkGrey} style={styles.favIcon}
                    onPress={openFavSheet} />

            </View>



            <BottomView
                sheetRef={sheetRef}
                onClose={() => setSheetOpen(false)}
                address={userLocation}
                inputView={google_place()}
                showAddressPopup={() => setShowAddressPopup(true)}
                sheetRef2={sheetRefFav}
            />
        </View>
    )
}

export default PickLocation;