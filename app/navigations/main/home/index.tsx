import React, {useState} from 'react';

import Home from '@screens/home';
import {createStackNavigator} from '@react-navigation/stack';

const HomeStack = createStackNavigator();

const HomeNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="home" component={Home} options={{title: '首页'}} />
  </HomeStack.Navigator>
);

export default HomeNavigator;
