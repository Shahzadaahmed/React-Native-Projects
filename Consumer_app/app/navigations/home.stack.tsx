import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../components/home/home.component';
import Charity from '../components/charity/charity.component';
import PickLocation from '../components/picklocation/location.component';
import Restaurants from '../components/restaurants/restaurant.component';
import Vendors from '../components/vendors/vendors.component'
import HangoutStack from './hangout.stack';
import InformationSheetView from '../components/vendors/vendors.InformationView'
import Notification from '../components/notification/notification.component';
import Search from '../components/search/search.component';
import HostPage from '../components/restaurants/hostpage.view';
import DishPage from '../components/restaurants/dishpage.view';
import SpecialOrder from '../components/special_order/special_order.component'
import WeekPlan from '../components/special_order/week.plan';
import FoodList from '../components/special_order/foodlist.view';

const Stack = createNativeStackNavigator();

interface Props
{
  navigation: any,
  route: any
}

const HomeStack = (props: Props) => {

    const {navigation, route} = props;
    React.useLayoutEffect(() => {
      const tabHiddenRoutes: Array<any> = ["NotificationScreen","CharityScreen","Vendors","RestaurantsScreen","PickLocation","HangoutStack","SearchScreen","RestaurantHostpage","RestaurantDishpage","SpecialOrder","WeekPlan","FoodList"];
      if(tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))){
        navigation.setOptions({tabBarStyle: {display: 'none'}});
       } else {
       navigation.setOptions({tabBarStyle: {display: 'flex'}});
      }
  }, [navigation, route]);


  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="NotificationScreen" component={Notification} />
      <Stack.Screen name="CharityScreen" component={Charity} />
      <Stack.Screen name="Vendors" component={Vendors} />
      <Stack.Screen name="RestaurantsScreen" component={Restaurants}/>
      <Stack.Screen name="PickLocation" component={PickLocation} />
      <Stack.Screen name="HangoutStack" component={HangoutStack} />
      <Stack.Screen name="InformationSheetView" component={InformationSheetView} />
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="RestaurantHostpage" component={HostPage} />
      <Stack.Screen name="RestaurantDishpage" component={DishPage} />
      <Stack.Screen name="SpecialOrder" component={SpecialOrder} />
      <Stack.Screen name="WeekPlan" component={WeekPlan}/>
      <Stack.Screen name="FoodList" component={FoodList} />
    </Stack.Navigator>
  );
}

export default HomeStack;
