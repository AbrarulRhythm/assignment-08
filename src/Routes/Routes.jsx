import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppDetails from '../pages/AppDetails/AppDetails';
import Apps from '../pages/Apps/Apps';
import Installations from '../pages/Installations/Installations';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/home-app.json'),
                Component: Home
            },
            {
                path: 'apps',
                loader: () => fetch('/home-app.json'),
                Component: Apps
            },
            {
                path: 'apps/:id',
                loader: () => fetch('/home-app.json'),
                Component: AppDetails
            },
            {
                path: 'installations',
                loader: () => fetch('/home-app.json'),
                Component: Installations
            }
        ]
    },
]);