/*
   AUTHOR:   Muhammad Faizan
  SUMMARY:   MORE TAB SUMMARY.
*/

// IMPORT THE REACT COMPONENTS FOR PERFORMING BASIC OPERATIONS.
import React,{useState,useRef,useEffect} from 'react'
import {FlatList, SafeAreaView, StyleSheet,Alert,Text,Platform, View, ScrollView,Image, TouchableOpacity} from 'react-native'
import {windowHeight, windowWidth} from '../../common/Constants';
import {AddressItems, roles} from '../../data';
import {AddressList} from './addressList.View';
import PressableIcon from '../../common/pressable.icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { theme } from '../../common';
import { actuatedNormalize, Fonts, Svgs } from '../../utils';
import BottomSheetStyle from '../bottomsheets/bottomsheet.style'
import bottomsheetStyle from '../bottomsheets/bottomsheet.style';
import TextInput from '../../common/text.input'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location'; // IMPORT GEO LOCATION
import {GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'; // IMPORT GOOGLE PLACE AUTOCOMPLETE 
import {LATITUDE_DELTA, LONGITUDE_DELTA} from '../../common/Constants';
import LottieView from "lottie-react-native";
import Svg from 'react-native-svg';
import icons from '../../../assets/icons'

// DEFINE THE PROPS THAT WILL BE SENT FROM PARENT COMPONENT.
interface Props
{
    navigation: any
    setSheetStatus:any
    handleSheetStatus:void
}

// DEFINE REGION INTERFACE
interface Region
{
    latitude: number,
    longitude: number,
    latitudeDelta: number,
    longitudeDelta: number
}

// START THE ADDRESS PAGE FUNCTION THAT WILL BE IMPORTED IN MORE_STACK FILE.
const AddAddress = (props: Props) =>
{
    const [region, setRegion] = useState<Region>() // DELARE REGION STATE
    const [userLocation, setUserLocation] = useState<any>('Loading...') // USER LOCATION STATE TO DISPLAY ADDRESS
    const [regionChangeProgress, setRegionChangeProgress] = useState<boolean>(false) // INITIALIZE STATE TO ANIMATE MARKER
    const [height, setHeight] = useState<number>(300)
    const mapView = useRef<any>() // MAP REF
    let animationVar: any // DECLARE VARIABLE FOR PLAYING MARKER ANIMATION

 // FETCH USER CURRENT POSITION METHOD
 useEffect (() =>
 {
     GetLocation.getCurrentPosition (
    {
         enableHighAccuracy: true,
         timeout: 15000
    })
    .then ((location) =>
    {
        console.log ('location', location);
        const currentLocation = {"latitude": location.latitude, "longitude": location.longitude, "latitudeDelta": LATITUDE_DELTA, "longitudeDelta": LONGITUDE_DELTA} //FETCHING CURRENT LOCATION 
        console.log (currentLocation)
        setRegion (currentLocation) //UPDATE REGION VARIABLE
        fetchAddress (currentLocation) // FETCHING ADDRESS BY CALLING FETCH FUNCTION
    })
    .catch (error =>
    {
        if (error.code == 'UNAVAILABLE')
        {
            Alert.alert ('Location', 'To continue, turn on device location', 
            [
                {text: 'Ok', onPress: () => GetLocation.openGpsSettings()},
                {text: 'No Thanks', onPress: ()=> props.navigation.goback()},
            ])
        }
        const {code, message} = error;
        console.warn (code, message);
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
               setUserLocation (userLocation)
               setTimeout(() =>
               {
                   setRegionChangeProgress (false)
               }, 100);
           });
   }

   // FUNCTION TO SET LAT & LNG ON REGION CHANGE
   const on_region_change = (region: any) =>
   {
        animationVar.play();
       setRegionChangeProgress (true); 
       setRegion (region);
       fetchAddress (region);
       setHeight (300)
   }

  // GOOGLE PLACES AUTOCOMPLETE METHOD
  const Google_place = () =>
    {
      return (
          <>
              <GooglePlacesAutocomplete
                  placeholder={userLocation? userLocation : ''}
                  query={{
                      key: 'AIzaSyAog7HDdJENr2KfNMrmoKLrGlDIXI83i6I',
                      language: 'en', // LANGUAGE OF THE RESULTS
                  }}
                  enablePoweredByContainer = {false}
                  fetchDetails
                  textInputProps={{
                      placeholderTextColor: theme.colors.black,
                      // CLEAR INPUT AND INCREASE SIZE OF BOTTOM SHEET WHEN USER SEARCH FOR LOCATION
                      onFocus: () =>
                      {
                          setUserLocation (''),
                          setHeight (windowHeight * 0.75)
                      },
                    }}
                  styles={{textInput: styles.input}}
                  onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) =>
                    {
                      setRegionChangeProgress (true)
                      setHeight (300)
                      const pickedLoc: any = {
                          latitude: details?.geometry.location.lat,
                          longitude: details?.geometry.location.lng,
                          latitudeDelta: LATITUDE_DELTA,
                          longitudeDelta: LONGITUDE_DELTA
                      }
                      setRegion (pickedLoc); // SET REGION WITH RESULT
                      mapView.current.animateToRegion (pickedLoc, 3 * 1000); // ANIMATE TO REGION AFTER SEARCH
                      console.log (details)
                      setUserLocation (details?.formatted_address) // SET USER LOCATION WITH RESULT
                    }
                    }
              />
          </>
      )
    }
    return (
            <View style={{height:"100%",backgroundColor:"white"}}>
            <View style={{backgroundColor:"white",flexDirection:"row",justifyContent:"space-between"}}>
              <Text style={bottomsheetStyle.headingText}>Add address</Text> 
              <TouchableOpacity onPress={()=>props.handleSheetStatus(false)}> 
              <AntDesign name="close" size={25} style={{marginVertical:20}}/>    
              </TouchableOpacity>    
            </View>
            <View style={styles.inputView}>
                <Ionicons name="md-search-outline" size={25} color={theme.colors.darkGrey} style={{marginHorizontal:8}}/>
            <Google_place/>
            </View>
            <View  style={styles.mapView}>
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
            <View style={styles.addressCard}>
                    <View style={styles.ImgageConatiner}>
                    <View style={styles.imgView}>
                        <Image source={icons.markerLocation} style={{height:23,width:20,alignSelf:"center"}}/>
                        </View>
                        </View>
                        <View style={{width:"50%",backgroundColor:"transparent",height:"100%",}}>
                            <View style={{backgroundColor:"transparent",height:"100%",justifyContent:"center"}}>
                            <Text style={{marginHorizontal:5,marginVertical:5,fontWeight:"400",color:theme.colors.darkGrey}}>Selected Address</Text>
                            <Text style={{marginHorizontal:5,}} numberOfLines={2}>{userLocation}</Text>
                            </View>
                        </View>
                        <View style={{width:"25%",backgroundColor:"transparent",height:"100%",justifyContent:"center"}}>
                            <AntDesign name={"star"} size={25} color={"#0E5561"} style={{alignSelf:"center"}}/>
                        </View>
                        </View>
            </View>
             {/* FIXED MARKER WITH LOTTIE ANIMATION */}
             <View style={styles.markerFixed}>
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
            <View style={{padding:10}}>
            <Text style={styles.text}>Name</Text>
            <TextInput placeholderTextColor={theme.colors.darkGrey} placeholderTitle={"Enter text"} TextInputView={{width:windowWidth*0.87}} TextInputStyle={{height:windowHeight*0.04,width:windowWidth*1}}/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <View>
            <Text style={styles.text}>Building number</Text>
            <TextInput placeholderTextColor={theme.colors.darkGrey} placeholderTitle={"Enter text"} TextInputView={{width:windowWidth*0.43}} TextInputStyle={{height:windowHeight*0.04,width:windowWidth*1}}/>
            </View>
            <View>
            <Text style={styles.text}>Flat number</Text>
            <TextInput placeholderTextColor={theme.colors.darkGrey} placeholderTitle={"Enter text"} TextInputView={{width:windowWidth*0.43}} TextInputStyle={{height:windowHeight*0.04,width:windowWidth*1}}/>
            </View>
                </View>
                <View style={styles.btnOrderView}>
                        <TouchableOpacity style={styles.btnOrder}>
                          <Svgs.trash height={20} width={26}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.btnApple}>
                            <Text style={styles.textH2}>Save</Text>
                            </TouchableOpacity>
                    </View>
                    
                    
            </View>
       
    )

}

//STYLING
const styles = StyleSheet.create({ 
    ImgageConatiner:
    {
        width:"25%",
        backgroundColor:"transparent",
        height:"100%",
        justifyContent:"center"
        
    },
    textH1:
    {
    fontSize: actuatedNormalize('17'),
    fontFamily: Fonts.Medium,
    color: theme.colors.black,
    },
  imgView:
        {
        width:"70%",
        backgroundColor:theme.colors.bgColor,
        height:"70%",
        alignSelf:"center",
        borderRadius:20,
        justifyContent:"center"
    },
    btnOrderView:
    {
      backgroundColor:"transparent",
      flexDirection:"row",
      height:60,
      alignItems:"center",
      justifyContent:"space-between",
      paddingTop:30

    },
    btnOrder:
    {
      width:windowHeight*0.09,
      backgroundColor:theme.colors.bgColor,
      height:windowWidth*0.14,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:16,
      flexDirection:"row"
    },
    btnApple:
    {
      width:windowWidth*0.7,
      backgroundColor:theme.colors.orange,
      height:windowHeight*0.065,
      justifyContent:"center",
      alignItems:"center",
      borderRadius:16,
      flexDirection:"row"
    },
    row:
    {
        flexDirection: 'row',
        alignItems: 'center'
    },
    map: 
    {
      ...StyleSheet.absoluteFillObject
      // position: 'absolute',
      // top: 0,
      // left: 0,
      // right: 0,
      // bottom: 0,
    },
    
    text:
    {
    fontSize: actuatedNormalize('12'),
    fontFamily: Fonts.Regular,
    color: theme.colors.darkGrey,
    margin:10
    },
  textH2:
    {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    color: theme.colors.black,
   
    },
    mapView: 
    {
      height:windowHeight*0.35,
      width:windowWidth*1,
      alignSelf:"center",
      borderRadius:10,
      backgroundColor:"red"
    },
  
  inputView:
  {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingVertical: 2,
    borderRadius: 10,
    backgroundColor: theme.colors.bgColor,
    marginVertical:10
  },
  input:
  {
    fontSize: actuatedNormalize('16'),
    fontFamily: Fonts.Regular,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.bgColor,
  },
  
  markerFixed: 
  {
    left: Platform.OS == 'ios' ? windowHeight/windowWidth * 72 : windowWidth*0.34,
    // marginTop: -48,
    position: 'absolute',
    top: '20%'
  },
  addressCard:
    {
    height:windowHeight*0.10,
    width:"90%",
    flexDirection:"row",
    backgroundColor:theme.colors.white,
    position:"absolute",
    top:"68%",
    alignSelf:"center",
    borderRadius:20
    }
  

})
export default AddAddress;
