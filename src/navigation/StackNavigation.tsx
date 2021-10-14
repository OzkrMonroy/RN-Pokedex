import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}>
        <Stack.Screen name='HomeScreen' component={HomeScreen}/>
        <Stack.Screen name='PokemonScreen' component={PokemonScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
