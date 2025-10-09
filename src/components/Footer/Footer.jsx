import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { TbMap2 } from 'react-icons/tb';
import { TfiEmail } from 'react-icons/tfi';
import footerLogo from '../../assets/logo.png';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className='pt-20 bg-body-bg-2 mt-[56px] text-white'>
            <div className='container'>
                <div className='first-footer mb-8'>
                    <div className='flex flex-col lg:flex-row justify-between gap-6 items-start lg:items-center p-6 border border-[#ffffff1a] rounded-sm'>
                        <div className='flex items-center gap-4'>
                            <div className='w-[65px] h-[65px] bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center justify-center text-center text-2xl rounded-sm'>
                                <BsTelephone />
                            </div>
                            <div>
                                <h5 className='text-lg font-semibold mb-1'>Call us</h5>
                                <span className='text-gray-300'>+1 123-456-0606</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-[65px] h-[65px] bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center justify-center text-center text-2xl rounded-sm'>
                                <TfiEmail />
                            </div>
                            <div>
                                <h5 className='text-lg font-semibold mb-1'>Write to us</h5>
                                <span className='text-gray-300'>info@hero.io.com</span>
                            </div>
                        </div>
                        <div className='flex items-center gap-4'>
                            <div className='w-[65px] h-[65px] bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center justify-center text-center text-2xl rounded-sm'>
                                <TbMap2 />
                            </div>
                            <div>
                                <h5 className='text-lg font-semibold mb-1'>Address</h5>
                                <span className='text-gray-300'>24 King St, SC 29401 USA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* second-footer */}
                <div className='second-footer'>
                    <div className='flex flex-wrap -mx-3'>
                        <div className='w-full md:w-4/12 px-3'>
                            <div className='py-6 md:py-11'>
                                <div className='flex items-center gap-2 mb-4'>
                                    <img className='w-[60px]' src={footerLogo} alt='Footer Logo' />
                                    <h5 className='text-xl font-bold'>HERO.IO</h5>
                                </div>
                                <p className='mb-4 text-gray-300'>Quisque imperdiet sapien porttito the bibendum sellentesque the commodo erat acar accumsa lobortis, enim diam the nesuen.</p>
                                <div className=' flex items-center gap-4'>
                                    <div className='w-[40px] h-[40px] bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center justify-center text-sm rounded-4xl'>
                                        <FaFacebookF />
                                    </div>
                                    <div className='w-[40px] h-[40px] bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center justify-center text-sm rounded-4xl'>
                                        <FaXTwitter />
                                    </div>
                                    <div className='w-[40px] h-[40px] bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center justify-center text-sm rounded-4xl'>
                                        <FiInstagram />
                                    </div>
                                    <div className='w-[40px] h-[40px] bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center justify-center text-sm rounded-4xl'>
                                        <FaYoutube />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-3/12 ml-0 lg:ml-[95px] px-3'>
                            <div className='py-6 md:py-11'>
                                <h3 className='text-2xl font-bold mb-4'>Quick Links</h3>
                                <ul className='text-gray-300 space-y-4'>
                                    <li>About</li>
                                    <li>User Guide</li>
                                    <li>Apps</li>
                                    <li>Our Blogs</li>
                                </ul>
                            </div>
                        </div>
                        <div className='w-full md:w-4/12 px-3'>
                            <div className='py-6 md:py-10'>
                                <h3 className='text-2xl font-bold mb-4'>Subscribe</h3>
                                <p className='text-gray-300 mb-6'>Sign up for our monthly blogletter to stay informed about new apps and guids</p>
                                <form>
                                    <div className='relative'>
                                        <input className='w-full bg-white text-gray-800 text-sm py-4 px-6 rounded-sm h-[60px] outline-0 focus:border-[#632EE3]' type="email" placeholder='Email Address' />
                                        <button type='submit' className='bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] px-6 rounded-sm  h-[50px] absolute top-[50%] translate-y-[-50%] right-[5px]'>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='border-0 border-t border-[#ffffff1a] mt-8' />
                <div className='text-center py-6'>
                    <p className='text-gray-300'>Copyright &copy; 2025 - All right reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;