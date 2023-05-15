import React from 'react';
import { useEffect } from 'react';
import Header from '../components/header/Header';
import DappHeader from '../components/header/DapHeader';
import heroSliderData from '../assets/fake-data/data-slider-3';
import StakingLayout from '../components/layouts/StakingLayout';
import Community from '../components/layouts/home-3/Community';
import DappCommunity from '../components/layouts/home-3/dappCommunity';

const Staking = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);

    return (
        <div className='home-3' style={{overflow: "hidden"}}>
            <Header />
            <StakingLayout data={heroSliderData} />
            <DappCommunity />
        </div>
    );
}

export default Staking;