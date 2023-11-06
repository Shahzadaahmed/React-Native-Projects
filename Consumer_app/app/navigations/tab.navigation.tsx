import React, {useEffect, FC} from 'react';
import {View, StyleSheet, Image, Platform, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../common';
import DummyScreen from '../Screens/DummyScreen';
import HomeStack from './home.stack';
import {actuatedNormalize, Fonts, Svgs} from '../utils';
import MoreTabStack from './moreTab.stack';
import More from '../components/more/more.component';
import CartStack from './cart.stack'
import MoreStack from './more.stack'

const Tab = createBottomTabNavigator();

const TabNavigator: FC = () => 
{
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: theme.colors.active,
        tabBarInactiveTintColor: theme.colors.lightGray,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 5 : 0,
          backgroundColor: theme.colors.white,
          borderTopColor: '#00000046',
          borderTopWidth: 1
        },
        headerShown: false,
        tabBarLabel: () =>
        {
          return null;
        },
        tabBarIcon: ({focused, color, size}) => 
        {
          if (route.name === 'HomeStack') 
          {
            return (
              <View style={styles.alignCenter}>
                {focused ?
                  <Svgs.activeHomeTab width={26} height={26} />
                  :
                  <Svgs.HomeIcon width={26} height={26} />
                }
                <Text style={{...styles.text, color: focused ? theme.colors.active : theme.colors.lightGray}}>Home</Text>
              </View>
            );
          }
          if (route.name === 'FavouriteStack') 
          {
            return (
              <View style={styles.alignCenter}>
                <Svgs.favTab width={26} height={26} />
                <Text style={{...styles.text, color: focused ? theme.colors.active : theme.colors.lightGray}}>Favourites</Text>
              </View>
            );
          }
          else if (route.name === 'CartStack') 
          {
            return (
              <View style={styles.alignCenter}>
                {focused ?
                  <Svgs.activeCartTab width={26} height={26} />
                  :
                  <Svgs.cartTab width={26} height={26} />

                }
                <Text style={{...styles.text, color: focused ? theme.colors.active : theme.colors.lightGray}}>Cart</Text>
              </View>
            );
          }
          else if (route.name === 'OrderStack') 
          {
            return (
              <View style={styles.alignCenter}>
                <Svgs.orderTab width={26} height={26} />
                <Text style={{...styles.text, color: focused ? theme.colors.active : theme.colors.lightGray}}>Orders</Text>
              </View>
            );
          }
          else if (route.name === 'MoreStack') 
          {
            return (
              <View style={styles.alignCenter}>
                {focused ?
                  <Svgs.ActiveMoreTab width={26} height={26} />
                  :
                  <Svgs.moreTab width={26} height={26} />
                }
                <Text style={{...styles.text, color: focused ? theme.colors.active : theme.colors.lightGray}}>More</Text>
              </View>
            );
          }
        },

      })}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="FavouriteStack" component={DummyScreen} />
      <Tab.Screen name="CartStack" component={CartStack} />
      <Tab.Screen name="OrderStack" component={DummyScreen} />
      <Tab.Screen name="MoreStack" component={MoreStack} options={{unmountOnBlur: true}} />
    </Tab.Navigator>
  );
}

export default TabNavigator;

const styles = StyleSheet.create({
  alignCenter:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:
  {
    fontSize: actuatedNormalize('12'),
    fontFamily: Fonts.Regular,
    textAlign: 'center'
  }
});