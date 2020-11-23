import '@ethersproject/shims';

import * as _ from 'lodash';

import EtherToken from '@model/token';
import {FakeTokens} from '../FakeTokens';
import {ethers} from 'ethers';

const etherToken: EtherToken = {symbol: 'ETH'};

export const tokensTracking = [etherToken, ...FakeTokens];

const fetchBalance = async () => {};

const contains = (
  token: EtherToken,
  _tokens: EtherToken[] = tokensTracking,
) => {
  return _.some(_tokens, {symbol: token.symbol});
};

/** 向数组中添加Token,添加成功返回true，否则返回false */
export const addToken = (token: EtherToken): boolean => {
  if (contains(token)) {
    return false;
  }
  tokensTracking.push(token);
  return true;
};

/** 从数组中移除token */
export const removeToken = (
  token: EtherToken,
  tokens: EtherToken[] = tokensTracking,
) => {
  _.remove(tokens, ({symbol}) => symbol === token.symbol);
};
