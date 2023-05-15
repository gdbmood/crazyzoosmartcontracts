import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import DappCommunity from '../components/layouts/home-3/dappCommunity';
import FromSwapModal from '../components/layouts/swapModal';
import ToSwapModal from '../components/layouts/toSwapModal';

import { Button } from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css'
import pawIcon from '../assets/images/swapping/Paw_coin.png'

import leaves5 from '../assets/images/swapping/Leaves_05.svg'
import leaves1 from '../assets/images/swapping/Leaves_01.svg'
import leaves8 from '../assets/images/swapping/Leaves_08.svg'
import leaves7 from '../assets/images/minting/Leaves_07.svg'
import swappingGorilla from '../assets/images/swapping/CrazyZoo_Gorilla0005.avif'
import swappingRhino from '../assets/images/swapping/CrazyZoo_Rhino_V1_0006.avif'

import SwappingV3 from '../components/SwappingV3';
import Approve from '../components/Approve'
import {Othertokens} from '../utils/token'

import {
  useAccount,
  useConnect
} from 'wagmi'
import { useNetwork } from 'wagmi'
import config from '../config'
import { UserContext } from '../App';
import { useContext } from 'react';

const SwapPage = () => {

  const { chain, chains } = useNetwork() 
  const [fromCoin, setFromCoin, toCoin, setToCoin] = useContext(UserContext)

  const [swapFromModalShow, setSwapFromModalShow] = useState(false);
  const [swapToModalShow, setSwapToModalShow] = useState(false);
  const [IsZoo, setIsZoo] = useState(true);
  const [swapContractAddress, setSwapContractAddress] = useState('')
  const [approvedAmount, setApprovedAmount] = useState('')
  const [OtherTokenAddress , setOtherTokenAddress] = useState("0x4fCf905643E6be093Eba72Dd0f6d4a1d3Fb86c7D")
  const { address, isConnected } = useAccount()
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
  

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const swappingV3Value = [
    {
      price: 1.27,
      from: "MATIC",
      to: "USD"
    }
  ];

  const swapCurrencies = [
    {
      name: "ZOO",
      symbol: "zoo",
      logo: pawIcon
    },
    {
      name: "BITCOIN",
      symbol: "btc",
      logo: "https://assets.coincap.io/assets/icons/btc@2x.png"
    }

  ];

  const handleApprovedAmount = (event) => {
    setApprovedAmount(event.target.value);
  };
  
 useEffect(()=>{
  if(chain!= undefined){
    setSwapContractAddress(config?.ContractsConfig?.[chain?.id]?.UNISWAPINTERMEDIARY ?? '')
  }
 },[isConnected])


  
  useEffect(()=>{
    if( chain != undefined){
      if(fromCoin.symbol == 'zoo' ){
        console.log("Selling Zoo")
        console.log("USDC","0x4fCf905643E6be093Eba72Dd0f6d4a1d3Fb86c7D")
        setIsZoo(true)
        setOtherTokenAddress("0x4fCf905643E6be093Eba72Dd0f6d4a1d3Fb86c7D")
      } else {
        console.log("Buying Zoo")
        console.log("USDC","0x4fCf905643E6be093Eba72Dd0f6d4a1d3Fb86c7D")
        setIsZoo(false)
        setOtherTokenAddress("0x4fCf905643E6be093Eba72Dd0f6d4a1d3Fb86c7D")
      }
    }
  },[fromCoin, toCoin])

  return (
    <div className='home-3' style={{ overflow: "hidden" }}>
      <Header />
      <div className="swappingPageContainer" >
        <img src={leaves1} className="swappingLeaves1" alt="" />
        <img src={leaves5} className="swappingLeaves5" alt="" />
        <img src={leaves8} className="swappingLeaves8" alt="" />
        <img src={leaves7} className="swappingLeaves7" alt="" />
        <img src={swappingGorilla} className="swappingGorilla" alt="" />
        <img src={swappingRhino} className="swappingRhino" alt="" />
        <div className="row swappingBoxWrapper centered-axis-x centered-axis-y">
          <div className="mintingGlassBox">
            <div className="mintingBoxTitleWrapper">Swap Tokens</div>
            <div className="row swappingFormWrapper">
              <div className="swapInBox">
                <h5 className="swapInBoxTitle">Input</h5>
                <div className="swapInFormWrapper">
                  <Button className='fromCoinBtn' onClick={() => { setSwapFromModalShow(true) }}>
                    <img src={fromCoin.logo} className="swapCoinLogo" alt="" />
                    <span>{fromCoin.symbol.toString().toUpperCase()}</span>
                  </Button>
                  <div className="maxswapIn">50% max</div>
                  <input type="number" id='swapInInput' className='swapInInput' placeholder='0.0' value={approvedAmount} onChange={handleApprovedAmount}/>

                </div>

              </div>
              <div className="swapOutBox">
                <h5 className="swapOutBoxTitle">Output</h5>
                <div className="swapOutFormWrapper">
                  <Button className='toCoinBtn' onClick={() => { setSwapToModalShow(true) }}>
                    <img src={toCoin.logo} className="swapCoinLogo" alt="" />
                    <span>{toCoin.symbol.toString().toUpperCase()}</span>
                  </Button>
                  <div className="maxswapIn">50% max</div>
                  <input type="number" id='swapOutInput' className='swapOutInput' placeholder='0.0' readOnly />

                </div>

              </div>
              {
                isConnected ?
                <Approve swapContractAddress =  { swapContractAddress } OtherTokenAddress = { OtherTokenAddress } isZoo = { IsZoo } approvedAmount = {approvedAmount} /> 
                :
                <Button className="swapBtn" onClick={() => connect({ connector: connectors[1] })} >Connect Wallet</Button>
              }
            </div>

          </div>
          <SwappingV3 data={swappingV3Value} />
        </div>

      </div>
      <DappCommunity />
      <FromSwapModal
        show={swapFromModalShow}
        onHide={() => { setSwapFromModalShow(false) }}
        
      ></FromSwapModal>
      <ToSwapModal
        show={swapToModalShow}
        onHide={() => { setSwapToModalShow(false) }}
        
      ></ToSwapModal>
    </div>
  );
}

export default SwapPage;
