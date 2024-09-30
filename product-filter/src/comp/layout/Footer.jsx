import React from 'react';
import "../layout/footer.css";

const Footer = () => {
  return (
    <footer className="footer"> 
      <p>&copy; 2024 Your Website. All rights reserved.</p>
      <nav>
        <ul className="navList"> 
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#terms">Terms of Service</a></li>
          <li><a href="#support">Support</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

