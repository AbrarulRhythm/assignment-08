import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppDetails from '../pages/AppDetails/AppDetails';
import Apps from '../pages/Apps/Apps';
import Installations from '../pages/Installations/Installations';
import error404 from '../assets/error-404.png';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage
            errorImage={error404}
            title='Oops, page not found!'
            subTitle='The page you are looking for is not available.'
        ></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/home-app.json'),
                Component: Home
            },
            {
                path: 'apps',
                loader: () => fetch('/all-apps.json'),
                Component: Apps
            },
            {
                path: 'apps/:id',
                loader: () => fetch('/all-apps.json'),
                Component: AppDetails
            },
            {
                path: 'installations',
                loader: () => fetch('/all-apps.json'),
                Component: Installations
            }
        ]
    },
]);