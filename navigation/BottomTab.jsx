import { Text, View, StyleSheet } from 'react-native';
import  Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import React from 'react';
import Home from '../components/Home';
import User from '../components/User';
import Cart from '../components/Cart';
import ListTop from '../components/ListTop';


function tabIcon(iconName) {
  return {
    tabBarIcon: ({ color }) => <Ionicons name={iconName} size={30} color={color} />
  }
}

function BottomTab() {
  const Tab = createBottomTabNavigator();
  const orderCount = useSelector(state => state.orderCount);
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1890ff',
        inactiveTintColor: '#999',
      }}
    >
    <Tab.Screen
      name="Home"
      component={Home}
      options={tabIcon('ios-home')}
    ></Tab.Screen>
    <Tab.Screen
      name="List"
      component={ListTop}
      options={tabIcon('ios-list')}
    ></Tab.Screen>
    <Tab.Screen
      name="Cart"
      component={Cart}
      options={
        {
          ...tabIcon('ios-cart'),
          tabBarBadge: orderCount === 0 ? null : orderCount
        }}
    ></Tab.Screen>
    <Tab.Screen
      name="User"
      component={User}
      options={tabIcon('ios-person')}
    ></Tab.Screen>
    </Tab.Navigator>
  );
}

export default BottomTab;
