import { ChainId, getChainById } from '@usedapp/core';


const DappConfig = {
  readOnlyUrls: {
    [ChainId.Mumbai]: `${process.env.NEXT_PUBLIC_NODE_URL_MUMBAI}`,
    [ChainId.ArbitrumGoerli]: `${process.env.NEXT_PUBLIC_NODE_URL_ARBITRUMGOERLI}`,
  },
  pollingInterval: 1000,
  networks: [
    getChainById(ChainId.ArbitrumGoerli),
    getChainById(ChainId.Mumbai)
  ],
  notifications: {
    checkInterval: 1000,
    expirationPeriod: 10000,
  },
  autoConnect: true,
};

export default DappConfig;
