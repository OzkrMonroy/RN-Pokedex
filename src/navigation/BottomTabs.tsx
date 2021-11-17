import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { SearchScreen } from '../screens/searchScreen/SearchScreen';
import { StackNavigation } from './StackNavigation';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Tab.Screen name="NavigationScreen" component={StackNavigation} options={{
        tabBarLabel: 'List',
        tabBarIcon: ({ color }) => <Icon color={color} size={25} name='list-outline' />
      }} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => <Icon color={color} size={25} name='search-outline' />
      }}/>
    </Tab.Navigator>
  );
}