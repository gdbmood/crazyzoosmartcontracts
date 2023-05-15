import React from 'react';
import { useEffect } from 'react';
import DappHeader from '../components/header/DapHeader';
import heroSliderData from '../assets/fake-data/data-slider-3';
import TreasuryLayout from '../components/layouts/TreasuryLayout';
import Header from '../components/header/Header';
import Community from '../components/layouts/home-3/Community';
import DappCommunity from '../components/layouts/home-3/dappCommunity';

const Treasury = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);
    return (
        <div className='home-3' style={{overflow: "hidden"}}>
            <Header />
            <TreasuryLayout data={heroSliderData} />
            <DappCommunity />
        </div>
    );
}

export default Treasury;
