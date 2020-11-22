import React, {useState} from 'react'
import {View, Text} from 'react-native'
import {generateWallet} from '@logic/ether'
const Login = () => {
  generateWallet()
  return (
    <View>
      <Text>登录页面</Text>
    </View>
  )
}

export default Login
