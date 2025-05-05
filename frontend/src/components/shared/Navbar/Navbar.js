import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(".navbar-menu, .navbar-toggler")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/books", label: "Books" },
    { path: "/books/add", label: "Add Book" },
    { path: "/about", label: "About" }, 
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
      <Link to="/" className="navbar-brand" aria-label="Home">
        <img src="/logo.png" alt="BookStore Logo" style={{ height: "2.2rem", marginRight: "0.6rem" }} />
        
      </Link>

        <nav
          className={`navbar-menu ${isOpen ? "show" : ""}`}
          role="navigation"
        >
          <ul className="navbar-nav">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  aria-current={
                    location.pathname === item.path ? "page" : undefined
                  }
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <div className="toggler-icon"></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
