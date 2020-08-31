import React, {PureComponent} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {Text} from 'react-native'
import HomeNavigator from '@navigations/home'
import AuthNavigtor from '@navigations/auth'

const App2 = () => (
  <NavigationContainer>
    {true ? <HomeNavigator></HomeNavigator> : <AuthNavigtor></AuthNavigtor>}
  </NavigationContainer>
)

export default App2
