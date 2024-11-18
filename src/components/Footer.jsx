import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Thanks For Visiting My Portfolio.</p>
    </footer>
  );
};

export default Footer;
