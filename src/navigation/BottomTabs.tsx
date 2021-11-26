import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Tab1Navigation } from './Tab1Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Navigation } from './Tab2Navigation';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D5',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.85)',
          paddingBottom: (Platform.OS === 'ios') ? 0 : 10,
          borderWidth: 0,
          elevation: 0,
          height: (Platform.OS === 'ios') ? 70 : 80,
        },
        headerShown: false
      }}
    >
      <Tab.Screen name="NavigationScreen" component={Tab1Navigation} options={{
        tabBarLabel: 'List',
        tabBarIcon: ({ color }) => <Icon color={color} size={25} name='list-outline' />
      }} />
      <Tab.Screen name="SearchScreen" component={Tab2Navigation} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => <Icon color={color} size={25} name='search-outline' />
      }}/>
    </Tab.Navigator>
  );
}