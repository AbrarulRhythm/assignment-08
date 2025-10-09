import React, { useEffect, useState } from 'react';
import TextBanner from '../../components/TextBanner/TextBanner';
import { IoCaretDownSharp } from 'react-icons/io5';
import { Link, useLoaderData } from 'react-router';
import { getStoredApp, removeStoredApps } from '../../utility/addToDB';
import SingleInstallation from '../SingleInstallation/SingleInstallation';
import { toast } from 'react-toastify';

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

    // Handle UnInstall
    const handleUninstall = (id, title) => {
        removeStoredApps(id);
        const updateInstalledApps = installedApps.filter(app => parseInt(app.id) !== parseInt(id));
        setInstalledApps(updateInstalledApps);
        toast(`🗑️ ${title} un-installed from your Device`);
    }

    const handleSort = (type) => {
        setSort(type);

        if (type === 'Low-High') {
            const sotredByLowHigh = [...installedApps].sort((a, b) => a.downloads - b.downloads);
            setInstalledApps(sotredByLowHigh);
        }

        if (type === 'High-Low') {
            const sotredByLowHigh = [...installedApps].sort((a, b) => b.downloads - a.downloads);
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

                <div className='flex items-center gap-4 justify-between mb-6'>
                    <h3 className='text-2xl font-semibold text-heading'>({installedApps.length}) Apps Found</h3>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1">{sort ? sort : 'Sort By Size'}  <IoCaretDownSharp /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('Low-High')}>Low-High</a></li>
                            <li><a onClick={() => handleSort('High-Low')}>High-Low</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-wrap -mx-3'>
                    {
                        installedApps.length === 0 &&
                        <div className='w-full text-center py-10'>
                            <h1 className='text-3xl md:text-5xl font-bold mb-8'>No apps installed</h1>
                            <Link to='/apps' className="inline-block font-semibold text-sm text-white bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] py-3 px-8 rounded-sm cursor-pointer">
                                Install App
                            </Link>
                        </div>
                    }
                    {
                        installedApps.map((installedApp) => {
                            return (
                                <SingleInstallation
                                    onUninstall={handleUninstall}
                                    key={installedApp.id}
                                    installedApp={installedApp}
                                ></SingleInstallation>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};

export default Installations;