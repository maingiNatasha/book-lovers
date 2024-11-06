import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './navigation/Header';
import Sidebar from './navigation/Sidebar';
import MobileSidebar from './navigation/MobileSidebar';

const Layout = ({ theme, toggleTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className=''>
            <Header theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
            <div className='md:flex'>
                <Sidebar sidebarOpen={sidebarOpen} theme={theme} />
                <main className='p-6 md:py-10 md:px-10 lg:px-20'>
                    {/* Render child route elements */}
                    <Outlet />
                </main>
            </div>
            <MobileSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} theme={theme} />
        </div>
    )
}

export default Layout