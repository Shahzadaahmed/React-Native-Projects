/*
	AUTHOR: MUHAMMAD MUNIR
   SUMMARY: FOR COMMON FUNCTION USED ALL OVER THE APPLICATION.
*/

import AsyncStorageLib from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {env} from '../env';
import {setGlobalVariables} from './globals';

interface GalleryProps
{
	galleryOptions?: object,
	setModalVisible?: Function,
	setImage: Function;
	successFunction?: Function
}

// METHOD USING FOR SELECTING PHOTO FROM USERS GALLERY
export const open_gallery = async ({galleryOptions, setModalVisible, setImage, successFunction}: GalleryProps) =>
{
	let options: any = {
		mediaType: 'mixed',
		videoQuality: 'low',
		...galleryOptions
	};
	try
	{
		launchImageLibrary(options, async (response: any) =>
		{
			if (setModalVisible) setModalVisible(false)
			if (response.didCancel)
			{
				console.log('User cancelled image picker');
			} else if (response.error)
			{
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton)
			{
				console.log('User tapped custom button: ', response.customButton);
				Alert.alert(response.customButton);
			} else
			{
				let source = response.assets[0];
				setImage(source)
				if (successFunction) successFunction();
			}
		});
	} catch (error)
	{
		console.log(error, 'camera library error');
	}
};

// HANDLES THE STORAGE OF GLOBAL VARIABLES
export const updateSiteVariables = async (language_id: string) =>
{
	let dataToSend = {language_id: language_id}
	const staticData = await axios.get(env.api_url + "app/staticdata", {params: dataToSend})
	setGlobalVariables(staticData.data);
	let dataString = JSON.stringify(staticData.data);
	AsyncStorageLib.setItem("lk_static_data", dataString);
}