import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/Home/Home";
import Books from "./components/Books/Books";
import AddBook from "./components/AddBook/AddBook";
import EditBook from "./components/EditBook/EditBook";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import "./styles/global.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:id" element={<EditBook />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
