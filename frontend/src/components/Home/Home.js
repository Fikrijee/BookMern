import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('/api/books');
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="home">
      <div className="home-content">
        <h1>Book Collection</h1>
        <ul>
          {books.map((book) => (
            <li key={book._id || book.id}>{book.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;