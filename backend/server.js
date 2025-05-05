require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to Database"));

// Routes
const booksRouter = require("./routes/books");
app.use("/books", booksRouter);

// Start server
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`Server running on port ${port}`));
