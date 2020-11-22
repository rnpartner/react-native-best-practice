import React, {useState} from 'react';

import Assets from '@screens/assets';
import {createStackNavigator} from '@react-navigation/stack';

const AssetsStack = createStackNavigator();

const AssetsNavigator = () => (
  <AssetsStack.Navigator>
    <AssetsStack.Screen
      name="assets"
      component={Assets}
      options={{title: '资产'}}
    />
  </AssetsStack.Navigator>
);

export default AssetsNavigator;
