import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../components/cart/cart.component';

const Stack = createNativeStackNavigator();
const CartStack: FC = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default CartStack;
