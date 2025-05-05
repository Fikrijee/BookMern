import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../shared/Toast/Toast";
import "./AddBook.css";

const AddBook = () => {
  const navigate = useNavigate();
  const [toast, setToast] = useState(null);
  const [book, setBook] = useState({
    BookName: "",
    Author: "",
    Genre: [],
    Description: "",
    Quantity: 0,
    Price: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    const bookToSend = {
      ...book,
      Availability: book.Quantity > 0 ? "Available" : "Not Available",
    };

    try {
      const response = await fetch("http://localhost:5001/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookToSend),
      });

      if (!response.ok) throw new Error("Failed to add book");

      showToast("Book added successfully!", "success");
      setTimeout(() => navigate("/books"), 2000);
    } catch (error) {
      showToast(error.message, "error");
    }
  };

  const showToast = (message, type) => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="add-book-container">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="book-form">
        <div className="form-group">
          <label htmlFor="bookName">Book Name</label>
          <input
            type="text"
            id="bookName"
            value={book.BookName}
            onChange={(e) => setBook({ ...book, BookName: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={book.Author}
            onChange={(e) => setBook({ ...book, Author: e.target.value })}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="genre">Genre </label>
          <input
            type="text"
            id="genre"
            value={book.Genre.join(", ")}
            onChange={(e) =>
              setBook({
                ...book,
                Genre: e.target.value.split(",").map((g) => g.trim()),
              })
            }
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={book.Description}
            onChange={(e) => setBook({ ...book, Description: e.target.value })}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              value={book.Quantity}
              onChange={(e) =>
                setBook({ ...book, Quantity: parseInt(e.target.value, 10) })
              }
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              value={book.Price}
              onChange={(e) =>
                setBook({ ...book, Price: parseFloat(e.target.value) })
              }
              min="0"
              step="0.01"
              required
            />
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Add Book
          </button>
          <button
            type="button"
            className="cancel-btn"
            onClick={() => navigate("/books")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
