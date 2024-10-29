import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";

const MobileSidebar = ({ sidebarOpen, toggleSidebar }) => {
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
                    className='md:hidden fixed top-14 h-full w-48 z-50 bg-gray-800 text-white'
                >
                    <div className='p-4'>
                        <ul className='mt-4 space-y-10'>
                            <li onClick={toggleSidebar}>
                                <span className='flex'><FaUserCircle size={30} className='mr-6' /> Profile</span>
                            </li>
                            <li onClick={toggleSidebar}>
                                <span className='flex'><FaHome size={30} className='mr-6' /> Home</span>
                            </li>
                            <li onClick={toggleSidebar}>
                                <span className='flex'><BiSolidCategory size={30} className='mr-6' /> Categories</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileSidebar