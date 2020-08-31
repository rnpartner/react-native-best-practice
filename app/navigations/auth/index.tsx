import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '@screens/login/index'
import Register from '@screens/register/index'
const AuthStack = createStackNavigator()

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="login" component={Login}></AuthStack.Screen>
    <AuthStack.Screen name="register" component={Register}></AuthStack.Screen>
  </AuthStack.Navigator>
)

export default AuthNavigator
