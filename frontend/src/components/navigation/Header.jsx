import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Header = ({ theme, toggleTheme, toggleSidebar }) => {
    return (
        <div className='flex justify-between items-center h-[8vh] px-6 py-4'>
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
    )
};

export default Header;