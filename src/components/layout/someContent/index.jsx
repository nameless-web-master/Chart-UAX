import React from 'react';

import './style.css';

export const SomeContent = ({ type }) => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full some-content'>
                        {!type ?
                            <>
                                {/* <h1 className='md:text-[40px] text-[26px] font-bold text-white'>Some Content Here..</h1> */}
                                <p className='md:text-[16px] text-[12px] font-light text-white'>
                                   UAX isn't just a network — it's an ecosystem engineered for tomorrow. With seamless tokenized asset integration,   <br />Bandwidth-driven optimization, and a low-barrier entry through low gas, we're giving everyone the tools to participate  <br /> in the future of finance.
                                  </p>
                            </> :
                            <>
                                <a href="#" className='text-[15px] text-[#CE1FEA] font-light'>ABOUT</a>
                                <h1 className='md:text-[32px] text-[22px] font-bold text-white '>What is UAX?</h1>
                                <p className='md:text-[16px] text-[12px] font-light text-white'>
                                   UAX Network is a pioneering Layer 1 blockchain platform designed to bridge the gap between digital assets and real-world applications. By leveraging Artificial Intelligence Smart Integration (AISI), UAX enables the tokenization of tangible items, ensuring authenticity and tangible value.
                                </p>
                                {/* <p className='md:text-[16px] text-[12px] font-light text-white'>
                                    Don’t miss this chance on the UAX crypto presale 2025! Get involved in the biggest crypto ICO sale and stay ahead of the innovative blockchain game.
                                </p> */}
                            </>}
                    </div>
                </div>
            </div>
        </div>
    )
}