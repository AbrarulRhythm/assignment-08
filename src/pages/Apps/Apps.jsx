import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import TextBanner from '../../components/TextBanner/TextBanner';
import { IoSearchOutline } from 'react-icons/io5';
import App from '../App/App';
import Loading from '../../components/Loading/Loading';

const Apps = () => {

    const appsFromLoader = useLoaderData();
    const [apps, setApps] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setApps(appsFromLoader);
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [appsFromLoader]);

    // Search Handler
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        // Search Loader
        if (value.trim() !== '') {
            setSearchLoading(true);
            setTimeout(() => {
                setSearchLoading(false);
            }, 3000)
        }
        else {
            setSearchLoading(false);
        }
    };

    // Filtered Apps
    const filteredApps = searchTerm.trim() === '' ? apps : apps.filter(app => app.title.toLowerCase().includes(searchTerm.toLowerCase()));

    // Clear Search Tarm
    const handleClearSearchTarm = () => {
        setSearchTerm('');
    }

    return (
        <section className='apps pt-20'>
            <div className='container'>
                <TextBanner
                    title='Our All Applications'
                    subTitle='Explore All Apps on the Market developed by us. We code for Millions'
                ></TextBanner>

                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between mb-6'>
                    <h3 className='text-2xl font-semibold text-heading'>({filteredApps.length}) Apps Found</h3>
                    <div className='relative flex items-center w-full lg:w-auto'>
                        <IoSearchOutline className='text-[22px] absolute left-4' />
                        <input onChange={handleSearch} value={searchTerm} className='pl-11 px-4 py-3 rounded-sm border border-[#D2D2D2] w-[400px] outline-0 focus:border-[#632EE3]' type='text' placeholder='Search Apps' />
                    </div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        loading ? (
                            <div className='py-20 w-full'>
                                <Loading></Loading>
                            </div>
                        ) : searchLoading ? (
                            <div className='py-20 w-full'>
                                <Loading></Loading>
                            </div>
                        ) : filteredApps.length === 0 ? (
                            <div className='w-full text-center py-10'>
                                <h1 className='text-3xl md:text-5xl font-bold mb-8'>No Apps Found</h1>
                                <button onClick={handleClearSearchTarm} className="inline-block font-semibold text-sm text-white bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] py-3 px-8 rounded-sm cursor-pointer">
                                    Show All
                                </button>
                            </div>
                        ) : (
                            filteredApps.map((app) => {
                                return (
                                    <App key={app.id} trendingApp={app}></App>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Apps;