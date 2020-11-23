import React, {PureComponent} from 'react';

import AssetsNavigator from './assets';
import EcologyNavigator from './ecology';
import HomeNavigator from './home';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import MeNavigator from './me';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homestack"
        component={HomeNavigator}
        options={{
          title: '首页',
          tabBarIcon: (props) => <Icon name="home-outline" {...props} />,
        }}
      />
      <Tab.Screen
        name="assetsstack"
        component={AssetsNavigator}
        options={{
          title: '资产',
          tabBarIcon: (props) => <Icon2 name="attach-money" {...props} />,
        }}
      />
      <Tab.Screen
        name="ecologystack"
        component={EcologyNavigator}
        options={{
          title: '生态',
          tabBarIcon: (props) => (
            <Icon name="ios-cloud-circle-outline" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="mestack"
        component={MeNavigator}
        options={{
          title: '我的',
          tabBarIcon: (props) => <Icon name="ios-person-outline" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
