import React from 'react';

import appLogo from '../../assets/demo-app (3).webp';
import { GoStarFill } from 'react-icons/go';
import { FiDownload } from 'react-icons/fi';
import { removeStoredApps } from '../../utility/addToDB';

const SingleInstallation = ({ installedApp, onUninstall }) => {

    const { id, image, title, downloads, ratingAvg, size } = installedApp;

    // Handle UnInstall
    const handleUninstall = () => {
        onUninstall(id, title);
    }

    return (
        <div className='w-full px-3 mb-4'>
            <div className='bg-white p-4 rounded-sm flex flex-col md:flex-row gap-4 items-start md:items-center justify-between'>
                <div className='flex items-center gap-4'>
                    <div>
                        <img className='w-[80px] rounded-lg' src={appLogo} alt="" />
                    </div>
                    <div>
                        <h2 className='text-lg md:text-xl font-medium mb-3 md:mb-4 text-heading'>{title}</h2>
                        <div className='flex items-center gap-4'>
                            <div className='text-base text-[#00D390] font-medium flex items-center gap-1'>
                                <FiDownload /> {downloads}
                            </div>
                            <div className='text-base text-[#FF8811] font-medium flex items-center gap-1'>
                                <GoStarFill /> {ratingAvg}
                            </div>
                            <h5>{size} MB</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={handleUninstall} className='bg-[#00D390] hover:bg-[#00af78] duration-300 cursor-pointer text-base font-semibold py-3 px-6 rounded-sm text-white'>Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default SingleInstallation;