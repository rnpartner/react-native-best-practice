import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
const RootStack = createStackNavigator()
import MainNavigator from '@navigations/main'
import AuthNavigator from '@navigations/auth'

// 助记词为： {"locale": "en", "path": "m/44'/60'/0'/0/0", "phrase": "reason cool jazz differ arrow cause fault clerk dinner broccoli broom express"}
// 钱包地址： 0x1c8e0bfA24A7CF88E2d55C29b6634fbad82D38D0
// 私钥： 0xb5a6a7ae7d0a900fb1dcf724d14265ae8c13cdecd5fb5eeb0eb60a26585d5357
// 公钥： 0x04e59aac1aa86bc911edc5ed62db98bc0b2605cb0fa88090fafb38d555c6ef99aea80884c8c133b79a84c656e6284227a741108b575c15a5bce2a207fffca6db21

const RootNavigator = () => {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Main"
        component={MainNavigator}></RootStack.Screen>
      <RootStack.Screen
        name="Auth"
        component={AuthNavigator}></RootStack.Screen>
    </RootStack.Navigator>
  )
}

export default RootNavigator
