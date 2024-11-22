import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookList from '../book/BookList';

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
        <BookList
            heading="Popular books"
            loading={loading}
            error={error}
            books={books}
        />
    );
};

export default PopularBooks;