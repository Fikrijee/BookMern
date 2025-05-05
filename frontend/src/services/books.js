import React, { useState, useEffect } from 'react';
import { getAll, deleteBook } from '../services/books';
import { Link, useNavigate } from 'react-router-dom';
import Toast from './Toast';
import './Books.css';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await getAll();
      setBooks(response.data);
    } catch (err) {
      setToast({ message: 'Error fetching books', type: 'error' });
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id);
        setToast({ message: 'Book deleted successfully', type: 'success' });
        fetchBooks();
      } catch (err) {
        setToast({ message: 'Error deleting book', type: 'error' });
      }
    }
  };

  return (
    <div className="books-container">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      
      <header className="books-header">
        <h1>Book Management System</h1>
        <Link to="/books/add" className="add-button">
          Add New Book
        </Link>
      </header>

      <div className="table-responsive">
        <table className="books-table">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Description</th>
              <th>Availability</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.BookName}</td>
                <td>{book.Author}</td>
                <td>{Array.isArray(book.Genre) ? book.Genre.join(', ') : book.Genre}</td>
                <td>{book.Description}</td>
                <td>{book.Availability}</td>
                <td>{book.Quantity}</td>
                <td>${book.Price}</td>
                <td className="actions">
                  <button
                    className="edit-btn"
                    onClick={() => navigate(`/books/edit/${book._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(book._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;