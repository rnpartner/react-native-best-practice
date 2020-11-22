import React, {useState} from 'react';

import Ecoloy from '@screens/ecology';
import {createStackNavigator} from '@react-navigation/stack';

const EcologyStack = createStackNavigator();

const EcologyNavigator = () => (
  <EcologyStack.Navigator>
    <EcologyStack.Screen
      name="ecology"
      component={Ecoloy}
      options={{title: '生态'}}
    />
  </EcologyStack.Navigator>
);

export default EcologyNavigator;
