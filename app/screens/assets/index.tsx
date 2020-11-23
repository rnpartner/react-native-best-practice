import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {queryAISBalance, queryEtherBalance} from '@works/ether/transaction';

import AssetsPage from './components/AssetsPage';
import {Button} from 'react-native-elements';
import EtherToken from '@model/token';
import {FakeTokens} from '@works/FakeTokens';
import FocusAwareStatusBar from '@libs/react-navigation/FocusAwareStatusBar';
import MyWallet from '@model/wallet';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {StackScreenProps} from '@react-navigation/stack';
import styles from './styles';
import {tokensTracking} from '@works/ether/balances';
import {useNavigation} from '@react-navigation/native';

interface Props {
  wallets: MyWallet[];
}

const Assets = (props: Props) => {
  const {wallets} = props;
  const navigation = useNavigation();
  useEffect(() => {}, [1]);
  return (
    <View style={styles.container}>
      <FocusAwareStatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <AssetsPage tokens={tokensTracking} />
      {/* <ScrollableTabView>{wallets.map((token) => {})}</ScrollableTabView> */}
    </View>
  );
};

export default Assets;
