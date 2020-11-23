import {FlatList, Image, ListRenderItemInfo} from 'react-native';
import {Icon, ListItem} from 'react-native-elements';
import React, {Component} from 'react';

import EtherToken from '@model/token';

type Props = {
  tokens: EtherToken[];
};

const AssetsPage = (props: Props) => {
  const {tokens} = props;
  return (
    <FlatList
      data={tokens}
      renderItem={renderItem}
      keyExtractor={(token) => token.symbol}
    />
  );
};

const renderItem = (info: ListRenderItemInfo<EtherToken>) => {
  const {item: token, index} = info;
  const {symbol, icon} = token;
  const leftIcon = icon ? (
    <Image source={icon} />
  ) : (
    <Icon name="dollar" type="font-awesome" />
  );
  return <ListItem leftIcon={leftIcon} title={symbol} bottomDivider />;
};

export default AssetsPage;
