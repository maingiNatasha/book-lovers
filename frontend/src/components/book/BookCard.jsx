import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpenReader } from "react-icons/fa6";
import ImageShimmer from './ImageShimmer';
import classNames from 'classnames';

const BookCard = ({ book, childVariants }) => {
    const [imageLoading, setImageLoading] = useState(true);

    return (
        <motion.div
            key={book.key}
            className='relative group p-2 shadow-md shadow-purple-950 dark:shadow-purple-800 rounded-lg hover:shadow-lg hover:shadow-purple-900 dark:hover:shadow-purple-700'
            variants={childVariants}
            whileHover={{
                scale: 1.05,
                y: -3,
                transition: {
                    duration: 0.25,
                    ease: 'easeInOut'
                }
            }}
        >
            <div className='relative'>
                {/* Show shimmer until image loads */}
                {imageLoading && (
                    <div className="absolute inset-0">
                        <ImageShimmer />
                    </div>
                )}
                <img
                    src={book.cover_id ? `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg` : '/images/unavailable.webp'}
                    srcSet={book.cover_id
                        ? `
                            https://covers.openlibrary.org/b/id/${book.cover_id}-S.jpg 100w,
                            https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg 150w,
                            https://covers.openlibrary.org/b/id/${book.cover_id}-L.jpg 300w,
                            `
                        : '/images/unavailable.webp'
                    }
                    alt={book.title}
                    loading='lazy'
                    onLoad={() => setImageLoading(false)} // Set image as loaded
                    className={classNames(
                        'w-[200px] md:h-[220px] lg:w-[210px] lg:h-[240px] xl:h-[220px] mx-auto object-center my-2 transition-opacity duration-300',
                        {
                            'opacity-0' : imageLoading,
                            'opacity-100' : !imageLoading
                        }
                    )}
                />
            </div>
            <div className='px-3 py-1 lg:py-3'>
                <h3 className='font-bold'>{book.title}</h3>
                <p className='mt-2'>
                    <strong>By: </strong>
                    {book.authors ? `${book.authors.slice(0, 2).map(author => author.name).join(', ')}${book.authors.length > 3 ? ' ...' : ''}`  : 'Unknown Author'}
                </p>
            </div>
            <div className='absolute inset-0 bg-black bg-opacity-45 dark:bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md'>
                <FaBookOpenReader className='text-purple-100 text-5xl' />
            </div>
        </motion.div>
    );
};

export default BookCard;