import React from 'react';
import PropTypes from 'prop-types'
import { propTypes } from 'react-bootstrap/esm/Image';

import { Button } from 'react-bootstrap';

import {BsTwitter, BsDiscord, BsInstagram} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'


const PresaleSocialBox = props => {

    const data = props.data;

    return (
        <div className='presaleAddressGlassBox row'>
            <div className="col-12 presaleSocialLinksWrapper">
                <h5 className="presaleWhitepaperLabel">Read out whitepaper</h5>
                <div className="presaleSocialBtnsWrapper">
                <Button className="presaleSocialBtn">
                    <BsTwitter 
                        size={15}
                        color={'#fff'}
                    />
                </Button>
                <Button className="presaleSocialBtn">
                    <FaTelegramPlane 
                        size={15}
                        color={'#fff'}
                    />
                </Button>
                <Button className="presaleSocialBtn">
                    <BsDiscord 
                        size={15}
                        color={'#fff'}
                    />
                </Button>
                <Button className="presaleSocialBtn">
                    <BsInstagram 
                        size={15}
                        color={'#fff'}
                    />
                </Button>
                </div>
            </div>
            <div className="col-12 presaleWhitepaperWrapper">
                <h5 className="presaleWhitepaperLabel">Read out whitepaper</h5>
                <Button className="presaleWhitepaperBtn">Check in here</Button>
            </div>
        </div>
    );
}

PresaleSocialBox.propTypes = {
    data: PropTypes.array.isRequired,
}


export default PresaleSocialBox;