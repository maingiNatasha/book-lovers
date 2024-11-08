import React, { useState, useCallback, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './navigation/Header';
import Sidebar from './navigation/Sidebar';
import MobileSidebar from './navigation/MobileSidebar';

const Layout = ({ theme, toggleTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const hamburgerButtonRef = useRef(null);
    const sidebarRef = useRef(null);

    const toggleSidebar = useCallback(() => {
        setSidebarOpen((prev) => !prev);
    }, []);

    return (
        <div className=''>
            <Header theme={theme} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} hamburgerButtonRef={hamburgerButtonRef} />
            <div className='md:flex'>
                <Sidebar sidebarOpen={sidebarOpen} theme={theme} sidebarRef={sidebarRef} />
                <main className='flex-1 p-6 md:py-10 md:px-10 lg:px-20'>
                    {/* Render child route elements */}
                    <Outlet />
                </main>
            </div>
            <MobileSidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} theme={theme} hamburgerButtonRef={hamburgerButtonRef} sidebarRef={sidebarRef} />
        </div>
    )
}

export default Layout