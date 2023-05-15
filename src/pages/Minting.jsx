import React from 'react';
import { useEffect } from 'react';
import Header from '../components/header/Header';
import DappHeader from '../components/header/DapHeader';
import heroSliderData from '../assets/fake-data/data-slider-3';
import MintingLayout from '../components/layouts/MintingLayout';
import Community from '../components/layouts/home-3/Community';
import DappCommunity from '../components/layouts/home-3/dappCommunity';


const MintingPage = () => {
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);

    return (
        <div>
            <Header />
            <MintingLayout data={heroSliderData} />
            <DappCommunity />
        </div>
    );
}

export default MintingPage;
