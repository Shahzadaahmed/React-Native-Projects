import React from 'react';
import Route from './Routes';
import {useEffect} from 'react';
import {LogBox, Platform, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Store from './app/redux/root.store';
import FlashMessage from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setGlobalVariables, updateSiteVariables} from './app/utils/globals';
const App = () =>
{
	// GET THE STATIC DATA FROM LOCAL STORAGE. FOR EXAMPLE, SITE VARIABLE, MESSAGES, ETC.
	const getStaticDataFromLocalStorage = async () =>
	{
		// PICK THE GLOBAL VARIABLES FROM LOCAL STORAGE.
		AsyncStorage.getItem('lk_static_data').then(staticData =>
		{
			// IF WE GOT THE DATA FROM LOCAL STORAGE, THEN SET THE GLOBAL VARIABLES.
			if (staticData)
			{
				let lkStaticData = JSON.parse(staticData); // TBD

				// IF LOCALLY STORED DATA HAS SOME VALUES, THEN SET THE GLOBAL VARIABLES.
				if (Object.keys(lkStaticData).length > 0)
				{
					console.log(
						'site variables loaded from local storage. ',
						Object.keys(lkStaticData.siteVariables).length,
					);
					setGlobalVariables(staticData);
				}
			}
		});
	};
	const loadStaticData = async () =>
	{
		// GET LANGUAGE ID FROM ASYNC STORAGE.
		const language_id = await AsyncStorage.getItem('language');

		// THE LANGUAGES BY API, THEN SHOW THE LANGUAGE PICKER SCREEN TO USER. WHEN THE SELECT A LANGUAGE THEN GET
		// THE STATIC DATA FROM THE SERVER.
		if (language_id)
		{
			await updateSiteVariables(language_id);
		}
	};
	useEffect(() =>
	{
		LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

		// LOAD STATIC DATA FROM LOCAL STORAGE.
		getStaticDataFromLocalStorage();
		loadStaticData();
	}, []);

	// TODO: LOAD THE ROUTES ONLY WHEN THE STATIC DATA IS READY.
	return (
		<Provider store={Store}>
			<Route />
			<FlashMessage position="top" floating={true} />
		</Provider>
	);
};

export default App;
