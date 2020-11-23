import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {queryAISBalance, queryEtherBalance} from 'works/ether/transaction';

import {Button} from 'react-native-elements';
import FocusAwareStatusBar from 'libs/react-navigation/FocusAwareStatusBar';
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
      <SafeAreaView>
        <Button
          onPress={async () => {
            try {
              const ether = await queryEtherBalance();
              const ais = await queryAISBalance();
              console.log('资产', ether, ais);
            } catch (error) {
              console.log('账户资产查询失败', error);
            }
          }}
        />
      </SafeAreaView>
    </View>
  );
};

export default Assets;
