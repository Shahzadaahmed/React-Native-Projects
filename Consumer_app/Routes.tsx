import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './app/Screens/SplashScreen';
import IntroSlider from './app/Screens/IntroSlider';
import consumerLogin from './app/Screens/consumerLogin';
import Language from './app/components/startup/language.component';
import loginComponent from './app/components/startup/login.component';
import verifyotpComponent from './app/components/startup/verifyotp.component';
import Home from './app/Screens/HomeScreen';
import HomeArabic from './app/Screens/HomeArabic';
import termsComponent from './app/components/startup/terms.component';
import policyComponent from './app/components/startup/policy.component';
import CountriesList from './app/components/startup/countrieslist.component';
import { navigationRef } from './app/navigations/root.navigation';
import TabNavigator from './app/navigations/tab.navigation';
// import inviteFriendComponent from './app/Screens/inviteFriend';
const Stack = createStackNavigator();

const Route = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Slider" component={IntroSlider} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Language" component={Language} options={{ gestureEnabled: false }} />
        <Stack.Screen name="loginComponent" component={loginComponent} options={{ gestureEnabled: false }} />
        <Stack.Screen name="CountriesList" component={CountriesList} options={{ gestureEnabled: false }} />
        <Stack.Screen name="verifyotpComponent" component={verifyotpComponent} options={{ gestureEnabled: false }} />
        <Stack.Screen name="profileSetup" component={consumerLogin} options={{ gestureEnabled: false }} />
        <Stack.Screen name="Logout" component={TabNavigator}  />
        <Stack.Screen name="LogoutArabic" component={HomeArabic} options={{ gestureEnabled: false }} />
        <Stack.Screen name="termsComponent" component={termsComponent} options={{ gestureEnabled: false, headerShown: true ,headerTitle: 'Terms & Conditions'  }}  />
        <Stack.Screen name="policyComponent" component={policyComponent} options={{ gestureEnabled: false, headerShown: true, headerTitle: 'Policy',headerBackTitle: 'Back' }}  />
        {/* <Stack.Screen name="inviteFriendComponent" component={inviteFriendComponent} options={{ gestureEnabled: false, headerShown: true, headerTitle: 'Policy',headerBackTitle: 'Back' }}  /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;