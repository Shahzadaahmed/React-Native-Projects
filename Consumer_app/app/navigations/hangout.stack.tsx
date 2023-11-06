import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HangingOut from '../components/hangingout/hangingout.component';
import HostPage from '../components/hangingout/hostpage.view';
import DishPage from '../components/hangingout/dishpage.view';
const Stack = createNativeStackNavigator();

const HangoutStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Hangout" component={HangingOut} />
      <Stack.Screen name="HostPage" component={HostPage}/>
      <Stack.Screen name="DishPage" component={DishPage} />
    </Stack.Navigator>
  );
}

export default HangoutStack;
