import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../context/themeContext';

import { datas } from '../../data';

import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isHovered, setIsHovered] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenAbtus, setisOpenAbtus] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileEcosystemOpen, setIsMobileEcosystemOpen] = useState(false);
    const [isMobileAboutOpen, setisMobileAboutOpen] = useState(false);
    const [isMobileComOpen, setisMobileComOpen] = useState(false);


    const { theme } = useContext(ThemeContext);

    return (
        <header className='fixed top-0 left-0 flex justify-between items-center h-[80px] w-full z-10'>
            <div className='container mx-auto sm:px-[12px] px-[18px]  ' >
                <div className='flex justify-between items-start xl:px-[80px] lg:px-[40px]'>
                    <div className="flex justify-between items-center xl:px-[80px] px-0 w-full">
                        <img
                            src={`/media/logo/${theme}.png`}
                            alt="UAX Logo"
                            width={130}
                        />
                        <nav>
                            <ul className='flex items-center'>
                                {/* <li className='mr-[40px] lg:block hidden'><Link to="/">Home</Link></li> */}
                                <li
                                    className='mr-[40px]  py-[30px] lg:block hidden'
                                    onMouseEnter={() => setisOpenAbtus(true)}
                                    onMouseLeave={() => setisOpenAbtus(false)}
                                >
                                    About Us
                                    <i className='fa-solid fa-chevron-down size-[14px] absolute right-[-24px] top-[34px]' />
                                    <AnimatePresence>
                                        {isOpenAbtus && (
                                            <motion.div className='absolute top-full left-0 fade-up dropdown'
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className='flex flex-col'>
                                                    <p className='text-[12px] font-extralight m-0'>Learn more about uax</p>
                                                    <div className="flex flex-wrap boxes">
                                                        {
                                                            datas.aboutus_header.map((_itm, _idx) => (
                                                                <div className="w-1/2 flex items-start box">
                                                                    <img src={`media/icons/${_itm.image}.png`} alt={_itm.image} className='mr-6' />
                                                                    <div className="flex flex-col">
                                                                        <a href={_itm.link}>
                                                                            <h4 className='text-[16px] leading-normal font-normal'>{_itm.title}</h4>
                                                                            <p className='my-0 text-[14px] font-light leading-normal'>{_itm.content}</p>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li
                                    className='mr-[40px]  py-[30px] lg:block hidden'
                                    onMouseEnter={() => setIsOpen(true)}
                                    onMouseLeave={() => setIsOpen(false)}
                                >
                                    Ecosystem
                                    <i className='fa-solid fa-chevron-down size-[14px] absolute right-[-24px] top-[34px]' />
                                    {/* <AnimatePresence>
                                        {isOpen && (
                                            <motion.ul className='absolute top-full left-0 sub-menu fade-up dropdown'
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <li
                                                    onMouseOver={() => setIsHovered(1)}
                                                    onMouseLeave={() => setIsHovered(0)}
                                                ><Link
                                                    to="/roadmap"
                                                >Uax Wallet</Link></li>
                                                <li
                                                    onMouseOver={() => setIsHovered(2)}
                                                    onMouseLeave={() => setIsHovered(0)}
                                                ><Link
                                                    to="/roadmap"
                                                >Uax DFS</Link></li>
                                                <li
                                                    onMouseOver={() => setIsHovered(3)}
                                                    onMouseLeave={() => setIsHovered(0)}
                                                ><Link
                                                    to="/roadmap"
                                                >Uax Scan</Link></li>
                                                <li
                                                    onMouseOver={() => setIsHovered(4)}
                                                    onMouseLeave={() => setIsHovered(0)}
                                                ><Link
                                                    to="/roadmap"
                                                >Github</Link></li>
                                                <AnimatePresence>
                                                    {isHovered !== 0 && (
                                                        <motion.div
                                                            className="line"
                                                            style={isHovered ? { top: 44 * isHovered } : { display: "none" }}
                                                            initial={{ width: 0 }}
                                                            animate={{ width: "100%" }}
                                                            transition={{ duration: 0.4 }}
                                                        />
                                                    )}
                                                </AnimatePresence>
                                            </motion.ul>
                                        )}
                                    </AnimatePresence> */}
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div className='absolute top-full left-0 fade-up dropdown'
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className='flex flex-col w-[740px]'>
                                                    <p className='text-[12px] font-extralight m-0'>Learn more about uax</p>
                                                    <div className="flex flex-wrap boxes">
                                                        {
                                                            datas.header.map((_itm, _idx) => (
                                                                <div className="w-1/3 flex px-2 items-start box">
                                                                    <img src={`media/icons/${_itm.image}.png`} alt={_itm.image} className='mr-6' />
                                                                    <div className="flex flex-col">
                                                                        <a href={_itm.link}>
                                                                            <h4 className='text-[16px] leading-normal font-normal'>{_itm.title}</h4>
                                                                            <p className='my-0 text-[14px] font-light leading-normal'>{_itm.content}</p>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                                <li
                                    className='mr-[40px]  py-[30px] lg:block hidden'
                                    onMouseEnter={() => setisMobileComOpen(true)}
                                    onMouseLeave={() => setisMobileComOpen(false)}
                                >
                                    Community & News
                                    <i className='fa-solid fa-chevron-down size-[14px] absolute right-[-24px] top-[34px]' />
                                    <AnimatePresence>
                                        {isMobileComOpen && (
                                            <motion.div className='absolute top-full left-0 fade-up dropdown'
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <div className='flex flex-col'>
                                                    <p className='text-[12px] font-extralight m-0'>Learn more about uax</p>
                                                    <div className="flex flex-wrap boxes">
                                                        {
                                                            datas.news_header.map((_itm, _idx) => (
                                                                <div className="w-1/2 flex items-start box">
                                                                    <img src={`media/icons/${_itm.image}.png`} alt={_itm.image} className='mr-6' />
                                                                    <div className="flex flex-col">
                                                                        <a href={_itm.link}>
                                                                            <h4 className='text-[16px] leading-normal font-normal'>{_itm.title}</h4>
                                                                            <p className='my-0 text-[14px] font-light leading-normal'>{_itm.content}</p>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </div>

                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                                {/* <li className='mr-[40px] lg:block hidden'>
                                    <Link to="/usecases">
                                        Usecases
                                    </Link>
                                </li>
                                <li className='mr-[40px] lg:block hidden'>
                                    <a href="/roadmap">
                                        Roadmap
                                    </a>
                                </li> */}
                                <li className='mr-[40px] lg:block hidden'>
                                    {/* <Link to="/">
                                        FAQ
                                    </Link> */}
                                    <a href="/#faq">FAQ</a>
                                </li>
                                {/* <li className='lg:block hidden'>
                                    <Link to="/whitepapper">
                                        Whitepaper
                                    </Link>
                                </li> */}
                                <li className='xl:ml-[100px] lg:ml-[80px] ml-[100px]  sm:block hidden'>
                                    <a href="/uaxdocs" className='btn'>
                                        Uax Docs
                                    </a>
                                </li>
                                <li className='lg:hidden block'>
                                    <div
                                        className="mobile-button"
                                        id={isMobileMenuOpen ? 'active' : ''}
                                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    >
                                        <span />
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div></div>
            </div>
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        id="main-nav-mobi"
                        className="main-nav overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <ul id="menu-primary-menu" className="menu overflow-hidden">
                            <li className="menu-item">
                                <a href="/" className="header-link" >Home</a>
                            </li>

                            <li
                                className="menu-item menu-item-has-children"
                                onClick={() => setisMobileAboutOpen(!isMobileAboutOpen)}
                            >
                                <a href="#" className="header-link">About Us</a>
                                <span className="icon-arrow" id={isMobileAboutOpen ? "active" : ""} />
                            </li>
                            <AnimatePresence>
                                {isMobileAboutOpen && (
                                    <motion.ul
                                        className='top-full w-full left-0 sub-menu fade-up'
                                        id="children-menu"
                                        initial={{ height: 0, visibility: "hidden" }}
                                        animate={{ height: "auto", visibility: "visible" }}
                                        exit={{ height: 0, visibility: "hidden" }}
                                        transition={{ duration: 0.4 }}
                                        style={{ display: "block", boxShadow: "none" }}
                                    >
                                        <li className="menu-item">
                                            <a
                                                // target="_blank"
                                                href="/aboutus"
                                                className="header-link"
                                            >About Us</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                // target="_blank"
                                                href="/usecases"
                                                className="header-link"
                                            >Usecases</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                // target="_blank"
                                                href="/tokenomics"
                                                className="header-link"
                                            >Tokenomics</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/roadmap"
                                                className="header-link"
                                            >Roadmap</a>
                                        </li>
                                        {/* <li className="menu-item">
                                            <a
                                                href="/podcasts"
                                                className="header-link"
                                            >Podcast</a>
                                        </li>
                                        
                                         <li className="menu-item">
                                            <a
                                                href="/presskit"
                                                className="header-link"
                                            >Presskit</a>
                                        </li> */}


                                        <li className="menu-item">
                                            <a
                                                href="/DAO"
                                                className="header-link"
                                            >Whitepaper</a>
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>

                            <li
                                className="menu-item menu-item-has-children"
                                onClick={() => setIsMobileEcosystemOpen(!isMobileEcosystemOpen)}
                            >
                                <a href="#" className="header-link">Ecosystem</a>
                                <span className="icon-arrow" id={isMobileEcosystemOpen ? "active" : ""} />
                            </li>
                            <AnimatePresence>
                                {isMobileEcosystemOpen && (
                                    <motion.ul
                                        className='top-full w-full left-0 sub-menu fade-up'
                                        id="children-menu"
                                        initial={{ height: 0, visibility: "hidden" }}
                                        animate={{ height: "auto", visibility: "visible" }}
                                        exit={{ height: 0, visibility: "hidden" }}
                                        transition={{ duration: 0.4 }}
                                        style={{ display: "block", boxShadow: "none" }}
                                    >
                                        <li className="menu-item">
                                            <a
                                                target="_blank"
                                                href="https://uaxwallet.com"
                                                className="header-link"
                                            >Uax Wallet</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                target="_blank"
                                                href="https://dfs.uax.network/"
                                                className="header-link"
                                            >Uax DFS</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                target="_blank"
                                                href="https://uaxscan.com/"
                                                className="header-link"
                                            >Uax scan</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="https://github.com/uaxnetwork"
                                                className="header-link"
                                            >Github</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/innovative"
                                                className="header-link"
                                            >Technology</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/DAO"
                                                className="header-link"
                                            >DAO's</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/staking"
                                                className="header-link"
                                            >Staking</a>
                                        </li>
                                    </motion.ul>
                                )}
                            </AnimatePresence>

                            <li
                                className="menu-item menu-item-has-children"
                                onClick={() => setisMobileComOpen(!isMobileComOpen)}
                            >
                                <a href="#" className="header-link">Community & News</a>
                                <span className="icon-arrow" id={isMobileComOpen ? "active" : ""} />
                            </li>
                            <AnimatePresence>
                                {isMobileComOpen && (
                                    <motion.ul
                                        className='top-full w-full left-0 sub-menu fade-up'
                                        id="children-menu"
                                        initial={{ height: 0, visibility: "hidden" }}
                                        animate={{ height: "auto", visibility: "visible" }}
                                        exit={{ height: 0, visibility: "hidden" }}
                                        transition={{ duration: 0.4 }}
                                        style={{ display: "block", boxShadow: "none" }}
                                    >
                                        {/* <li className="menu-item">
                                            <a
                                                target="_blank"
                                                href="https://uaxscan.com/"
                                                className="header-link"
                                            >Explorer</a>
                                        </li> */}
                                        {/* <li className="menu-item">
                                            <a
                                                // target="_blank"
                                                // href="https://dfs.uax.network/"
                                                className="header-link"
                                            >Usecases</a>
                                        </li> */}

                                        {/* <li className="menu-item">
                                            <a
                                                href="/roadmap"
                                                className="header-link"
                                            >Roadmap</a>
                                        </li> */}
                                        <li className="menu-item">
                                            <a
                                                href="/podcasts"
                                                className="header-link"
                                            >Podcast</a>
                                        </li>

                                        <li className="menu-item">
                                            <a
                                                href="/presskit"
                                                className="header-link"
                                            >Presskit</a>
                                        </li>
                                        <li className="menu-item">
                                            <a
                                                href="/governance"
                                                className="header-link"
                                            >Governance</a>
                                        </li>
                                        {/* <li className="menu-item">
                                            <a
                                                href="/governance"
                                                className="header-link"
                                            >Governance</a>
                                        </li>
                                       
                                          <li className="menu-item">
                                            <a
                                                href="/DAO"
                                                className="header-link"
                                            >Whitepaper</a>
                                        </li> */}
                                    </motion.ul>
                                )}
                            </AnimatePresence>



                            {/* <li className="menu-item">
                                <a href="#usecase" className="header-link">Usecases</a>
                            </li>

                            <li className="menu-item">
                                <a href="roadmap.html" className="header-link">Roadmap</a>
                            </li> */}

                            <li className="menu-item">
                                <a href="#faq" className="header-link">FAQ</a>
                            </li>
                            {/* <li className="menu-item">
                                <a target="_blank" href="" className="header-link">Whitepaper</a>
                            </li> */}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header >
    );
};
