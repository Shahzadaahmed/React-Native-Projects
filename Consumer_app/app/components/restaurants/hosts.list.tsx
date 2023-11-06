import React from 'react'
import {Image, Text, View} from 'react-native'
import MapView, {Marker} from 'react-native-maps';
import styles from './restaurant.style'
import Images from '../../common/Images';
import {actuatedNormalize} from '../../utils';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';
import {theme} from '../../common';
import Handle from '../../common/handle.picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface Region 
{
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

interface Props
{
    vendorsList: Array<any>,
    location: any,
    region: Region,
    onClosePress: any,
    snapPoints: Array<any>,
    overScroll: boolean
}

const HostsList = (props: Props) =>
{
    const {vendorsList, location, region, onClosePress, snapPoints, overScroll} = props
    return (
        <ScrollBottomSheet
        componentType="FlatList"
        snapPoints={snapPoints}
        initialSnapIndex={1}
        enableOverScroll={overScroll}
        style={{backgroundColor: theme.colors.white, zIndex: 1,paddingHorizontal: 5}}
        renderHandle={() => (<Handle onPress={props.onClosePress} />)}
        ListHeaderComponent={() => (      
        <View>
            <Text style={styles.headingText}>{ `Vendor's List of Hosts`}</Text>
            <MapView   // MAPVIEW FOR DIRECTION PURPOSE 
                // provider={PROVIDER_GOOGLE}
                initialRegion={region}
                style={styles.map}
                showsUserLocation={false}
                zoomEnabled={true}
                maxZoomLevel={14}
                minZoomLevel={14}
            >
                <Marker //MARKER WHICH SHOW COORDINATE
                    coordinate={{latitude: 37.78825, longitude: -122.4324}}
                    title={"Harley Strert Clinic"}
                    style={styles.markerImage}
                    image={Images.MapMarker}
                />
            </MapView>
        </View>
        )}
        data={vendorsList}
        keyExtractor={(item:any) => item.id}
        renderItem={({item}: any) =>
        {
            const {logo, title, price, distance, rating, address} = item 
            return (
            <View style={[styles.row, styles.horizontal15]}>
                <Image source={{uri: item.logo}}
                style={styles.hostLogo}
                />
                <View style={styles.hostViewContainer}>
                    <Text style={{...styles.listText, margin: 8}}>{title}</Text>
                    <Text style={styles.listSubText}>{address}</Text>
                    <View style={styles.horizontal}>
                <View style={{...styles.listSubTextView, marginTop:0}}>
                    <AntDesign name={'star'} color={theme.colors.secondary} size={20} />
                    <Text style={{...styles.listSubText, color: theme.colors.black}}>{rating}</Text>
                    <Text style={{...styles.listSubText}} numberOfLines={1}>{`. $ ${price}/person  .  ${distance}`}</Text>
                </View>
            </View>
                </View>
            </View>
            )
        }
    }
    />
    )
}

export default HostsList;
