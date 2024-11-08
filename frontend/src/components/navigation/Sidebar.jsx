import React from 'react';
import classNames from 'classnames';
import { links } from '../../localData/navLinks';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, theme, sidebarRef }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const sidebarClasses = classNames(
        'flex flex-col h-[92vh] hidden md:block sticky top-14',
        {
            'md:w-52 lg:w-64': sidebarOpen,
            'w-20': !sidebarOpen
        }
    );

    return (
        <div ref={sidebarRef} className={sidebarClasses}>
            <div className="pl-6 pt-6">
                <ul className='mt-4 space-y-10 font-semibold'>
                    {links.map((link) => {
                        const isActive = currentPath === link.link;
                        const themeClass = theme === 'dark' ? 'links-dark' : 'links-light';
                        const activeClass = isActive ? `active${theme === 'dark' ? '-dark' : '-light'}` : '';

                        return (
                            <li key={link.id} className={`${sidebarOpen ? '' : 'flex justify-center'} p-2 rounded-md ${themeClass} ${activeClass}`}>
                                <Link to={link.link}>
                                    <span className='flex'>
                                        <link.icon size={30} className={sidebarOpen ? 'mr-6' : ''} />
                                        {sidebarOpen && <span>{link.name}</span>}
                                    </span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;