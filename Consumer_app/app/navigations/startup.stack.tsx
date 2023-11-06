import React, {FC, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Language from '../components/startup/language.component';
import Login from '../components/startup/login.component';
import useStorage from '../utils/useStorage';
import IntroSlider from '../Screens/IntroSlider';

const Stack = createNativeStackNavigator();
const StartupStack: FC = () =>
{
	// GETTING LANGUAGE FROM ASYNC STORAGE
	const [language] = useStorage('language');
	return (
        <NavigationContainer>
		<Stack.Navigator screenOptions={{headerShown: false}} >
			 <Stack.Screen
				name="language"
				component={Language}
				options={{gestureEnabled: false}}
			/> 
			<Stack.Screen
				name="login"
				component={Login}
				options={{gestureEnabled: false}}
			/>
            <Stack.Screen name="Slider" component={IntroSlider} options={{ gestureEnabled: false }} />

		</Stack.Navigator>
        </NavigationContainer>
	);
}

export default StartupStack;
