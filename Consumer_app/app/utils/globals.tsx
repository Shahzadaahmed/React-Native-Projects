/*
	AUTHOR: QASIM ZUBAIR
   SUMMARY: THE COMMON VARIABLES WILL BE STORED HERE. THAT ARE ACCESSIBLE IN WHOLE APP.
*/

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {env} from '../env';

// EXPORT GLOBAL VARIABLES TO THE APPLICATION.
export const globals: any = {
	siteVariables: [], // LIST OF SITE VARIABLES FORM SITEVARIABLE TABLE.
	messages: [], // LIST OF SITE MESSAGES FORM MESSAGE TABLE.
	languages: [], // LIST OF AVAILABLE LANGUAGES.
	socket: null, // SOCKET.IO OBJECT TO BE USED IN THE APP.
	appVersion: '1.0.0', // CURRENT APP VERSION.
	lastUpdated: 'Dec 17', // WHEN WAS THIS APP UPDATED.
};

// THIS FUNCTION WILL RECEIVE VARIABLES FROM SITE VARIABLE OR FROM LOCAL STORAGE. IT WILL SET THE GLOBAL
// VARIABLES SO THEY CAN BE USED IN APP.
export const setGlobalVariables = (data: any) =>
{
	globals.siteVariables = data.siteVariables; // STORE THE SITE VARIABLES INTO GLOBAL VARIABLE.
	globals.messages = data.messages; // STORE THE SITE MESSAGES INTO GLOBAL VARIABLE.
	globals.languages = data.languages; // STORE THE LANGUAGES INFORMATION INTO GLOBAL VARIABLE.
};

// HANDLES THE STORAGE OF GLOBAL VARIABLES
export const updateSiteVariables = async (language_id: string) =>
{
	let dataToSend = {language_id: language_id};
	const staticData = await axios.get(env.api_url + 'app/staticdata', {
		params: dataToSend,
	});
	setGlobalVariables(staticData.data);
	let dataString = JSON.stringify(staticData.data);
	AsyncStorage.setItem('lk_static_data', dataString);
};
