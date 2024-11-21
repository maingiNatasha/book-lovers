import React from 'react';
import { links } from '../../localData/navLinks';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../contexts/SidebarContext';
import { useTheme } from "../contexts/ThemeContext";
import classNames from 'classnames';

const SidebarLinks = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const { sidebarOpen } = useSidebar();
    const { theme } = useTheme();

    return (
        <ul className='mt-4 space-y-10 font-semibold'>
            {links.map((link) => {
                const isActive = currentPath === link.link;
                const themeClass = theme === 'dark' ? 'links-dark' : 'links-light';
                const activeClass = isActive ? `active${theme === 'dark' ? '-dark' : '-light'}` : '';

                return (
                    <li
                        key={link.id}
                        className={classNames(
                            'p-2 rounded-md',
                            themeClass,
                            activeClass,
                            sidebarOpen ? '' : 'flex justify-center'
                        )}
                    >
                        <Link to={link.link}>
                            <span className='flex'>
                                <link.icon size={30} className={sidebarOpen ? 'mr-6' : ''} />
                                <span className={`block md:hidden ${sidebarOpen ? '' : 'ml-6'}`}>{link.name}</span>
                                {sidebarOpen && <span className='hidden md:block'>{link.name}</span>}
                            </span>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SidebarLinks