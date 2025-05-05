import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <div className="hero-content">
          <h1>About BookStore</h1>
          <p>Your all-in-one platform for managing and discovering books.</p>
        </div>
      </section>

      <section className="about-story">
        <div className="container">
          <h2>What You Can Do</h2>
          <div className="about-content">
            <p className="about-intro">
              BookStore is a modern web application that helps you manage your
              book collection with ease. Whether you're a bookstore owner, a
              librarian, or just a passionate reader, our platform gives you the
              tools to keep your library organized and up to date.
            </p>

            <ul className="value-props">
              <li className="value-item">
                <span className="bullet">→</span>{" "}
                <strong>View all books:</strong> Instantly browse your entire
                collection.
              </li>
              <li className="value-item">
                <span className="bullet">→</span>{" "}
                <strong>Add new books:</strong> Quickly add new titles with
                details like author, genre, description, price, and quantity.
              </li>
              <li className="value-item">
                <span className="bullet">→</span> <strong>Edit books:</strong>{" "}
                Update book information at any time.
              </li>
              <li className="value-item">
                <span className="bullet">→</span> <strong>Delete books:</strong>{" "}
                Remove books you no longer want in your collection.
              </li>
              <li className="value-item">
                <span className="bullet">→</span>{" "}
                <strong>Automatic availability:</strong> The app sets a book as
                "Available" if quantity is above zero, or "Not Available" if out
                of stock.
              </li>
              <li className="value-item">
                <span className="bullet">→</span>{" "}
                <strong>Responsive & easy to use:</strong> Enjoy a clean, modern
                interface on any device.
              </li>
            </ul>

            <p className="about-closing">
              BookStory is designed to make book management simple, efficient,
              and enjoyable for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="container">
          <h2>Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar">👨‍💻</div>
              <h3>Name 1</h3>
              <p>Frontend Developer</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">👩‍🎨</div>
              <h3>Name 2</h3>
              <p>UI Designer</p>
            </div>
            <div className="team-card">
              <div className="team-avatar">🧑‍💻</div>
              <h3>Name 3</h3>
              <p>Content Creator</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-testimonials">
        <div className="container">
          <h2>What Readers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>
                "I love how intuitive and user-friendly this platform is. It's
                become my go-to place for managing my book collection."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👩</div>
                <div>
                  <h4>Reader 1</h4>
                  <p>Book Enthusiast</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <p>
                "BookStory makes it so easy to keep track of my books. I can add, edit, and delete titles in just a few clicks!"
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">👨</div>
                <div>
                  <h4>Reader 2</h4>
                  <p> Avid Reader</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
