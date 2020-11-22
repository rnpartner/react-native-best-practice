import React, {useState} from 'react';

import Login from '@screens/login/index';
import Register from '@screens/register/index';
import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator mode={'modal'}>
    <AuthStack.Screen
      name="login"
      component={Login}
      options={{headerShown: false}}></AuthStack.Screen>
    <AuthStack.Screen name="register" component={Register}></AuthStack.Screen>
  </AuthStack.Navigator>
);

export default AuthNavigator;
