import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import menus from "../../pages/menu";
import logoheader from '../../assets/images/logo/crazyzoo-logo.png'
import logoheader2x from '../../assets/images/logo/crazyzoo-logo.png'
import logodark from '../../assets/images/logo/crazyzoo-logo.png'
import logodark2x from '../../assets/images/logo/crazyzoo-logo.png'
import { Button } from 'react-bootstrap';
import { Web3Button } from "@web3modal/react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from 'wagmi';

const Header = () => {


    const { isOpen, open, close, setDefaultChain } = useWeb3Modal();
    const {address, isConnected} = useAccount();
    
    
    function summaryOwner(owner){
        if(!owner) return "connectWallet";
        var firstCharacters = owner.substring(0, 4);
        var lastCharacters = owner.substring(owner.length - 4);
        return firstCharacters + "..."  + lastCharacters;
      }

    const [menuItems, setMenuItems] = useState(menus);

    const nav = useNavigate();

    /*useEffect(() => {
        if (adr && (adr != null)) {
            let connectedWalletMenu = document.getElementById('menu::r0::content');

            let connectedWaletMenuDappLink = htmlToElement(`<li data-scope="menu" data-part="item" role="menuitem" data-ownedby="menu::r0::content" class="css-7issgb">
            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" width="1em" height="1em" xmlns="http://www.w3.org/2000/svg">
<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke="#ffffff" stroke-width="2"></path> <path d="M16 12L8 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke="#fffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g>
</svg>Access Dapp</li>`);
            connectedWalletMenu.appendChild(connectedWaletMenuDappLink);
            connectedWaletMenuDappLink.addEventListener('click', ()=>{
                nav('/minting')
            })
        } else {
            console.log('not connected')
        }
    })*/


    const { pathname } = useLocation();

    const headerRef = useRef(null)


    const menuLeft = useRef(null)
    const btnToggle = useRef(null)
    const btnSearch = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }

    const searchBtn = () => {
        btnSearch.current.classList.toggle('active');
    }

    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index);
    };



    return (
        <header id="header_main" className="header_1 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div className="wrap-box flex">
                                <div className="row headerWrapper">
                                    <div className="col-2 logoWrapper">
                                        <div id="site-logo-inner">
                                            <Link to="/" rel="home" className="main-logo">
                                                <img className='logo-dark' id="logo_header" src={logodark} srcSet={`${logodark2x}`} alt="nft-gaming" />
                                                <img className='logo-light' id="logo_header" src={logoheader} srcSet={`${logoheader2x}`} alt="nft-gaming" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-8 navWrapper">
                                        <nav id="main-nav" className="main-nav" ref={menuLeft} >
                                            <ul id="menu-primary-menu" className="menu">
                                                {
                                                    menuItems.map((data, index) => (
                                                        <li key={index} onClick={() => handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : ''} ${activeIndex === index ? 'active' : ''} `}   >
                                                            <Link to={data.links}>{data.name}</Link>
                                                            {
                                                                data.namesub &&
                                                                <ul className="sub-menu" >
                                                                    {
                                                                        data.namesub.map((submenu) => (
                                                                            <li key={submenu.id} className={
                                                                                pathname === submenu.links
                                                                                    ? "menu-item current-item"
                                                                                    : "menu-item"
                                                                            }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            }

                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="col-2 ctaWrapper">
                                    <Button className='polygonBtn' onClick={()=>{window.open('https://polygonscan.com/', '_blank')}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 1024 1024" id="polygon-token"><path fill="#FFFF47" d="M681.469 402.456C669.189 395.312 653.224 395.312 639.716 402.456L543.928 457.228L478.842 492.949L383.055 547.721C370.774 554.865 354.81 554.865 341.301 547.721L265.162 504.856C252.882 497.712 244.286 484.614 244.286 470.326V385.786C244.286 371.498 251.654 358.4 265.162 351.256L340.073 309.581C352.353 302.437 368.318 302.437 381.827 309.581L456.737 351.256C469.018 358.4 477.614 371.498 477.614 385.786V440.558L542.7 403.647V348.874C542.7 334.586 535.332 321.488 521.824 314.344L383.055 235.758C370.774 228.614 354.81 228.614 341.301 235.758L200.076 314.344C186.567 321.488 179.199 334.586 179.199 348.874V507.237C179.199 521.526 186.567 534.623 200.076 541.767L341.301 620.354C353.582 627.498 369.546 627.498 383.055 620.354L478.842 566.772L543.928 529.86L639.716 476.279C651.996 469.135 667.961 469.135 681.469 476.279L756.38 517.954C768.66 525.098 777.257 538.195 777.257 552.484V637.023C777.257 651.312 769.888 664.409 756.38 671.554L681.469 714.419C669.189 721.563 653.224 721.563 639.716 714.419L564.805 672.744C552.525 665.6 543.928 652.502 543.928 638.214V583.442L478.842 620.354V675.126C478.842 689.414 486.21 702.512 499.719 709.656L640.944 788.242C653.224 795.386 669.189 795.386 682.697 788.242L823.922 709.656C836.203 702.512 844.799 689.414 844.799 675.126V516.763C844.799 502.474 837.431 489.377 823.922 482.233L681.469 402.456Z"></path></svg>
                                        Polygon
                                        </Button>
                                    <Button className="connectWalletBtn" onClick={async () => {await open();}}>{isConnected ? summaryOwner(address) : "Connect Wallet"}</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

export default Header;
