import React, {useState} from 'react';

import Me from '@screens/me';
import {createStackNavigator} from '@react-navigation/stack';

const MeStack = createStackNavigator();

const MeNavigator = () => (
  <MeStack.Navigator
    screenOptions={{
      headerStyle: {shadowOffset: {width: 0, height: 0}, elevation: 0},
    }}>
    <MeStack.Screen name="me" component={Me} options={{title: '我的'}} />
  </MeStack.Navigator>
);

export default MeNavigator;
