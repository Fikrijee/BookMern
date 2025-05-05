const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    BookName: {
        type: String,
        required: true,
    },
    Author: {
        type: String,
        required: true,
    },
    Genre: {
        type: [String], 
    },
    Description: {
        type: String,
    },
    Availability: {
        type: String,
        required: true,
    },
    Quantity: {
        type: Number,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Book', bookSchema); // Export the model named 'Book'
