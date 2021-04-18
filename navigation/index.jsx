import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import BottomTab from './BottomTab';
import Details from './Details';
import Pay from './Pay';

import HomeTitle from '../components/HomeTitle';



export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={BottomTab}
          options={{
            headerTitle: () => (<HomeTitle source={require('../assets/genshin.png')} />)
          }}
        />
        <Stack.Screen
          name='Details'
          component={Details} 
          options={{
            headerTitle: 'Details',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name='Pay'
          component={Pay} 
          options={{
            headerTitle: 'Payment',
            headerBackTitle: 'Back'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
