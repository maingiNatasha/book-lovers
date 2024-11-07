import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../book/BookCard';
import ContentLoader from '../loaders/ContentLoader';

const PopularBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books/popular');
                setBooks(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books: ', error);
                setError('Error fetching books: ');
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className='px-5 sm:px-14 md:px-0 lg:px-14'>
            <h1 className='text-3xl font-bold'>Popular Books</h1>
            {loading ? (
                <div>
                    <ContentLoader/>
                </div>
            ) : error ? (
                <div className=''>
                    <h3 className='font-bold text-lg'>Error: {error}</h3>
                </div>
            ) : (
                <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 lg:gap-12'>
                    {books.map((book) => (
                        <BookCard book={book} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PopularBooks