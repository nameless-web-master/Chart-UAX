import React, { useContext,useEffect,useState } from 'react';
import { ThemeContext } from '../../../context/themeContext';

import { SectionTitle1 } from '../../common/sectionTitle1';
import { SectionTitle2 } from '../../common/sectionTitle2';

import { datas } from '../../data';
import axios from 'axios'
import './style.css';

export const Globe = () => {
    const [block,setblock] = useState()
    const [active_validators,setactive_validators] = useState()
     useEffect(() => {
        async function getBlocks(){
        var blocks = await axios.get("https://cmw.uax.network/get_last_fifty_blocks")
        var validators = await axios.get('https://webservices.uaxwallet.com/active_stakers_count')
        setblock(blocks.data[0].index)
        setactive_validators(validators.data.activeStakersCount)
        // console.log(validators.data)
        }
        getBlocks()
     }, []);
    const { theme } = useContext(ThemeContext);
    return (
        <div className='flex flex-col justify-between items-center container mx-auto lg:px-[130px] px-[32px] py-[40px]'>
            <div className='w-full md:flex hidden justify-between items-center'>
                <SectionTitle1 type={1} />
            </div>
            <div className='md:hidden flex flex-col w-full'>
                <SectionTitle2 type={4} image={'line'} />
            </div>
            <div className='w-full flex justify-between items-center pt-[80px] globe'>
                <div className='md:flex hidden items-center px-[16px] w-[30%]'>
                    <img src={`/media/globe/globe-${theme}.png`} alt="globe" width={"260px"} />
                </div>
                <div className='flex items-end md:w-[70%] w-full boxes'>
                    {
                        datas.global.map((data, idx) =>
                            <div className='w-[49%] box' key={idx}>
                                <div className="box-title">
                                    <a href="#" className='flex items-center'>
                                        <img
                                            src={data.src}
                                            alt={data.alt}
                                            width={"20px"}
                                            height={"20px"}
                                            className='mr-[10px]'
                                        />
                                        {data.title}
                                    </a>
                                </div>
                                <div className="box-content">
                                <span>
                                {data.title === 'Latest Block'
                                    ? block
                                    : data.title === 'Total Nodes'
                                    ? active_validators
                                    : data.value}
                                </span>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    )
}