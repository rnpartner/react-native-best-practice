import React, {PureComponent} from 'react';

import AssetsNavigator from './assets';
import EcologyNavigator from './ecology';
import HomeNavigator from './home';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {IconProps} from 'react-native-vector-icons/Icon';
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
          tabBarIcon: (props) => {
            return <TabbarIcon name="home-outline" {...props} />;
          },
        }}
      />
      <Tab.Screen
        name="assetsstack"
        component={AssetsNavigator}
        options={{
          title: '资产',
          tabBarIcon: (props) => {
            return <TabbarIcon name="attach-money" {...props} isIcon2={true} />;
          },
        }}
      />
      <Tab.Screen
        name="ecologystack"
        component={EcologyNavigator}
        options={{
          title: '生态',
          tabBarIcon: (props) => (
            <TabbarIcon name="ios-cloud-circle-outline" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="mestack"
        component={MeNavigator}
        options={{
          title: '我的',
          tabBarIcon: (props) => (
            <TabbarIcon name="ios-person-outline" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const tabs = [{title: '资产', iconName: 'attach-money', icon2: true}];

const TabbarIcon = (props: any & {isIcon2?: boolean}) => {
  const {isIcon2} = props;
  const MIcon = isIcon2 ? Icon2 : Icon;
  return <MIcon {...props} />;
};

export default MainNavigator;
