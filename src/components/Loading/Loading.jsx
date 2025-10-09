import React from 'react';;
import Logo from '../../assets/logo.png';

const Loading = () => {
    return (
        <div className='flex items-center justify-center uppercase text-3xl md:text-4xl font-bold tracking-[0.2em]'>
            <span>L</span>
            <img className='rotate-logo w-[58px] md:w-[75px] ml-4 mr-4 opacity-55' src={Logo} alt="" />
            <span>oading</span>
        </div>
    );
};

export default Loading;