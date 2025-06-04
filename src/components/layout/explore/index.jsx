import React from 'react';

import { SectionTitle2 } from '../../common/sectionTitle2';
import { Box } from '../../common/box';


export const Explore = () => {
    return (
        <div className='w-full'>
            <div className='container mx-auto xl:px-[80px] xl:py-[45px] lg:px-[40px] lg:py-[24px] px-[16px] py-[12px]'>
                <div className='xl:px-[40px] px-[16px] flex flex-wrap justify-between'>
                    <div className='w-full explore'>
                        <div className="head">
                            <SectionTitle2 type={5} image={'line'} />
                        </div>
                        <div className="flex flex-wrap w-full boxs">
                            {
                                <Box state={'explore'} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}