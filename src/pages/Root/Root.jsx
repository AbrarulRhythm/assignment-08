import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Loading from '../../components/Loading/Loading';

const Root = () => {

    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 500);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        setLoading(true);
        setFadeOut(false);
        const timer = setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => setLoading(false), 500);
        }, 1000);

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            {
                loading ? (
                    <div className={`h-screen flex justify-center items-center ${fadeOut ? 'scale-200 duration-700 opacity-0 invisible' : ''}`}>
                        <Loading fadeOut={fadeOut}></Loading>
                    </div>
                ) : (
                    <>
                        <Header></Header>
                        <main>
                            <Outlet></Outlet>
                        </main>
                        <Footer></Footer>

                        <ToastContainer />
                    </>
                )
            }
        </>
    );
};

export default Root;