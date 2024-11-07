import React from 'react';
import { LiaPenAltSolid } from "react-icons/lia";

const BookCard = ({ book }) => {
    return (
        <div key={book.key} className='p-2 shadow-md shadow-purple-950 dark:shadow-purple-500 rounded-lg'>
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
                className='w-[200px] lg:w-[210px] md:h-[220px] lg:h-[240px] mx-auto object-center my-2'
            />
            <div className='px-3'>
                <h3 className='font-bold'>{book.title}</h3>
                <p className='mt-2'>
                    <strong>By: </strong>
                    {book.authors ? `${book.authors.slice(0, 2).map(author => author.name).join(', ')}${book.authors.length > 3 ? ' ...' : ''}`  : 'Unknown Author'}
                </p>
            </div>
        </div>
    )
}

export default BookCard