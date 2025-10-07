import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
            <Header></Header>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Root;