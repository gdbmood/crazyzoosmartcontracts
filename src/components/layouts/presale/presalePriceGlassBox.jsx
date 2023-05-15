import React from 'react';
import PropTypes from 'prop-types'

const PresalePriceGlassBox = props => {
    const data = props.data;
    return (
        <div className='presalePriceGlassBox'>
            <div className="presaleTokenPrice">
                <h5 className='presaleTokenPriceLabel'>Presale Token Price</h5>
                <h5 className='presaleTokenPriceData'>{data[0].tokenPriceMatic.toString()} Zoo = ${data[0].tokenPriceUSDT} USDT</h5>
            </div>
            <div className="row presaleMinMaxWrapper">
                <div className="col-6 presaleMin">
                    <div className="presaleTokenPrice">
                        <h5 className='presaleTokenPriceLabel'>Minimum Buy</h5>
                        <h5 className='presaleTokenPriceData'>{data[0].minBuy.toString()} $USDT</h5>
                    </div>
                </div>
                <div className="col-6 presaleMax">
                    <div className="presaleTokenPrice">
                        <h5 className='presaleTokenPriceLabel'>Maximum Buy</h5>
                        <h5 className='presaleTokenPriceData'>{data[0].maxBuy.toString()} $USDT</h5>
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