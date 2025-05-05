import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Toast from "../shared/Toast/Toast";
import "./Books.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://localhost:5001/books");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      showToast("Failed to load books", "error");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      try {
        const response = await fetch(`http://localhost:5001/books/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete book");
        }
        showToast("Book deleted successfully", "success");
        fetchBooks();
      } catch (error) {
        showToast("Error deleting book", "error");
      }
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="container">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="header">
        <h1>Book Management</h1>
        {/* <Link to="/books/add" className="add-btn">
          Add New Book
        </Link> */}
      </div>

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Description</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length > 0 ? (
              books.map((book) => (
                <tr key={book._id}>
                  <td>{book.BookName}</td>
                  <td>{book.Author}</td>
                  <td>
                    {Array.isArray(book.Genre)
                      ? book.Genre.join(", ")
                      : book.Genre}
                  </td>
                  <td>{book.Description}</td>
                  <td>${book.Price}</td>
                  <td>{book.Availability}</td>
                  <td>{book.Quantity}</td>
                  <td className="actions">
                    <Link to={`/books/edit/${book._id}`} className="edit-btn">
                      Edit
                    </Link>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(book._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="no-books">
                  No books available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Books;
