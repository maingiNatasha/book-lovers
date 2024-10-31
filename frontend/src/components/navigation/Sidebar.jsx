import React from 'react';
import classNames from 'classnames';
import { links } from '../../localData/navLinks';
import { Link } from 'react-router-dom';

const Sidebar = ({ sidebarOpen, theme }) => {
    const sidebarClasses = classNames(
        'flex flex-col h-[92vh] hidden md:block',
        {
            'md:w-52 lg:w-64': sidebarOpen,
            'w-20': !sidebarOpen
        }
    );

    return (
        <div className={sidebarClasses}>
            <div className="pl-6 pt-6">
                <ul className='mt-4 space-y-10 lg:text-lg font-semibold'>
                    {links.map((link) => (
                        <li key={link.id} className={`links${theme === 'dark' ? '-dark' : ''} items-center`}>
                            <Link to={link.link}>
                                <span className='flex'>
                                    <link.icon size={30} className='mr-6' />
                                    {sidebarOpen && <span>{link.name}</span>}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
};

export default Sidebar;