import {
  Button,
  NativeModules,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import FocusAwareStatusBar from 'libs/react-navigation/FocusAwareStatusBar';
import {Header} from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Assets = (props: StackScreenProps<{}>) => {
  const navigation = useNavigation();
  useEffect(() => {}, [1]);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView></SafeAreaView>
    </View>
  );
};

const useTimeout = (time: Number) => {
  const [isDone, setIsDone] = useState(false);
  useEffect(() => {
    const tim = setTimeout(() => {
      console.log('已经过了：', time);
      setIsDone(!isDone);
    }, time);
    return () => {
      clearTimeout(tim);
    };
  });
  return isDone;
};

export default Assets;
