import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import useCachedResources from './hooks/useCachedResources';
import DrinksScreen from './screens/DrinksScreen';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button, Linking } from 'react-native';
import * as Font from 'expo-font'
import {useState} from 'react';
import {AppLoading} from 'expo'

import FilterScreen from './screens/FilterScreen';
const Stack = createStackNavigator();






export default function App({navigation, props}) {
  
  function filterBtn(){
    return(
      navigation.navigate('FilterScreen')
    )
  }
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Drinks"  component={DrinksScreen}  options={{ headerShown: true}}/>
          <Stack.Screen name="FilterScreen"  component={FilterScreen}  options={{ headerShown: true}}/>
        </Stack.Navigator>
        </NavigationContainer>
    );
  }
}



const styles = StyleSheet.create({
 info:{
   width:25,
   height:25,
   marginRight:25
 }
  
});
