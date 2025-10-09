import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

import icon_downloads from '../../assets/icon-downloads.png'
import icon_ratings from '../../assets/icon-ratings.png'
import icon_review from '../../assets/icon-review.png'
import { Bar, BarChart, CartesianGrid, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { addToStoredApps, getStoredApp } from '../../utility/addToDB';
import { toast } from 'react-toastify';
import ErrorPage from '../ErrorPage/ErrorPage';
import appError from '../../assets/App-Error.png';

const AppDetails = () => {

    const { id } = useParams();
    const appId = parseInt(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app => app.id === appId);
    const [installApp, setInstallApp] = useState(false);

    useEffect(() => {
        const storedApps = getStoredApp();
        const convertedStoredApps = storedApps.map(id => parseInt(id));
        if (convertedStoredApps.includes(appId)) {
            setInstallApp(true);
        }
    }, [appId]);

    // Handle Install App
    const handleInstall = () => {
        addToStoredApps(id);
        setInstallApp(true);
        toast(`Yahoo ⚡!! ${title} Installed Successfully`)
    }

    if (!singleApp) {
        return (
            <ErrorPage
                errorImage={appError}
                title='OPPS!! APP NOT FOUND'
                subTitle='The App you are requesting is not found on our system.  please try another apps'
            ></ErrorPage>
        );
    }

    const { image, description, title, ratingAvg, downloads, companyName, reviews, size, ratings } = singleApp;
    const sortedRatings = [...ratings].reverse();

    return (
        <section className='app-details pt-[87px]'>
            <div className='container'>
                <div className='pt-10 lg:pt-20 pb-11'>
                    <div className='flex flex-wrap -mx-3 lg:-mx-5'>
                        <div className='w-8/12 md:w-6/12 lg:w-3/12 px-3 lg:px-5 mb-6 lg:mb-0'>
                            <div className='bg-white rounded-sm p-8 md:py-7 md:px-10 shadow-lg h-full flex justify-center items-center'>
                                <img className='w-full rounded-sm' src={image} alt='App Icon' />
                            </div>
                        </div>
                        <div className='w-full lg:w-9/12 px-3 lg:px-5'>
                            <h1 className='text-[32px] font-bold mb-2 text-heading'>{title}</h1>
                            <h5 className='text-xl font-semibold'>Developed by <span className='linear-gradient-1'>{companyName}</span></h5>
                            <hr className='border-0 border-t border-[#001931] opacity-20 my-7' />
                            <div className='flex flex-col md:flex-row items-start lg:items-center gap-6 mb-7'>
                                <div className='w-full md:w-[150px]'>
                                    <img className='w-[40px] h-[40px] mb-2' src={icon_downloads} alt='icon_downloads' />
                                    <span className='mb-2 inline-block'>Downloads</span>
                                    <h2 className='text-4xl text-heading font-extrabold'>{downloads}</h2>
                                </div>
                                <div className='w-full md:w-[150px]'>
                                    <img className='w-[40px] h-[40px] mb-2' src={icon_ratings} alt='icon_ratings' />
                                    <span className='mb-2 inline-block'>Average Ratings</span>
                                    <h2 className='text-4xl text-heading font-extrabold'>{ratingAvg}</h2>
                                </div>
                                <div className='w-full md:w-[150px]'>
                                    <img className='w-[40px] h-[40px] mb-2' src={icon_review} alt='icon_review' />
                                    <span className='mb-2 inline-block'>Total Reviews</span>
                                    <h2 className='text-4xl text-heading font-extrabold'>{reviews}</h2>
                                </div>
                            </div>
                            <button onClick={handleInstall} disabled={installApp} className={`py-3 px-6 rounded-sm ${installApp ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] hover:bg-[#00af78] cursor-pointer'} text-white  text-lg font-semibold duration-300`}>
                                {installApp ? 'Installed' : `Install Now (${size} MB)`}
                            </button>
                        </div>
                    </div>
                    <hr className='border-0 border-t border-[#001931] opacity-20 my-10' />
                    <h2 className='text-2xl font-semibold mb-6 text-heading'>Ratings</h2>
                    <div className='charts w-full h-[400px]'>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={sortedRatings}
                                layout="vertical"
                                margin={{ top: 10, right: 0, left: -10, bottom: 0 }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis
                                    type="category"
                                    dataKey="name"
                                    tick={{ fontSize: 14 }}
                                />

                                <Tooltip
                                    cursor={{ fill: "rgba(136, 132, 216, 0.1)" }}
                                    contentStyle={{
                                        backgroundColor: "#fff",
                                        borderRadius: "4px",
                                        border: "1px solid #ddd",
                                        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                                    }}
                                />
                                <Bar
                                    dataKey="count"
                                    fill="#FF8811"
                                    activeBar={<Rectangle fill="#D56B00" stroke="#FFB872" />}
                                    barSize={32}
                                // radius={[4, 4, 4, 4]}
                                // label={{ position: "right", fill: "#333" }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <hr className='border-0 border-t border-[#001931] opacity-20 my-10' />
                    <h2 className='text-2xl font-semibold mb-6 text-heading'>Description</h2>
                    <div className='space-y-5'>
                        {
                            description.map((singleDescription, index) => <p key={index}>{singleDescription}</p>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDetails;