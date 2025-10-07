import React from 'react';
import Hero from '../../components/Hero/Hero';
import States from '../../components/States/States';
import TrendingApps from '../TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {

    const trendingAppsData = useLoaderData();

    return (
        <>
            <Hero></Hero>
            <States></States>
            <TrendingApps trendingAppsData={trendingAppsData}></TrendingApps>
        </>
    );
};

export default Home;