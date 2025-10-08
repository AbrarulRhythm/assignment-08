import React from 'react';
import { useLoaderData } from 'react-router';
import TextBanner from '../../components/TextBanner/TextBanner';
import { IoSearchOutline } from 'react-icons/io5';
import App from '../App/App';

const Apps = () => {

    const apps = useLoaderData();

    return (
        <section className='apps pt-20'>
            <div className='container'>
                <TextBanner
                    title='Our All Applications'
                    subTitle='Explore All Apps on the Market developed by us. We code for Millions'
                ></TextBanner>

                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between mb-6'>
                    <h3 className='text-2xl font-semibold text-heading'>({apps.length}) Apps Found</h3>
                    <div className='relative flex items-center w-full lg:w-auto'>
                        <IoSearchOutline className='text-[22px] absolute left-4' />
                        <input className='pl-11 px-4 py-3 rounded-sm border border-[#D2D2D2] w-[400px] outline-0 focus:border-[#632EE3]' type='text' placeholder='Search Apps' />
                    </div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        apps.map((app) => {
                            return (
                                <App key={app.id} trendingApp={app}></App>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Apps;