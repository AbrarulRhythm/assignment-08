import React, { useEffect, useState } from 'react';
import TextBanner from '../../components/TextBanner/TextBanner';
import { IoCaretDownSharp } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import { getStoredApp } from '../../utility/addToDB';
import SingleInstallation from '../SingleInstallation/SingleInstallation';

const Installations = () => {

    const [installedApps, setInstalledApps] = useState([]);
    const [sort, setSort] = useState('');
    const apps = useLoaderData();

    useEffect(() => {
        const storedAppsData = getStoredApp();
        const convertedStoredApps = storedAppsData.map(id => parseInt(id));
        const myInstalledApps = apps.filter(app => convertedStoredApps.includes(app.id));
        setInstalledApps(myInstalledApps);
    }, [apps]);

    const convertDownloadsToNumber = (downloads) => {
        let number = 0;

        if (downloads.endsWith('M')) {
            number = parseInt(downloads.slice(0, -1)) * 1000000;
        }
        else if (downloads.endsWith('K')) {
            number = parseInt(downloads.slice(0, -1)) * 1000;
        }
        else {
            number = parseInt(downloads);
        }

        return number;
    }

    const handleSort = (type) => {
        setSort(type);

        if (type === 'low_high') {
            const sotredByLowHigh = [...installedApps].sort((a, b) => {
                const aDownloads = convertDownloadsToNumber(a.downloads);
                const bDownloads = convertDownloadsToNumber(b.downloads);
                return aDownloads - bDownloads;
            });
            setInstalledApps(sotredByLowHigh);
        }

        if (type === 'high_low') {
            const sotredByLowHigh = [...installedApps].sort((a, b) => {
                const aDownloads = convertDownloadsToNumber(a.downloads);
                const bDownloads = convertDownloadsToNumber(b.downloads);
                return bDownloads - aDownloads;
            });
            setInstalledApps(sotredByLowHigh);
        }
    }

    return (
        <section className='installations pt-20'>
            <div className='container'>
                <TextBanner
                    title='Your Installed Apps'
                    subTitle='Explore All Trending Apps on the Market developed by us'
                ></TextBanner>

                <div className='flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between mb-6'>
                    <h3 className='text-2xl font-semibold text-heading'>({length}) Apps Found</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By Size  <IoCaretDownSharp /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('low_high')}>Low-High</a></li>
                            <li><a onClick={() => handleSort('high_low')}>High-Low</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        installedApps.map((installedApp) => {
                            return (
                                <SingleInstallation key={installedApp.id} installedApp={installedApp}></SingleInstallation>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Installations;