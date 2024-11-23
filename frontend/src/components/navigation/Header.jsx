import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import classNames from 'classnames';
import { useSidebar } from '../contexts/SidebarContext';
import { useTheme } from "../contexts/ThemeContext";

const Header = ({ hamburgerButtonRef }) => {
    const { theme, toggleTheme } = useTheme();
    const { toggleSidebar } = useSidebar();

    const headerClasses = classNames(
        'sticky top-0 z-10 bg-white flex justify-between items-center h-[8vh] px-6 py-4 shadow-md',
        {
            'bg-gradient-to-r from-white via-purple-100 to-purple-200': theme === 'light',
            'bg-gradient-to-r from-[#160121] to-black text-white': theme === 'dark'
        }
    );

    return (
        <header className={headerClasses}>
            <div className='flex space-x-6'>
                <button ref={hamburgerButtonRef} onClick={toggleSidebar} aria-label='Toggle sidebar'>
                    <GiHamburgerMenu size={30} />
                </button>
                <h1 className='font-extrabold text-2xl'>Book Hub</h1>
            </div>
            <button onClick={toggleTheme} aria-label='Toggle Theme'>
                {theme === 'dark' ? <MdDarkMode size={30} /> : <MdOutlineLightMode size={30} /> }
            </button>
        </header>
    )
};

export default Header;