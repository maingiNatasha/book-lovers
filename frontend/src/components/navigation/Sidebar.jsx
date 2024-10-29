import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import classNames from 'classnames';

const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
    const sidebarClasses = classNames(
        'fixed top-14 left-0 h-full w-64 bg-gray-800 text-white transition-all ease-in-out duration-300 hidden md:block',
        {
            'w-64': sidebarOpen,
            'w-24': !sidebarOpen
        }
    );

    return (
        <aside className={sidebarClasses}>
            <div className={`${sidebarOpen ? 'p-6' : 'p-5'}`}>
                <ul className='mt-4 space-y-10'>
                    <li>
                        <span className='flex'>
                            <FaUserCircle size={30} className='mr-6' />
                            {sidebarOpen && <span>Profile</span>}
                        </span>
                    </li>
                    <li>
                        <span className='flex'>
                            <FaHome size={30} className='mr-6' />
                            {sidebarOpen && <span>Home</span>}
                        </span>
                    </li>
                    <li>
                        <span className='flex'>
                            <BiSolidCategory size={30} className='mr-6' />
                            {sidebarOpen && <span>Categories</span>}
                        </span>
                    </li>
                </ul>
            </div>
        </aside>
    )
};

export default Sidebar;