import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = ({ errorImage, title, subTitle, footer }) => {
    return (
        <>
            <Header></Header>
            <main>
                <section className='py-20'>
                    <div className='container'>
                        <div className='text-center my-20'>
                            <img className='mx-auto mb-4' src={errorImage} alt='Error Image' />
                            <h1 className='text-3xl md:text-[48px] font-semibold text-heading mb-2'>{title}</h1>
                            <p className='text-base md:text-lg mb-6'>{subTitle}</p>
                            <Link to='/' className="w-fit mx-auto font-semibold text-white bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center py-3.5 px-10 rounded-sm">Go Back!</Link>
                        </div>
                    </div>
                </section>
            </main>
            <div className={`${footer ? footer : 'block'}`}>
                <Footer></Footer>
            </div>
        </>
    );
};

export default ErrorPage;