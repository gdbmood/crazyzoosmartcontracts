import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';
import { useAccount } from 'wagmi';
import { summaryOwner } from '../../../hooks/utils';

const PresaleAddressBox = props => {

    const {address, isConnected} = useAccount();


    const data = props.data;

    return (
        <div className='presaleAddressGlassBox row'>
            <div className="col-4 referralRewardsWithdrawWrapper">
                <Button className="referralRewardsWithdrawBtn">Address</Button>
            </div>
            <div className="col-8 referralRewardsWrapper">
                <h5 className="presaleAddressLabel">{summaryOwner(address)}</h5>
                
            </div>
        </div>
    );
}

PresaleAddressBox.propTypes = {
    data: PropTypes.array.isRequired,
}


export default PresaleAddressBox;