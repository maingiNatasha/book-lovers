import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../navigation/Header';
import Sidebar from '../navigation/Sidebar';
import MobileSidebar from '../navigation/MobileSidebar';
import { useSidebar } from '../contexts/SidebarContext';
import classNames from 'classnames';

const Layout = () => {
    const hamburgerButtonRef = useRef(null);
    const sidebarRef = useRef(null);

    const { sidebarOpen } = useSidebar();

    return (
        <div className=''>
            <Header hamburgerButtonRef={hamburgerButtonRef} />
            <div className='md:flex'>
                <Sidebar sidebarRef={sidebarRef} />
                <main className={classNames(
                    'flex-1 p-6 md:py-10',
                    {
                        'md:px-5 xl:px-10' : sidebarOpen,
                        'md:px-10 xl:px-20' : !sidebarOpen
                    }
                )}>
                    {/* Render child route elements */}
                    <Outlet />
                </main>
            </div>
            <MobileSidebar hamburgerButtonRef={hamburgerButtonRef} sidebarRef={sidebarRef} />
        </div>
    )
}

export default Layout