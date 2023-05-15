import DappConfig from './dapp';
import ContractsConfig from './contracts';
import { ChainId } from '@usedapp/core';

const config = {

  DappConfig: { ...DappConfig },
  ContractsConfig: { ...ContractsConfig },

  AllowedNetworks: [
    ChainId.Mumbai,
  ],

};
export default config;
