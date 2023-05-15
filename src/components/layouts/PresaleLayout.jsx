import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import leaves5 from '../../assets/images/presale/Leaves_05.svg'
import leaves1 from '../../assets/images/referral/Leaves_01.svg'
import leaves8 from '../../assets/images/presale/Leaves_08.svg'
import leaves7 from '../../assets/images/minting/Leaves_08.svg'



import presaleRhino from '../../assets/images/presale/CrazyZoo_Rhino_V1_0001.avif'
import presaleLemur from '../../assets/images/presale/CrazyZoo_Lemur_2222.avif'
import presaleGorilla from '../../assets/images/presale/CrazyZoo_Gorilla0007.avif'

import PresaleWelcomeGlassBox from './presale/presaleWelcomeBox';
import PresaleAddressBox from './presale/presaleAddressBox';
import PresaleSocialBox from './presale/presaleSocialBox';
import PrivateSaleBox from './presale/privateSaleBox';
import PresalePriceGlassBox from './presale/presalePriceGlassBox';
import PresaleReferralLinkBox from './presale/PresaleReferralLinkBox';
import {GetPreSale, SetPreSale} from '../../hooks/dapp/UsePreSale'
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'
import config from '../../config'


const PresaleLayout = props => {
    const data = props.data;

    const [PreSaleContractAddress, setPreSaleContractAddress] = useState('')


    const { address, isConnected } = useAccount()
    const { chain, chains } = useNetwork()
    const { data: endTime, isError: isErrorTime, isLoading : isLoadingTime} = GetPreSale('getEndTime',chain.id)
    const {data: dataTotalMinted, isError: isErrorTotalMinted, isLoading : isLoadingTotalMinted} = GetPreSale('getTotalMinted',chain.id)
    const { data: dataPriceOfToken, isError: isErrorPriceOfToken, isLoading : isLoadingPriceOfToken} = GetPreSale('getPriceOfToken',chain.id)
    const { data: dataMinInvestment, isError: isErrorMinInvestment, isLoading : isLoadingMinInvestment} = GetPreSale('getMinInvestment',chain.id)
    const { data: dataMaxInvestment, isError: isErrorMaxInvestment, isLoading : isLoadingMaxInvestment} = GetPreSale('getMaxInvestment',chain.id)
    const { data: dataUserBalance, isError: isErrorUserBalance, isLoading : isLoadingUserBalance} = GetPreSale('getUserBalance',chain.id,[`${address}`])
    const { data: getCap, isError: isErrorCap, isLoading : isLoadingCap} = GetPreSale('getCap',chain.id)
    
    // console.log(new Date(endTime?.toString() * 1000))
    // console.log(dataTotalMinted?.toString())
    // console.log(dataPriceOfToken?.toString()/1e18)
    // console.log(dataMinInvestment?.toString()/1e18)
    // console.log(dataMaxInvestment?.toString()/1e18)
    // console.log(dataUserBalance?.toString())
    // console.log(getCap?.toString()/1e6)


    useEffect(()=>{
        if(chain!= undefined){
            setPreSaleContractAddress(config?.ContractsConfig?.[chain?.id]?.PRESALE ?? '')
        }
    },[isConnected])

    const privateSaleData = [
        {
            countdownTo: 650000000,
            privateSaleFrom: dataTotalMinted?.toString(),
            privateSaleTo:getCap?.toString()/1e6, 
            tokenPriceMatic: 1,
            tokenPriceUSDT: dataPriceOfToken?.toString()/1e18,
            minBuy: dataMinInvestment?.toString()/1e18,
            maxBuy: dataMaxInvestment?.toString()/1e18,
            PreSaleContractAddress : PreSaleContractAddress && PreSaleContractAddress
        }
    ]

    return (
        <div className="presalePageContainer" >
            <img src={leaves1} className="presaleLeaves1" alt="" />
            <img src={leaves5} className="presaleLeaves5" alt="" />
            <img src={leaves8} className="presaleLeaves8" alt="" />
            <img src={leaves7} className="presaleLeaves7" alt="" />
            <img src={presaleLemur} className="referralLemur" alt="" />
            <img src={presaleGorilla} className="referralGorilla" alt="" />
            <img src={presaleRhino} className="referralRhino" alt="" />
            <div className="row presaleBoxWrapper centered-axis-x centered-axis-y">
                <div className="col-6 presaleBoxLeft">
                    <PresaleWelcomeGlassBox data={data}/>
                    <PresaleSocialBox data={data}/>
                    <PresaleAddressBox data={data}/>
                </div>
                <div className="col-6 presaleBoxRight">
                    <PrivateSaleBox data={privateSaleData}/>
                    <PresalePriceGlassBox data={privateSaleData}/>
                    <PresaleReferralLinkBox data={data}/>
                </div>
            </div>
            
        </div>
    );
}

PresaleLayout.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PresaleLayout;
