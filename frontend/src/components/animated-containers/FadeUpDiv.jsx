import React from 'react';
import { motion } from 'framer-motion';

const FadeUpDiv = ({ children }) => {
    const fadeInVariants = {
        hidden: {
            opacity: 0,
            y: 150
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
                type: 'spring',
                stiffness: 50,
                damping: 10
            }
        }
    };

    return (
        <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default FadeUpDiv;