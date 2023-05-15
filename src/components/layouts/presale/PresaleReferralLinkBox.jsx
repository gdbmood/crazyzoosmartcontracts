import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';

const PresaleReferralLinkBox = props => {

    const data = props.data;

    return (
        <div className='presaleAddressGlassBox row'>
            <div className="col-4 referralRewardsWithdrawWrapper">
                <Button className="referralRewardsWithdrawBtn">Referral Link</Button>
            </div>
            <div className="col-8 referralRewardsWrapper">
                <h5 className="presaleAddressLabel">http://refferal.link...34.com</h5>
                
            </div>
        </div>
    );
}

PresaleReferralLinkBox.propTypes = {
    data: PropTypes.array.isRequired,
}


export default PresaleReferralLinkBox;