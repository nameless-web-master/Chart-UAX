import React, {useEffect,useState } from 'react';

import { datas } from '../../components/data';
import { AboutStaking } from '../../components/layout/aboutStaking';
import { StakingBox } from '../../components/layout/stakingBox';
import { Questions } from '../../components/layout/questions';
import axios from 'axios'
import './style.css';

export const Staking = () => {
     const [stake_amt,setstake_amt] = useState()
     const [active_validators,setactive_validators] = useState()
     useEffect(() => {
        async function getStake(){
        var stake = await axios.get("https://webservices.uaxwallet.com/total_stake_fund")
        var validators = await axios.get('https://webservices.uaxwallet.com/active_stakers_count')
        setstake_amt(stake.data.totalStakeFund)
        setactive_validators(validators.data.activeStakersCount)
        }
        getStake()
     }, []);

    return (
        <>
            <div className="w-full heading explore staking">
                <div className='flex flex-col sm:pt-[222px] pt-[180px] sm:pb-[120px] pb-[80px] px-6 w-fit mx-auto'>
                    <h1 className="text-center text-[50px] font-semibold mb-4">
                        <span className="text-[#9B07B3]">How </span>
                        to
                        <span className="text-[#CE1FEA]"> Stake </span>
                        Your UAX
                    </h1>
                    <div className="flex flex-wrap justify-between sm:mt-6 mt-4 boxes">
                        {
                            datas.staking.map((_itm, _idx) => (
                                <div className="lg:w-1/3 md:w-1/2 w-full box" key={_idx}>
                                    <div>
                                        <p className='m-0 mb-2 text-[15px] font-light'>{_itm.title}</p>
                                        <h6 className='text-[24px] text-[#CE1FEA]'>{_itm.title==="Total UAX Staked"?stake_amt:_itm.title==="Total Validators"?active_validators:_itm.content}</h6></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <AboutStaking />
            <StakingBox />
            <Questions state={'further'} />
        </>
    )
}