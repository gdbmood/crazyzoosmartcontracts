import React from 'react';
import { Link } from 'react-router-dom';
import pawIcon from '../../../assets/images/landing/Paw_Icon.svg'
import roadmapLeaves1 from '../../../assets/images/landing/roadmap_leaves1.svg'
import roadmapLeaves2 from '../../../assets/images/landing/roadmap_leaves2.svg'
import roadmapLeaves3 from '../../../assets/images/landing/roadmap_leaves3.svg'


const Roadmap = () => {
    return(
        <div className='roadmapWrapper'>
            <img src={roadmapLeaves1} className="roadmapLeaves1" alt="" />
            <img src={roadmapLeaves2} className="roadmapLeaves2" alt="" />
            <img src={roadmapLeaves3} className="roadmapLeaves3" alt="" />
            <h5 className='introductionTitle'>Roadmap</h5>
            <div className="row roadmapItemsRow">
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        <div className="roadmapItemStepFill"></div>
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBox">
                            <h5 className='roadmapItemTitle'>Q4 2022</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Create contract</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Create website</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Create whitepaper</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Visualizing & creating NFTs</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Visualizing & creating NFTs</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Visualizing & creating NFTs</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Visualizing & creating NFTs</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q1 2023</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Double Audit & KYC</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Whitehacker</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Pinksale partner</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">1° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">2° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q2 2023</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Preparation of E-commerce infrastructure</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Further partnerships</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Social impact for animals</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">1° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">2° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row roadmapItemsRow">
            <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q1 2024</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Zoo Game</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Cross chaine</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Social impact for animals</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">1° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">2° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q4 2024</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Opening pet shops</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Zoo boost</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">CEX Listing</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">1° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">2° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 roadmapItem">
                    <div className="roadmapItemStepBorder">
                        
                    </div>
                    <div className="roadmapItemGlassBox">
                        <div className="roadmapItemTitleBoxInactive">
                            <h5 className='roadmapItemTitleInactive'>Q3 2023</h5>
                        </div>
                        <div className="roadmapItemDataWrapper">
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Team building tool "Crazy Drop"</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Flux labs partner</h5>
                            </div>
                            <div className="roadmapItemDataRow">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Degenlounge casinò listing</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Degenlounge casinò listing</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">2° Presale</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Listing on Uniswap</h5>
                            </div>
                            <div className="roadmapItemDataRow notVisible">
                                <img src={pawIcon} alt="" className='pawIcon' />
                                <h5 className="roadmapItemData">Start NFT Staking</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Roadmap;

