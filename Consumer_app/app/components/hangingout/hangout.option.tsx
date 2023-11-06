/*
   AUTHOR:   Muhammad Munir
  SUMMARY:   HANGOUT PAGE SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React, {useEffect, useState, useRef, useMemo, useCallback} from 'react';
import {
        View,
        ScrollView,
        Animated,
        Image,
        TouchableOpacity,
        Dimensions,
        Platform,
        Alert,
        Modal
    } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps"; // IMPORT GOOGLE MAPS
import {theme} from '../../common';
import PressableIcon from '../../common/pressable.icon';
import {markers} from '../../data';
import {Icons, Svgs} from '../../utils';
import {HangoutItem} from './hangingout.item';
import styles from './hangingout.style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {windowWidth} from '../../common/Constants';
import BottomView from './main.bottomSheet';
import {MainListItem} from '../../common/hangout.listItem';

const CARD_WIDTH = windowWidth * 0.8; 
const SPACING_FOR_CARD_INSET = windowWidth * 0.1 - 10; // INITIALIZE SPACE BETWEEN CARDS

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
}

// START THE HANGING OUT FUNCTION THAT WILL BE IMPORTED IN HANGOUT STACK FILE.
const HangingOut = (props: Props) =>
{
    // INITILIZING REGION WITH COSTOM CORDS
    const [region, setRegion] = useState({
        latitude: 22.62938671242907,
        longitude: 88.4354486029795,
        latitudeDelta: 0.04864195044303443,
        longitudeDelta: 0.040142817690068
    })

     // hooks
    const sheetRef = useRef<any>(null);

    // variables
    const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);
    const [height, setHeight] = useState(80)
    const [showList, setShowList] = useState<any>('1')
    const [showView, setShowView] = useState(false)

    // ANIMATE MAP TO RESPECTIVE CORDS WHEN POINTER SELECTION CHANGES
    useEffect(() =>
    {
        mapAnimation.addListener(({value}) =>
        {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // ANIMATE 30% AWAY FROM LANDING ON THE NEXT ITEM
            if (index >= markers.length)
            {
                index = markers.length - 1;
            }
            if (index <= 0)
            {
                index = 0;
            }

            clearTimeout(regionTimeout);

            const regionTimeout = setTimeout(() =>
            {
                if (mapIndex !== index)
                {
                    mapIndex = index;
                    const {coordinate}: any = markers[index];
                    _map.current.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: region.latitudeDelta,
                            longitudeDelta: region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    });

    const interpolations = markers.map((marker, index) =>
    {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            ((index + 1) * CARD_WIDTH),
        ];

        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: "clamp"
        });

        return {scale};
    });

    // CALL THIS FUNCTION WHEN USER TAPS ON ANY MARKER SO THAT RESTAURANT WILL BE DISPLAYED
    const onMarkerPress = (item:any,index:any,mapEventData: any) =>
    {
        setShowView(true)
        setShowList(item.id)
        const markerID = mapEventData._targetInst.return.key;

        let x = (markerID * CARD_WIDTH) + (markerID * 20);
        if (Platform.OS === 'ios')
        {
            x = x - SPACING_FOR_CARD_INSET;
        }

        _scrollView.current.scrollTo({x: x, y: 0, animated: true});
        // setShowList(true);
    }

    const _map = React.useRef<any>();
    const _scrollView = React.useRef<any>();

    return (
        <View style={styles.container}>
            <MapView
                ref={_map}
                initialRegion={region}
                style={styles.container}
                // provider={PROVIDER_GOOGLE}
            >
                {/* MAPING ALL MARKERS TO DISPLAY ON MAP */}
                {markers.map((item, index) =>
                {
                    const scaleStyle = 
                    {
                        transform: 
                        [
                            {
                                scale: interpolations[index].scale,
                            },
                        ],
                    };
                    return (
                        <Marker key={index} coordinate={item.coordinate} onPress={(e) => onMarkerPress(item,index,e)}>
                            <Animated.View style={[styles.markerWrap]}>
                                <Animated.Image
                                    source={showList == item.id?  Icons.FilledMarkerIcon: Icons.MarkerIcon}
                                    style={[styles.marker, scaleStyle]}
                                    resizeMode="cover"
                                />
                            </Animated.View>
                        </Marker>
                    );
                })}
            </MapView>
            <View style={styles.backIcon}>
                <PressableIcon
                    icon={<Ionicons name={'arrow-back'} color={theme.colors.darkGrey} size={28} />}
                    onPress={() => props.navigation.goBack()}
                    style={styles.iconView}
                />
            </View>
            <View style={styles.searchIcon}>
                <PressableIcon
                    icon={<Feather name={'search'} color={theme.colors.darkGrey} size={28} />}
                    onPress={() => props.navigation.goBack()}
                    style={styles.iconView}
                />
            </View>
            {/* <View>
               
            </View> */}
            {/* ANIMATED SCROLL VIEW */}
            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                pagingEnabled
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + 20}
                snapToAlignment="center"
                style={{...styles.scrollView}}
                contentInset={{
                    top: 0,
                    left: SPACING_FOR_CARD_INSET,
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET
                }}
                contentContainerStyle={{
                    paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                }
                            },
                        },
                    ],
                    {useNativeDriver: true}
                )}
            >
                {/* MAPING ALL RESTAURANTS TO DISPLAY IN HORIZONTAL VIEW */}
                {markers.map((item, index) => (
                    <View key={item.id} style={{display: showView? 'flex': 'none'}}>
                        <HangoutItem
                            name={item.name}
                            image={item.image}
                            timing={item.timing}
                            pricing={item.pricing}
                            rating={item.rating}
                            distance={item.distance}
                        />
                    </View>
                ))}
            </Animated.ScrollView>
            {/* BottomSheet */}
            <BottomView
                sheetRef={sheetRef}
                snapPoints={snapPoints}
                // handleSheetChange={handleSheetChange}
            />
        </View>
    );
};

export default HangingOut;
