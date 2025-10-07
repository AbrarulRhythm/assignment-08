import React from 'react';

const States = () => {

    const statesData = [
        {
            subTitle1: 'Total Downloads',
            subTitle2: '21% more than last month',
            count: '29.6M'
        },
        {
            subTitle1: 'Total Reviews',
            subTitle2: '46% more than last month',
            count: '906K'
        },
        {
            subTitle1: 'Active Apps',
            subTitle2: '31 more will Launch',
            count: '132+'
        }
    ]

    return (
        <section className='states py-10  lg:py-20 bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)]'>
            <div className='container'>
                <h1 className='text-center text-[#fff] text-3xl lg:text-[48px] font-bold mb-10 leading-[1.4]'>Trusted by Millions, Built for You</h1>

                <div className='flex flex-wrap -mx-3 justify-center'>
                    {
                        statesData.map((state, index) => {
                            return (
                                <div key={index} className='w-full md:w-6/12 lg:w-4/12 px-3 text-center mb-6 lg:mb-0'>
                                    <span className='block text-base font-normal mb-2 lg:mb-4 text-white opacity-80'>{state.subTitle1}</span>
                                    <h1 className='text-[48px] lg:text-7xl text-white font-extrabold mb-2 lg:mb-4'>{state.count}</h1>
                                    <span className='block text-base font-normal text-white opacity-80'>{state.subTitle2}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default States;