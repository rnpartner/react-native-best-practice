import AuthNavigator from '@navigations/auth';
import MainNavigator from '@navigations/main';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="main"
        component={MainNavigator}
        options={{headerShown: false}}
      />
      <RootStack.Screen name="auth" component={AuthNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
