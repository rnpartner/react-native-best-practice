import React, {PureComponent} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Me from '@screens/me'
import Contacts from '@screens/contacts'
import HomeNavigator from '@navigations/home'

const Tab = createBottomTabNavigator()

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeNavigator}></Tab.Screen>
      <Tab.Screen name="me" component={Me}></Tab.Screen>
      <Tab.Screen name="contacts" component={Contacts}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default MainNavigator
