import React from 'react';
import BookCard from './BookCard';
import ContentLoader from '../loaders/ContentLoader';
import Error from '../error/Error';
import { useSidebar } from '../contexts/SidebarContext';
import classNames from 'classnames';
import FadeUpDiv from '../animated-containers/FadeUpDiv';
import { motion } from 'framer-motion';

const BookList = ({ heading, loading, error, books }) => {
    const { sidebarOpen } = useSidebar();

    const parentVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    };

    return (
        <FadeUpDiv>
            <div
                className={classNames(
                    'px-5 sm:px-14 md:px-0',
                    {
                        'lg:px-2' : sidebarOpen,
                        'lg:px-12' : !sidebarOpen
                    }
                )}
            >
                <h1 className='text-3xl font-bold'>{heading}</h1>
                {loading ? (
                    <ContentLoader />
                ) : error ? (
                    <Error error={error} />
                ) : (
                    <motion.div
                        className={classNames(
                            'mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 md:gap-4',
                            {
                                'lg:gap-6' : sidebarOpen,
                                'lg:gap-10 xl:gap-8' :!sidebarOpen
                            }
                        )}
                        initial='hidden'
                        whileInView='visible'
                        variants={parentVariants}
                        viewport={{ once: true }}
                    >
                        {books.map((book) => (
                            <BookCard book={book} key={book.key} childVariants={childVariants} />
                        ))}
                    </motion.div>
                )}
            </div>
        </FadeUpDiv>
    );
};

export default BookList;