import React from 'react';
import App from '../App/App';
import { Link } from 'react-router';

const TrendingApps = ({ trendingAppsData }) => {
    return (
        <section className='trending-apps py-20'>
            <div className='container'>
                <div className='text-center mb-10'>
                    <h1 className='text-[48px] font-bold text-heading mb-3'>Trending Apps</h1>
                    <p className='text-lg'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        trendingAppsData.map((trendingApp) => {
                            return (
                                <App key={trendingApp.id} trendingApp={trendingApp}></App>
                            )
                        })
                    }
                </div>
                <div className='text-center mt-4'>
                    <Link to='/apps' className="inline-block font-semibold text-white bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] py-[14px] px-10 rounded-sm">Show All</Link>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;