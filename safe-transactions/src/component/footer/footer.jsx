import React from 'react';
import './footer.css'; // Import your custom CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: Safe@Transactions.com</p>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Safe Transactions . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
