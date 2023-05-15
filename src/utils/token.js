import { ChainId } from '@usedapp/core';


export const Othertokens = {
      [ChainId.Mumbai]:{
            "USDC" : process.env.REACT_APP_USDT_ADDRESS_MUMBAI,
      },
      [ChainId.ArbitrumGoerli]:{
            "USDC" : process.env.REACT_APP_USDT_ADDRESS_ARBITRUMGOERLI,
      }  
}
