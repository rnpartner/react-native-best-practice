import '@ethersproject/shims';
import '../../shim';

import {ProgressCallback} from 'ethers/lib/utils';
import {Wallet} from 'ethers';
import {randomBytes} from 'react-native-crypto';

const secureEntropy = () => {
  return new Promise<Uint8Array>((resolve, reject) => {
    randomBytes(16, (error, entropy) => {
      if (error) {
        reject(error);
      } else {
        resolve(entropy);
      }
    });
  });
};

export const generateWallet = async () => {
  const extraEntropy = await secureEntropy();
  const wallet = Wallet.createRandom({extraEntropy});
  if (__DEV__) {
    const {mnemonic, privateKey, publicKey} = wallet;
    console.log('获取到的钱包信息：', mnemonic, privateKey, publicKey);
  }
  return wallet;
};

export const walletWithJSON = async (json: string, password: string = '') => {
  return Wallet.fromEncryptedJsonSync(json, password);
};

export const walletWithPrivateKey = async (
  privateKey: string,
): Promise<Wallet> => {
  return new Wallet(privateKey);
};

export const walletWithMnemonic = async (
  mnemoc: string,
  path: string | undefined = undefined,
) => {
  return Wallet.fromMnemonic(mnemoc, path);
};

export const encyptWallet = async (
  wallet: Wallet,
  password: string,
  progress: ProgressCallback,
) => {
  return wallet.encrypt(password, progress);
};

export const saveWallet = async (walletName: string) => {};
