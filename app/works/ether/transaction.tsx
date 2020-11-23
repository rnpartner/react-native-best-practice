import '@ethersproject/shims';

import {balanceAbi, contractAddress} from 'works/AIS';
import {ethers, providers} from 'ethers';

import {PROJECT_ID} from '@private/Infura';
import {address} from '@private/Wallet';
import {network} from './network';

export const infuraProvider = new providers.InfuraProvider(network, PROJECT_ID);

export const queryEtherBalance = async () => {
  const balance = await infuraProvider.getBalance(address);
  console.log('账户余额', balance);
};

export const queryAISBalance = async () => {
  const contract = new ethers.Contract(
    contractAddress,
    balanceAbi,
    infuraProvider,
  );
  const balance = await contract.balanceOf(address);
  console.log('AIS余额', balance);
};
