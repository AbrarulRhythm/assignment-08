import React from 'react';

const TextBanner = ({ title, subTitle }) => {
    return (
        <div className='banner text-center pt-10 md:pt-20 pb-10'>
            <h1 className='text-[32px] md:text-[38px] lg:text-[48px] font-bold text-heading mb-3 md:mb-4'>{title}</h1>
            <p className='text-base md:text-xl font-normal'>{subTitle}</p>
        </div>
    );
};

export default TextBanner;