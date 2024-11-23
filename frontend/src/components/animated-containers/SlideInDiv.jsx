import React from 'react';
import { motion } from 'framer-motion';

const SlideInDiv = ({ direction='left', children }) => {
    const slideInVariants = {
        hidden: {
            opacity: 0,
            x: direction === 'left' ? -100 : 100,
        },
        visible: {
            opacity: 1,
            x: 0,
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
            variants={slideInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    );
};

export default SlideInDiv;