import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import Startup from './app/components/startup/startup.component';
import Language from './app/components/startup/language.component';



const Stack = createStackNavigator ();

const Route = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="loginComponent"
        screenOptions={{ headerShown: false }}
        >
        <Stack.Screen
          name="Startup"
          component={Startup}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="VerifyOtp" component={verifyotpComponent} />

        <Stack.Screen name="loginComponent" component={loginComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;