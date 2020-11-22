import React, {useState} from 'react';

import Me from '@screens/me';
import {createStackNavigator} from '@react-navigation/stack';

const MeStack = createStackNavigator();

const MeNavigator = () => (
  <MeStack.Navigator>
    <MeStack.Screen name="me" component={Me} options={{title: '我的'}} />
  </MeStack.Navigator>
);

export default MeNavigator;
