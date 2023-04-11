import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

import LoginScreen from "./Screens/Auth/LoginScreen";
import RegistrationScreen from "./Screens/Auth/RegistrationScreen";
import HomeScreen from "./Screens/Main/HomeScreen";
import CreatePostsScreen from "./Screens/Main/CreatePostsScreen";
import ProfileScreen from "./Screens/Main/ProfileScreen";
import MapScreen from "./Screens/NestedScreens/MapScreen";
import CommentsScreen from "./Screens/NestedScreens/CommentsScreen";
import CreatePhoto from "./components/CreatePhoto";

const Navigation = () =>{
  return (
  <MainStack.Navigator initialRouteName='Login' 
  // screenOptions={{headerShown: false}}
  >
    <MainStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
    <MainStack.Screen name='Registration' component={RegistrationScreen} options={{ headerShown: false }}/>
    <MainStack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/> 
    <MainStack.Screen name='CreatePostsScreen' component={CreatePostsScreen} options={{ headerShown: false }}/> 
    <MainStack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }}/> 
    <MainStack.Screen name='Map' component={MapScreen} options={{ headerShown: true }}/> 
    <MainStack.Screen name='Comments' component={CommentsScreen} options={{ headerShown: true }}/> 
    <MainStack.Screen name='CreatePhoto' component={CreatePhoto} options={{ headerShown: true }}/> 
  </MainStack.Navigator>
);
};

export default Navigation;