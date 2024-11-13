import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
   return (
      <header className="header">
         <div className="logo">
            <img src="/images/logo.png" alt="Max Repair Ranger Logo" />
            <h1>Max Repair Ranger</h1>
         </div>
         <nav className="nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/appointment" className="nav-link appointment-button">Book Appointment</Link>
         </nav>
      </header>
   );
}

export default Header;