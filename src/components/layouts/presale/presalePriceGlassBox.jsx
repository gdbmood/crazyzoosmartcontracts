import React from 'react';
import PropTypes from 'prop-types'
import { GetMinimumInvestment } from '../../../hooks/main/getMinimumInvestment';
import { GetMaximumInvestment } from '../../../hooks/main/getMaximumInvestment';
import { GetTokenDecimals } from '../../../hooks/main/getTokenDecimals';
import { usdcTokenAddress } from '../../../hooks/main/abi';

const PresalePriceGlassBox = props => {
    const decimals = GetTokenDecimals(usdcTokenAddress);
    const minimumInvestment = GetMinimumInvestment();
    const maximumInvestment = GetMaximumInvestment();

    const data = props.data;
    return (
        <div className='presalePriceGlassBox'>
            <div className="presaleTokenPrice">
                <h5 className='presaleTokenPriceLabel'>Presale Token Price</h5>
                <h5 className='presaleTokenPriceData'>{1} Zoo = ${0.0001} USDT</h5>
            </div>
            <div className="row presaleMinMaxWrapper">
                <div className="col-6 presaleMin">
                    <div className="presaleTokenPrice">
                        <h5 className='presaleTokenPriceLabel'>Minimum Buy</h5>
                        <h5 className='presaleTokenPriceData'>{(Number(minimumInvestment.data)/10**18)} $USDT</h5>
                    </div>
                </div>
                <div className="col-6 presaleMax">
                    <div className="presaleTokenPrice">
                        <h5 className='presaleTokenPriceLabel'>Maximum Buy</h5>
                        <h5 className='presaleTokenPriceData'>{Number(maximumInvestment.data)/10**18} $USDT</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

PresalePriceGlassBox.propTypes = {
    data: PropTypes.array.isRequired,
}

export default PresalePriceGlassBox;