import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './src/screen/HomeScreen';
import FavScreen from './src/screen/FavScreen';
import CartScreen from './src/screen/CartScreen';
import Profile from './src/screen/Profile';

const Tab = createMaterialBottomTabNavigator();


const App = () => {
 
  return (
  <NavigationContainer>
     <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#CAD5E2',
        }}
        barStyle={{ backgroundColor: '#fff' }}
     >
      <Tab.Screen 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color='#000' size={26} />
        ),}}
      name="Home" component={HomeScreen} />
      <Tab.Screen name="Fav" component={FavScreen} 
      options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="heart" color='#000' size={26} />
        ),}}
      />
      <Tab.Screen name="Cart" component={CartScreen} 
       options={{
        tabBarLabel: 'Cart',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="cart-minus" color='#000' size={26} />
        ),}}
      />
      <Tab.Screen name="Profile" component={Profile} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="emoticon-cool-outline" color='#000' size={26} />
          ),}}
      />
    </Tab.Navigator>
  </NavigationContainer>

  );
};


export default App;
