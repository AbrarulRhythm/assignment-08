import React from 'react';
import { FaStar } from 'react-icons/fa';
import { TbDownload } from 'react-icons/tb';
import demo from '../../assets/demo-app (3).webp'
import { Link } from 'react-router';

const App = ({ trendingApp }) => {

    const { image, title, id, ratingAvg, downloads } = trendingApp;

    return (
        <div className='w-6/12 md:w-6/12 lg:w-3/12 px-3 mb-6'>
            <Link to={`/apps/${id}`}>
                <div className='p-4 rounded-sm bg-white hover:-translate-y-1 duration-300'>
                    <div className='mb-4'>
                        <img className='rounded-lg w-full' src={demo} alt='App Image' />
                    </div>
                    <h3 className='text-xl font-medium mb-4 text-heading'>{title}</h3>
                    <div className='flex justify-between'>
                        <div className='flex items-center text-base gap-1 py-1.5 px-2.5 rounded-sm text-green-app bg-[#F1F5E8]'>
                            <TbDownload /> {downloads}
                        </div>
                        <div className='flex items-center text-base gap-1 py-1.5 px-2.5 rounded-sm text-orange-app bg-[#FFF0E1]'>
                            <FaStar /> {ratingAvg}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default App;