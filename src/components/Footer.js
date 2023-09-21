import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const hackSussexStyle = {
    fontSize: '1.5em',
    fontWeight: 'bold'
  };

  const linkStyle = {
    textDecoration: 'none'
  };

  const linkHoverStyle = {
    textDecoration: 'none',
    color: '#FF0000'
  };

  return (
    <footer className="bg-dark text-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div style={hackSussexStyle}>
          HackSussex 2023 ©
        </div>
        <div>
          <Link to="/" className="text-light mx-2" style={linkStyle} onMouseEnter={() => linkHoverStyle} onMouseLeave={() => linkStyle}>Home</Link>
          <Link to="/about" className="text-light mx-2" style={linkStyle} onMouseEnter={() => linkHoverStyle} onMouseLeave={() => linkStyle}>About</Link>
          <Link to="/events/hackathon" className="text-light mx-2" style={linkStyle} onMouseEnter={() => linkHoverStyle} onMouseLeave={() => linkStyle}>Events</Link>
          <Link to="/gallery" className="text-light mx-2" style={linkStyle} onMouseEnter={() => linkHoverStyle} onMouseLeave={() => linkStyle}>Gallery</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
