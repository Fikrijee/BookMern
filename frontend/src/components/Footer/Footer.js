import React, { useState } from "react";
import "./Footer.css";
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaTwitter,
  FaBookOpen,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { RiContactsBookFill } from "react-icons/ri";
import { BiBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "Explore",
      icon: <FaBookOpen className="section-icon" />,
      content: (
        <ul className="explore-links">
          <li>
            <a href="/">
              <BiBookAdd /> New Releases
            </a>
          </li>
          <li>
            <a href="/">
              <RiContactsBookFill /> Bestsellers
            </a>
          </li>
          <li>
            <a href="/">
              <FaBookOpen /> Collections
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: "About Us",
      icon: <RiContactsBookFill className="section-icon" />,
      content: (
        <>
          <p className="about-text">
            BookStore is a simple and modern web app for managing your book collection. Add, edit, or delete books, and track their availability automatically based on quantity. Perfect for libraries, bookstores, or personal use.
          </p>
          <Link to="/about" className="about-link">
            Learn More
          </Link>
        </>
      ),
    },
    {
      title: "Connect",
      icon: <FaEnvelope className="section-icon" />,
      content: (
        <div className="connect-content">
          <div className="contact-methods">
            <p>
              <FaEnvelope className="icon" /> hello@bookStore.com
            </p>
            <p>
              <FaPhone className="icon" /> (+383) 123-456-789
            </p>
          </div>
          <div className="social-links">
            <a href="/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="/" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="/" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="/" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Newsletter",
      icon: <FaEnvelope className="section-icon" />,
      content: (
        <form onSubmit={handleSubscribe} className="newsletter-form">
          <p>Get weekly literary gems and exclusive deals</p>
          <div className="input-group">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">{subscribed ? "✓" : "→"}</button>
          </div>
          {subscribed && (
            <p className="success-message">Thanks for subscribing!</p>
          )}
        </form>
      ),
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
        {footerSections.map((section, index) => (
          <div
            key={index}
            className={`footer-section ${
              activeAccordion === index ? "active" : ""
            }`}
          >
            <div
              className="section-header"
              onClick={() => toggleAccordion(index)}
            >
              {section.icon}
              <h3 className="section-title">{section.title}</h3>
              <span className="accordion-toggle">
                {activeAccordion === index ? "−" : "+"}
              </span>
            </div>
            <div className="section-content">{section.content}</div>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>
            © 2025 <span className="logo-text">BookStore</span>. All rights
            reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
