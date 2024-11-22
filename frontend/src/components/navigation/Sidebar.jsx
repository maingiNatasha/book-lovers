import React from 'react';
import classNames from 'classnames';
import { useSidebar } from '../contexts/SidebarContext';
import SidebarLinks from './SidebarLinks';

const Sidebar = ({ sidebarRef }) => {
    const { sidebarOpen } = useSidebar();

    const sidebarClasses = classNames(
        'flex flex-col h-[92vh] hidden md:block sticky top-14',
        {
            'md:w-52 lg:w-60': sidebarOpen,
            'w-20': !sidebarOpen
        }
    );


    return (
        <div ref={sidebarRef} className={sidebarClasses}>
            <div className="pl-6 pt-6">
                <SidebarLinks />
            </div>
        </div>
    )
};

export default Sidebar;