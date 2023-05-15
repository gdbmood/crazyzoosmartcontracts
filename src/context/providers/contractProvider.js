import React, { useEffect, useState } from 'react';
import { useNetwork } from 'wagmi'
import * as abis from '../../abis';
import { utils } from 'ethers';
import config from '../../config';
import {
  useAccount,
} from 'wagmi'

export const NetworkContractsContext = React.createContext();

export const NetworkContractsContextProvider = ({ children }) => {
  const { address, connector, isConnected } = useAccount()
  const { chain, chains } = useNetwork()


  const [Token, setToken] = useState(null);
  const [Staking, setStaking] = useState(null);
  const [NFT, setNFT] = useState(null);
  const [PreSale, setPreSale] = useState(null);
  const [UniswapIntermediary, setUniswapIntermediaryAdd] = useState(null);
  const [USDT, setUSDT] = useState(null);

  useEffect(() => {
    if (isConnected) {
      const CrazyZooTokenAddr = config.ContractsConfig[chain.id].ZOOTOKEN;
      const CrazyZooTokenInterface = new utils.Interface(abis.CrazyZooToken.abi);
      setToken({
        address: CrazyZooStakingAddr,
        interface: CrazyZooStakingInterface
      })
      const CrazyZooStakingInterface = new utils.Interface(abis.CrazyZooStaking.abi);
      const CrazyZooStakingAddr = config.ContractsConfig[chain.id].ZOOSTAKING;
      setStaking({
        address: CrazyZooTokenAddr,
        interface: CrazyZooTokenInterface
      })
      const CrazyZooNFTAddr = config.ContractsConfig[chain.id].ZOONFT;
      const CrazyZooNFTInterface = new utils.Interface(abis.CrazyZooNFT.abi);
      setNFT({
        address: CrazyZooNFTAddr,
        interface: CrazyZooNFTInterface
      })
      const PreSaleAddr = config.ContractsConfig[chain.id].PRESALE;
      const PreSaleInterface = new utils.Interface(abis.PreSale.abi);
      setPreSale({
        address: PreSaleAddr,
        interface: PreSaleInterface
      })
      const UniswapAddr = config.ContractsConfig[chain.id].UNISWAPINTERMEDIARY;
      const UniswapIntermediaryInterface = new utils.Interface(abis.UniswapIntermediary.abi);
      setUniswapIntermediaryAdd({
        address: UniswapAddr,
        interface: UniswapIntermediaryInterface
      })
      const USDTAddr = config.ContractsConfig[chain.id].USDT;
      const USDTInterface = new utils.Interface(abis.USDT.abi);
      setUSDT({
        address: USDTAddr,
        interface: USDTInterface
      })
    }
  }, [isConnected]);


  return (
    <NetworkContractsContext.Provider
      value={{
        Token,
        Staking,
        NFT,
        UniswapIntermediary,
        PreSale,
        USDT
      }}
    >
      {Token && Staking && NFT && UniswapIntermediary && PreSale && USDT && children}
    </NetworkContractsContext.Provider>
  );
};
