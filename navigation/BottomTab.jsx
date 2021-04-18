import { Text, View, StyleSheet } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import Home from '../components/Home';
import User from '../components/User';
import Cart from '../components/Cart';
import List from '../components/List';

function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          switch(route.name) {
            case 'Home':
              iconName = 'ios-home';
              break;
            case 'List':
              iconName = 'ios-list';
              break;
            case 'Cart':
              iconName = 'ios-cart';
              break;
            case 'User':
              iconName = 'ios-person';
              break;
          }
          return(
            <Ionicons 
              name={iconName}
              size={30}
              color={color}
            />
          );
        }
      })}
      tabBarOptions={{
        activeTintColor: '#23b8ff',
        inactiveTintColor: '#999',
      }}
    >
    <Tab.Screen
      name="Home"
      component={Home}
    ></Tab.Screen>
    <Tab.Screen
      name="List"
      component={List}
    ></Tab.Screen>
    <Tab.Screen
      name="Cart"
      component={Cart}
    ></Tab.Screen>
    <Tab.Screen
      name="User"
      component={User}
    ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTab;
