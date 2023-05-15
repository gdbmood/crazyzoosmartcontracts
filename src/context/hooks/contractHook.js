import React from 'react';
import { NetworkContractsContext } from '../providers';

export const useNetworkContracts = () => {
    const context = React.useContext(NetworkContractsContext);
    if (context === undefined) {
        throw new Error(
            'useNetworkContracts must be used within a NetworkContractsContext',
        );
    }
    const {
        Token,
        Staking,
        NFT,
        UniswapIntermediary,
        PreSale,
        USDT
    } = context;
    return {
        Token,
        Staking,
        NFT,
        UniswapIntermediary,
        PreSale,
        USDT
    };
};
