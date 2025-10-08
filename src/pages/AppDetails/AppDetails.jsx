import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppDetails = () => {

    const { id } = useParams();
    const appId = parseInt(id);
    const appData = useLoaderData();
    const singleApp = appData.find(app => app.id === appId);
    console.log(singleApp);

    return (
        <section className='pt-[87px]'>
            <h1>App Details</h1>
        </section>
    );
};

export default AppDetails;