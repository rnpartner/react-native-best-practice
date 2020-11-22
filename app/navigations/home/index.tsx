import React, {useState} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '@screens/home'

const HomeStack = createStackNavigator()

const HomeNavigator = () => (
  <HomeStack.Navigator mode={'modal'}>
    <HomeStack.Screen name="Home" component={Home}></HomeStack.Screen>
  </HomeStack.Navigator>
)

export default HomeNavigator
