import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const [navBar, setNavBar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavBar(true)
        } else {
            setNavBar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <div className={navBar ? 'navBar active z-50' : 'navBar z-50'}>
            <div className="text-start">
                <div className="dropdown">
                    <label tabIndex="0" className="lg:hidden flex justify-start w-96">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow font-bold bg-white rounded-box w-52">
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                        <li><Link to='/about'>ABOUT</Link></li>
                        <Link to='/login' className="btn btn-primary font-serif">Sign Out</Link>
                        :
                        <Link to='/login' className="uppercase font-bold font-serif">Login</Link>

                    </ul>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex justify-center items-center">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li>
                        <NavLink to='/home' className={({ isActive }) => isActive ? 'text-secondary' : ''}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-secondary' : ''}>CONTACT</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={({ isActive }) => isActive ? 'text-secondary' : ''}>ABOUT</NavLink>
                    </li>
                    <NavLink to='/login' className="mt-3 ml-2 uppercase font-bold">Login</NavLink>


                </ul>
            </div>
        </div>
    );
};

export default NavBar;