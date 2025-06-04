import React from "react";

import './style.css';

export const Allow = () => {
    return (
        <div className="w-full pt-[150px] pb-[80px]">
            <div className="container mx-auto sm:px-[12px] px-[18px] ">
                <div className="sm:px-[80px] px-0 mx-[-12px] flex xl:flex-row flex-col allow">
                    <div className="xl:w-[50%] w-full flex flex-col px-[15px]">
                        <h1 className="title">Allow Us To Introduce Ourselves</h1>
                        <p className="text-[20px] content my-0">
                           Hello, during this journey we will take you to our struggle in achieving this greatest platform. UAX is more than infrastructure — it's a shift in how digital networks operate. From concept to code, we've built a system designed for reliability, real-world compatibility, and global scalability.
                            </p>
                        <div className="flex md:items-center items-start mt-[57px] items md:flex-row flex-col gap-[30px] md:gap-0">
                            <img src="media/allow/item-01.jpg" alt="item-01" />
                            <img src="media/allow/item-02.jpg" alt="item-02" />
                        </div>
                    </div>
                    <div className="xl:w-[50%] w-full px-[15px]">
                        <div className="w-full flex flex-col numbers">
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>01</span>
                                </div>
                                <h4> Reliable Validator Architecture</h4>
                            </div>
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>02</span>
                                </div>
                                <h4>AI-Smart System Optimization</h4>
                            </div>
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>03</span>
                                </div>
                                <h4>Bandwidth-Based Fees, Not Tokens</h4>
                            </div>
                            <div className="flex justify-start items-center number">
                                <div className="number-item">
                                    <span>04</span>
                                </div>
                                <h4>Real Usecases with Real Adoption</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}