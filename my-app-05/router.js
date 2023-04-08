import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";
import HomeScreen from "./Screens/Main/HomeScreen";

const Navigation = () =>{
  return (
  <MainStack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
    <MainStack.Screen name='Login' component={LoginScreen}/>
    <MainStack.Screen name='Registration' component={RegistrationScreen}/>
    <MainStack.Screen name='Home' component={HomeScreen}/> 
    <MainStack.Screen name='CreatePostsScreen' component={CreatePostsScreen}/> 
    <MainStack.Screen name='ProfileScreen' component={ProfileScreen}/> 
  </MainStack.Navigator>
);
};

export default Navigation;