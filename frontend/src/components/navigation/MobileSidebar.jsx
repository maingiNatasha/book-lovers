import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
import useClickOutside from '../custom_hooks/useClickOutside';
import { useSidebar } from '../contexts/SidebarContext';
import { useTheme } from "../contexts/ThemeContext";
import SidebarLinks from './SidebarLinks';
import SlideInDiv from '../animated-containers/SlideInDiv';

const MobileSidebar = ({ hamburgerButtonRef, sidebarRef }) => {
    const MobileSidebarRef = useRef(null);
    const { sidebarOpen, toggleSidebar } = useSidebar();
    const { theme } = useTheme();

    const sidebarClasses = classNames(
        'md:hidden fixed top-14 h-[92vh] w-56 z-50',
        {
            'bg-gradient-to-r from-[#160121] to-black' : theme === 'dark',
            'bg-gradient-to-r from-white via-purple-50 to-purple-100' : theme === 'light'
        }
    );

    // Handle clicks outside the sidebar
    useClickOutside([MobileSidebarRef, hamburgerButtonRef, sidebarRef], () => {
        if (sidebarOpen) toggleSidebar();
    });

    return (
        <AnimatePresence>
            {sidebarOpen && (
                <motion.div
                    ref={MobileSidebarRef}
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
                        <SlideInDiv>
                            <SidebarLinks />
                        </SlideInDiv>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default MobileSidebar