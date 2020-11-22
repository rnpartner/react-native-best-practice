import '@ethersproject/shims'
import {ethers, Wallet} from 'ethers'
import '../../shim'
import crypto from 'crypto'

export const generateWallet = () => {
  const wallet = Wallet.createRandom()
  const password = '12345678'
  const mnemonic = wallet.mnemonic
  console.log('助记词为：', mnemonic)
  console.log('钱包地址：', wallet.address)
  console.log('私钥：', wallet.privateKey)
  console.log('公钥：', wallet.publicKey)
  const json = wallet.encrypt(password, {
    // The number must be a power of 2 (default: 131072)
    scrypt: {N: 64},
  })
  console.log('获取到的钱包数据:', json)
}
