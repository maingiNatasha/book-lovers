import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { links } from '../../localData/navLinks';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const MobileSidebar = ({ sidebarOpen, toggleSidebar, theme }) => {
    const sidebarClasses = classNames(
        'md:hidden fixed top-12 h-[92vh] w-48 z-50',
        {
            'bg-[#160121]' : theme === 'dark',
            'bg-purple-50' : theme === 'light'
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
                            {links.map((link) => (
                                <li key={link.id} className={`links${theme === 'dark' ? '-dark' : ''} items-center`} onClick={toggleSidebar}>
                                    <Link to={link.link}>
                                        <span className='flex'>
                                            <link.icon size={30} className='mr-6' />
                                            <span>{link.name}</span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileSidebar