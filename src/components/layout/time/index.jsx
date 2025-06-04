import React, {useEffect,useState } from 'react';

import { datas } from '../../data';
import axios from 'axios'
import './style.css';

export const Time = () => {
    const [txns,settxns] = useState()
        const [stake_amt,setstake_amt] = useState()

     useEffect(() => {
        async function getTxns(){
        var txns = await axios.get('https://cmw.uax.network/get_total_transactions')
         var stake_amt = await axios.get('https://webservices.uaxwallet.com/total_stake_fund')
         setstake_amt(stake_amt.data.totalStakeFund)
        settxns(txns.data)
        // console.log(txns.data)
        }
        getTxns()
     }, []);

    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] lg:px-[40px] px-[16px] portal'>
                <div className='xl:px-[60px] px-0 flex flex-wrap justify-between boxes'>
                    {
                        datas.times.map((_time, _idx) =>
                            <div className='sm:w-1/2 w-full px-[10px]' key={_idx}>
                                <div className='box'>
                                    <div className='head' key={_idx} >
                                        <h5>{_time.head}</h5>
                                    </div>
                                    <div className="flex items-end main">
                                        {_time.head==="Total Transactions"?
                                            <span className='Nr'>{txns}</span>
                                            :_time.head==="Total Consensus Stake"?<span className='Nr'>{stake_amt}</span>:
                                                _time.Nr.split('').map((_itm, _id) =>
                                                <span className='Nr' key={_id}>{_itm}</span>
                                                )
                                        }
                                        {/* {
                                           
                                        } */}
                                        {" "}
                                        <p className='ml-[4px] my-0'>{_time.unit}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}