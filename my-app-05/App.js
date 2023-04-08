import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import Navigation from "./router";

export default function App() {
  
  return (
    <NavigationContainer>
          <Navigation/>         
      </NavigationContainer>
  );
}