import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import GetStarted from '../screens/GetStarted';
import Map from '../screens/Map';
import Card from '../screens/Card';

const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <MainStack.Screen name="Card" component={Card} />
    <MainStack.Screen name="Map" component={Map} />
    <MainStack.Screen name="Home" component={Home} />
    <MainStack.Screen name="GetStarted" component={GetStarted} />
  </MainStack.Navigator>
);
