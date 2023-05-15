import React from 'react';
import { useEffect } from 'react';
import Header from '../components/header/Header';
import DappCommunity from '../components/layouts/home-3/dappCommunity';
import PoolsLayout from '../components/layouts/PoolsLayout';

const Pools = () =>{

    const famrs = [
        {
            id: 0,
            title: "DAI/MAI (Stable)",
            TVL: 477589.125,
            rewards: 1579.472,
            apr: 12.53
        },
        {
            id: 1,
            title: "DAI/USDT (Stable)",
            TVL: 125589.125,
            rewards: 2385.472,
            apr: 17.14
        },
        {
            id: 2,
            title: "DAI/GUSD (Stable)",
            TVL: 356127.536,
            rewards: 1254.24,
            apr: 13.74
        },
        {
            id: 3,
            title: "DAI/MATIC (Stable)",
            TVL: 786127.536,
            rewards: 1854.24,
            apr: 13.64
        },
        {
            id: 4,
            title: "DAI/BTC (Stable)",
            TVL: 2366127.536,
            rewards: 2854.24,
            apr: 16.41
        },
        {
            id: 5,
            title: "DAI/USDC (Stable)",
            TVL: 356127.536,
            rewards: 1284.24,
            apr: 10.12
        },
        {
            id: 6,
            title: "DAI/BOB (Stable)",
            TVL: 26127.536,
            rewards: 854.64,
            apr: 15.69
        },
        {
            id: 7,
            title: "GUSD/USDT (Stable)",
            TVL: 162127.536,
            rewards: 3454.37,
            apr: 13.21
        },
        {
            id: 8,
            title: "USDC/GUSD (Stable)",
            TVL: 943127.536,
            rewards: 754.24,
            apr: 32.54
        },
        {
            id: 9,
            title: "GUSD/MATIC (Stable)",
            TVL: 985127.536,
            rewards: 4837.16,
            apr: 19.57
        },
    ]


    return(
        <div className='home-3'>
            <Header />
            <PoolsLayout data={famrs} />
            <DappCommunity />
        </div>
    );
}

export default Pools;