import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PopularBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/books/popular');
                setBooks(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching books: ', error);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div>
            <h1 className='text-4xl'>Popular Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {books.map((book) => (
                    <div key={book.key} className=''>
                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt={book.title} loading='lazy' className='w-full object-cover mb-2' />
                        <h3 className='font-bold'>{book.title}</h3>
                        <p>{book.authors ? book.authors.map(author => author.name).join(', ')  : 'Unknown Author'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularBooks