import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

import FocusAwareStatusBar from '@libs/react-navigation/FocusAwareStatusBar';

const Me = () => (
  <View>
    <FocusAwareStatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle="dark-content"
    />
    <Text>我的</Text>
  </View>
);

export default Me;
