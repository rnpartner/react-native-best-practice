import React, {PureComponent} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import RootNavigator from '@navigations/root'

const App = () => (
  <NavigationContainer>
    <RootNavigator></RootNavigator>
  </NavigationContainer>
)

export default App
