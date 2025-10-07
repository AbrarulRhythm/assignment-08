import React from 'react';

import playStore from '../../assets/play-store.png';
import appStor from '../../assets/app-store.png';
import hero from '../../assets/hero.png';

const Hero = () => {
    return (
        <section className='hero-section pt-[87px]'>
            <div className='pt-10 lg:pt-20 text-center'>
                <div className='container'>
                    <h1 className='text-[42px] md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-4'>We Build <br /> <span className='linear-gradient-1'>Productive</span> Apps</h1>
                    <p className='text-base md:text-lg'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hidden lg:block' />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div className='mt-8 md:mt-10 flex justify-center gap-4 flex-col md:flex-row items-center'>
                        <a className='w-fit flex items-center gap-2.5 text-lg font-semibold text-heading border border-[#D2D2D2] rounded-sm py-3 px-6 hover:bg-gray-200 duration-300' href='https://play.google.com/store/' target='_blank'><img className='w-[32px] h-[32px]' src={playStore} alt='Google Paly Store' /> Google Play</a>
                        <a className='w-fit flex items-center gap-2.5 text-lg font-semibold text-heading border border-[#D2D2D2] rounded-sm py-3 px-6 hover:bg-gray-200 duration-300' href='https://www.apple.com/app-store/' target='_blank'><img className='w-[32px] h-[32px]' src={appStor} alt='Google Paly Store' /> App Store</a>
                    </div>
                    <div className='mt-10'>
                        <img className='m-auto' src={hero} alt='Hero Image' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;