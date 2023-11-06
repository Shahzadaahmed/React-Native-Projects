import React,{useEffect} from 'react';
import {Alert} from 'react-native';
import GetLocation from 'react-native-get-location'; // IMPORT GEO LOCATION
import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../common/Constants';
import {saveUserLocation} from '../localDB/localStorage';

export async function requestUserLocationPermission() {

GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000
})
    .then((location) =>
    {
        console.log('location', location);
        const currentLocation = {"latitude": location.latitude, "longitude": location.longitude, "latitudeDelta": LATITUDE_DELTA, "longitudeDelta": LONGITUDE_DELTA}
        console.log(currentLocation)
        saveUserLocation(currentLocation)
       // setRegion(currentLocation)
        // fetchAddress(currentLocation)
    })
    .catch(error =>
    {
        if(error.code == 'UNAVAILABLE' || 'UNAUTHORIZED'){
            Alert.alert('Enable Location Services', 'Turn on Location Services in Settings to find restaurants and shops near you.', [
                {text: 'Close'},
                {text: 'Settings', onPress: () => GetLocation.openGpsSettings()},
              ])
        }
       
        
        const {code, message} = error;
        console.warn(code, message);
    })
}

