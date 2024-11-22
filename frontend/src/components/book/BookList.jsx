import React from 'react';
import BookCard from './BookCard';
import ContentLoader from '../loaders/ContentLoader';
import Error from '../error/Error';
import { useSidebar } from '../contexts/SidebarContext';
import classNames from 'classnames';

const BookList = ({ heading, loading, error, books }) => {
    const { sidebarOpen } = useSidebar();

    return (
        <div className={classNames(
            'px-5 sm:px-14 md:px-0',
            {
                'lg:px-2' : sidebarOpen,
                'lg:px-12' : !sidebarOpen
            }
        )}>
            <h1 className='text-3xl font-bold'>{heading}</h1>
            {loading ? (
                <ContentLoader />
            ) : error ? (
                <Error error={error} />
            ) : (
                <div className={classNames(
                    'mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4',
                    {
                        'lg:gap-6' : sidebarOpen,
                        'lg:gap-10' :!sidebarOpen
                    }
                )}>
                    {books.map((book) => (
                        <BookCard book={book} key={book.key} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;