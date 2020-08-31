import React, {PureComponent} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '@screens/home'
import Me from '@screens/me'
import Contacts from '@screens/contacts'

const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home}></Tab.Screen>
      <Tab.Screen name="me" component={Me}></Tab.Screen>
      <Tab.Screen name="contacts" component={Contacts}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default HomeNavigator
