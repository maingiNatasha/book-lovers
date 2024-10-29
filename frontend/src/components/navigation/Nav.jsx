import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import Sidebar from "./Sidebar";
import MobileSidebar from './MobileSidebar';

const Nav = ({ theme, toggleTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <nav className='fixed w-full top-0 left-0 z-10 px-6 py-4 bg-gray-800 text-white'>
                <div className='flex justify-between'>
                    <div className='flex space-x-6'>
                        <button onClick={toggleSidebar}>
                            <GiHamburgerMenu size={30} />
                        </button>
                        <h1 className='font-bold text-2xl'>Title</h1>
                    </div>
                    <button onClick={toggleTheme}>
                        {theme === 'dark' ? <MdDarkMode size={30} /> : <MdOutlineLightMode size={30} /> }
                    </button>
                </div>
            </nav>
            <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
            <MobileSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        </>
    )
};

export default Nav;