import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

//Save data to asyncstorage
export const setData = async (key:string, value:string) => {
     const response = await AsyncStorage.setItem(key, value)
     return response;
}

//Get data from Asyncstorage
export const getData = async (key:string) => {
     const response = await AsyncStorage.getItem(key)
     return response;
}

//Check if device is android
export const isAndroid = () => {
     return Platform.OS == 'android'
}

//Check if device is iOS
export const isIOS = () => {
     return Platform.OS == 'ios'
}

//To display consoles
export const Logger = (data:any, value?:any) => {
     return value ? console.log(data, value) : console.log(data)
}

//check if device is having notch
export const deviceHasNotch = () => {
     return DeviceInfo.hasNotch()
}
