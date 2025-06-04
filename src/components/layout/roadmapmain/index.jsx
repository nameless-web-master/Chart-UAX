import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.css';

export const RoadmapMail = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration
            once: false      // only animate once
        });
    }, []);

    return (
        <div className='w-full road-map'>
            <div className="container mx-auto sm:px-[12px] px-[18px] ">
                <div className='w-full flex flex-col'>
                    <div className="block text-center">
                        <h3 className="heading text-[#CE1FEA]">Road map</h3>
                        <p className="my-[16px] xl:px-[350px] px-0 text-[17px]">The future of decentralized tech isn’t built in a day. UAX is rolling out in focused phases — every step backed by real research, validator testing, and hardware benchmarking.</p>
                    </div>
                </div>

                <div className="road-map-main">
                    <div className="box-roadmap left active aos-init aos-animate" data-aos="fade-right">
                        <p className="time">April 2024</p>
                        <h5 className="title">Foundation Laid</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Finalized core architecture for bandwidth gas model</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Validator share submission formula designed</p>
                            </li>
                             <li>
                                <div className="dot"></div>
                                <p className="fs-17">AISI integration concept approved</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap right active aos-init aos-animate" data-aos="fade-left" data-aos-duration="1000">
                        <p className="time">June 2024</p>
                        <h5 className="title">Prototype Testnet Deployed</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Internal validator hardware tested</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Explorer v0.1 and live share tracking enabled</p>
                            </li>
                             <li>
                                <div className="dot"></div>
                                <p className="fs-17">Bandwidth estimation formula implemented</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap left aos-init aos-animate" data-aos="fade-right" data-aos-duration="1000">
                        <p className="time">August 2024</p>
                        <h5 className="title">API & Developer Tools Rolled Out</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">JSON-based endpoints exposed to devs</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Wallet SDK (Alpha) released</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Validator node CLI introduced</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap right aos-init" data-aos="fade-left" data-aos-duration="1000">
                        <p className="time">November 2024</p>
                        <h5 className="title">Staking Engine Built</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Validator rewards tied to share uptime</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">UAX Wallet Beta with staking view launched</p>
                            </li>
                              <li>
                                <div className="dot"></div>
                                <p className="fs-17">Governance framework outlined</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap left aos-init" data-aos="fade-right" data-aos-duration="1000">
                        <p className="time"> February 2025</p>
                        <h5 className="title">Public Testnet (Primordial Phase)</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Validator onboarding opened to early community</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Share submission monitored live</p>
                            </li>
                              <li>
                                <div className="dot"></div>
                                <p className="fs-17">Testnet explorer with public faucet activated</p>
                            </li>
                        </ul>
                    </div>
                    <div className="box-roadmap right aos-init" data-aos="fade-left" data-aos-duration="1000">
                        <p className="time">Q3 2025</p>
                        <h5 className="title">DAO Launch + EVM Bridge Testing</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Governance voting begins on-chain</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Ethereum-compatible bridge simulation starts</p>
                            </li>
                               <li>
                                <div className="dot"></div>
                                <p className="fs-17">DAO proposals opened for validator decisions</p>
                            </li>
                        </ul>
                    </div>
                     <div className="box-roadmap left aos-init" data-aos="fade-right" data-aos-duration="1000">
                        <p className="time">  Q1 2026</p>
                        <h5 className="title">Mainnet Launch</h5>
                        <ul className="list">
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Bandwidth-based UAX blockchain fully live</p>
                            </li>
                            <li>
                                <div className="dot"></div>
                                <p className="fs-17">Validator payouts begin</p>
                            </li>
                              <li>
                                <div className="dot"></div>
                                <p className="fs-17">Cross-chain bridge, explorer, wallet, DAO go public</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}