import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { links } from '../../localData/navLinks';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const MobileSidebar = ({ sidebarOpen, toggleSidebar, theme }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    const sidebarClasses = classNames(
        'md:hidden fixed top-12 h-[92vh] w-48 z-50',
        {
            'bg-gradient-to-r from-[#160121] to-black' : theme === 'dark',
            'bg-gradient-to-r from-white via-purple-50 to-purple-100' : theme === 'light'
        }
    );

    return (
        <AnimatePresence>
            {sidebarOpen && (
                <motion.div
                    initial={{
                        opacity: 0,
                        x: '-100%'
                    }}
                    animate={{
                        opacity: sidebarOpen ? 1 : 0,
                        x: sidebarOpen ? 0 : '-100%'
                    }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut'
                    }}
                    exit={{
                        opacity: 0,
                        x: '-100%'
                    }}
                    className={sidebarClasses}
                >
                    <div className='p-4'>
                        <ul className='mt-4 space-y-10 font-semibold'>
                            {links.map((link) => {
                                const isActive = currentPath === link.link;
                                const themeClass = theme === 'dark' ? 'links-dark' : 'links-light';
                                const activeClass = isActive ? `active${theme === 'dark' ? '-dark' : '-light'}` : '';

                                return (
                                    <li key={link.id} className={`p-2 rounded-md ${themeClass} ${activeClass}`} onClick={toggleSidebar}>
                                        <Link to={link.link}>
                                            <span className='flex'>
                                                <link.icon size={30} className='mr-6' />
                                                <span>{link.name}</span>
                                            </span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileSidebar