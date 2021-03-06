import {Button, NativeModules, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import FocusAwareStatusBar from 'libs/react-navigation/FocusAwareStatusBar';
import {Header} from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const {StatusBarManager} = NativeModules;
const Home = (props: StackScreenProps<{}>) => {
  const navigation = useNavigation();
  useEffect(() => {}, [1]);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView>
        <Button
          title="去登录"
          onPress={() => {
            navigation.navigate('auth');
          }}></Button>
      </SafeAreaView>
    </View>
  );
};

export default Home;
