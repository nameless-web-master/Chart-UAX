import React from 'react';

import { datas } from '../../data';

import { Questions } from '../questions'

export const AboutTerms = () => {
    return (
        <>
            <div className='w-full'>
                <div className='container mx-auto xl:px-[80px] lg:px-[40px] px-[16px]'>
                    <div className='flex flex-wrap justify-between governor'>
                        <div className='w-full px-4 flex flex-col'>
                            <p className='my-0'>Page last updated: 21 may, 2025</p>
                        </div>
                    </div>
                </div>
            </div>
            {
                datas.terms.map((_itm, _idx) => (
                    <Questions state={_itm} key={_idx} />
                ))
            }
        </>
    )
}