import React from 'react';
import Logo from '../../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { FaGithub } from 'react-icons/fa';

const Header = () => {

    const links = <>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/apps'>Apps</NavLink>
        </li>
        <li>
            <NavLink to='/installation'>Installation</NavLink>
        </li>
    </>

    return (
        <header className='bg-white border-b border-[#E9E9E9] fixed top-0 left-0 right-0 z-50'>
            <nav>
                <div className='container'>
                    <div className="navbar py-4 px-0">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    {links}
                                </ul>
                            </div>
                            <Link to='/' className="flex items-center text-xl hover:opacity-65 duration-300" title='HERO.IO'>
                                <img className='w-[40px] h-[40px] mr-2' src={Logo} alt='Header Logo' />
                                <span className='text-base font-bold linear-gradient-1'>HERO.IO</span>
                            </Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {links}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a href='https://github.com/AbrarulRhythm' target='_blank' className="font-semibold text-white bg-[linear-gradient(125.04deg,#632EE3_5.68%,#9F62F2_88.38%)] flex items-center py-[11px] px-[15px] rounded-sm"><FaGithub className='text-lg mr-2.5' /> Contribute</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;