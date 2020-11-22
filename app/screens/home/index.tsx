import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  NativeModules,
  Button,
} from 'react-native';
import styles from './styles/homeContainer';
import {Header} from 'react-native-elements';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import FocusAwareStatusBar from 'libs/react-navigation/FocusAwareStatusBar';

const {StatusBarManager} = NativeModules;
const Home = (props: StackScreenProps<{}>) => {
  const navigation = useNavigation();
  useEffect(() => {}, [1]);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"></FocusAwareStatusBar>
      <Header
        centerComponent={<Text>介绍介绍</Text>}
        onLayout={(event) => {
          console.log('Header height: ', event.nativeEvent.layout.height);
          console.log(StatusBarManager);
        }}></Header>
      <SafeAreaView>
        <Text>主页面</Text>
        <Text>主页面</Text>
        <Button
          title="去登录"
          onPress={() => {
            navigation.navigate('Auth');
          }}></Button>
      </SafeAreaView>
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

export default Home;
