import {Avatar, Card, CardProps, Icon, ListItem} from 'react-native-elements';
import {FlatList, Text, View} from 'react-native';
import React, {PureComponent} from 'react';

import FocusAwareStatusBar from '@libs/react-navigation/FocusAwareStatusBar';
import {ScrollView} from 'react-native-gesture-handler';
import {screenContainerStyle} from '@resource/styles';

const SettingCard = (props: CardProps | any) => {
  return (
    <Card
      containerStyle={{
        borderRadius: 10,
        overflow: 'hidden',
        padding: 0,
      }}
      {...props}
    />
  );
};

const Me = () => (
  <View style={screenContainerStyle}>
    <FocusAwareStatusBar
      translucent={true}
      backgroundColor="transparent"
      barStyle="dark-content"
    />
    <ScrollView>
      <SettingCard>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            title="DK"
            rounded
            size="large"
            containerStyle={{
              backgroundColor: '#8ace70',
              margin: 10,
              padding: 3,
            }}
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/1200px-Ethereum-icon-purple.svg.png',
            }}
          />
          <Text style={{fontSize: 16}}>混世大魔王</Text>
        </View>
      </SettingCard>

      <SettingCard>
        <ListItem
          chevron={true}
          bottomDivider={true}
          title="挖矿奖励"
          leftIcon={<Icon name="gift" type="font-awesome" />}
        />

        <ListItem
          chevron={true}
          bottomDivider={true}
          title="邀请好友"
          leftIcon={<Icon name="paper-plane-o" type="font-awesome" />}
        />
        <ListItem
          chevron={true}
          bottomDivider={true}
          title="我的社区"
          leftIcon={<Icon name="heartbeat" type="font-awesome" />}
        />
      </SettingCard>

      <SettingCard>
        <ListItem
          chevron={true}
          title="联系客服"
          leftIcon={<Icon name="headset-mic" type="material" />}
        />
        <ListItem
          topDivider={true}
          chevron={true}
          title="系统公告"
          leftIcon={<Icon name="bell-o" type="font-awesome" />}
        />
      </SettingCard>

      <SettingCard>
        <ListItem
          bottomDivider={true}
          title="设置"
          chevron={true}
          leftIcon={<Icon name="gear" type="font-awesome" />}
        />
        <ListItem
          title="关于"
          chevron={true}
          leftIcon={<Icon name="info" type="font-awesome" />}
        />
      </SettingCard>

      <View style={{height: 20}} />
    </ScrollView>
  </View>
);

export default Me;
