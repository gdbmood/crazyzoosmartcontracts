import React from 'react';
import PropTypes from 'prop-types'
import Countdown from 'react-countdown';
import { Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ApprovePreSale from '../../ApprovePreSale';
import { useEffect, useState } from 'react';
import BuyingPreSale from '../../BuyingPreSale';
import { SetUSDT } from '../../../hooks/dapp/UseUSDT'
import { ethers } from 'ethers';
import {
    useAccount,
    useConnect,
    useNetwork
} from 'wagmi'



const CompletedCountdown = () => {
    <span>You are good to go!</span>
}

const CountdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return CompletedCountdown;
    } else {
        if (days < 10) days = "0" + days.toString()
        if (hours < 10) days = "0" + days.toString()
        if (minutes < 10) days = "0" + days.toString()
        if (seconds < 10) days = "0" + days.toString()
        return (
            <div className='Countdown'>
                <h5>{days}</h5>
                <h5>{hours}</h5>
                <h5>{minutes}</h5>
                <h5>{seconds}</h5>
            </div>
        );
    }
}

const PrivateSaleBox = props => {
    const data = props.data;
    const [inputAmount, setInputAmount] = useState()
    const { chain, chains } = useNetwork()
     
    const {minBuy, maxBuy, PreSaleContractAddress} = data[0]

    const amountString = inputAmount ? Number(inputAmount).toFixed() : 0;
    const _Tokenfee = amountString ? ethers.BigNumber.from(amountString).mul(ethers.BigNumber.from(10).pow(18)) : 0;
    
    const { data: dataTokenfee, isLoading: isLoadingTokenfee, isSuccess: isSuccessTokenfee, write: TokenfeeApprove } = SetUSDT('approve', [`${PreSaleContractAddress}`, `${_Tokenfee}`], chain.id)

    
    const handleInputAmount = (event) => {
        setInputAmount(event.target.value)
    };
    
    const handleMint = async () => {
        if(inputAmount < minBuy || inputAmount > maxBuy){
            alert("Approved amount is incorrect")  
        } else {
            await TokenfeeApprove?.();
        }
    };
    return (
        <div className='privateSaleGlassBox'>
            <div className="privateSaleBoxTitleWrapper">Private Sale</div>
            <div className='countdownWrapper'>
                <Countdown
                    date={Date.now() + data[0].countdownTo}
                    renderer={CountdownRenderer}
                />
            </div>
            <div className="mintedProgressBarLabelWrapper">
                <ProgressBar min={0} max={data[0].privateSaleTo} now={data[0].privateSaleFrom} id="privateSaleProgressBar" />
                <h5 className='privateSaleFrom'>{data[0].privateSaleFrom?.toString()} USDT</h5>
                <h5 className='privateSaleTo'>{data[0].privateSaleTo?.toString()} USDT</h5>
                <div className="privateSaleInputWrapper">
                    <input type="number" id='privateSaleInput' onChange = {handleInputAmount} className='privateSaleInput' placeholder='0.0'/>
                    <div className="maxswapIn">Max</div>
                </div>
            </div>
            {
                isSuccessTokenfee ?
                <BuyingPreSale inputAmount={inputAmount} /> :
                <Button className="swapBtn" onClick={handleMint} >Approve</Button>
 
            }
            {/* <Button className="swapBtn">Buy with USDT</Button> */}
        </div>
    );
}

PrivateSaleBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PrivateSaleBox;