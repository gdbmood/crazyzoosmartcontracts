import React from 'react';
import { useEffect } from 'react';
import Header from '../components/header/Header';
import heroSliderData from '../assets/fake-data/data-slider-3';
import Slider from '../components/slider/Slider';
import Create from '../components/layouts/home-3/Create';
import newCreate from '../components/layouts/home-3/newCreate';
import Introduction from '../components/layouts/home-3/Introduction';
import Tokenomics from '../components/layouts/home-3/Tokenomics';
import CrazyZooNFTs from '../components/layouts/home-3/CrazyZooNFTs';
import Partners from '../components/layouts/home-3/Partners';
import Community from '../components/layouts/home-3/Community';
import LandingPageFooter from '../components/layouts/home-3/LandingPageFooter';



const Home03 = () => {


    useEffect(()=>{
        document.body.style.overflow = "auto";
    })

    return (
        <div className='home-3'>
            <Header />
            
            <Slider data={heroSliderData} />
            <div className='gradientWrapper'>
            <div className="blackSeperator"></div>
                <Create />
                <Introduction />
                <Tokenomics />
                <Partners />
            </div>
            
            <Community/>
            <LandingPageFooter />
        </div>
    );
}

export default Home03;
