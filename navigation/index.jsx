import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet } from 'react-native';
import * as React from 'react';
import BottomTab from './BottomTab';
import Details from './Details';
import Pay from './Pay';
import Log from './Log';
import HomeTitle from '../components/HomeTitle';



export default function Navigation() {
  const Stack = createStackNavigator();
  const headerTitleStyle = { fontSize: 22 };
  return (
    <NavigationContainer fallback={<Text>Loaing...</Text>}>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen
          name='Main'
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
            headerTitleStyle,
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name='Pay'
          component={Pay} 
          options={{
            headerTitle: 'Payment',
            headerTitleStyle,
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name='Log'
          component={Log} 
          options={{
            headerTitle: 'User Log',
            headerTitleStyle,
            headerBackTitle: 'Back'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  }
});