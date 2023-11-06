import React, {FC} from 'react';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HangingOut from '../components/hangingout/hangingout.component';
import More from '../components/more/more.component';

const Stack = createNativeStackNavigator();

const MoreTabStack: FC = ({navigation, route}:any) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Hangout"){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    }
}, [navigation, route]);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="Hangout" component={HangingOut} />
    </Stack.Navigator>
  );
}

export default MoreTabStack;
