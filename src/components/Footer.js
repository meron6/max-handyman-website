import React from 'react';
import './Footer.css';

function Footer() {
   return (
      <footer className="footer">
         <div className="footer-content">
            <div className="footer-section about">
               <h2>Max Repair Ranger</h2>
               <p>Your go-to handyman for all home repairs and maintenance needs. Dedicated to providing top-notch services with a friendly approach!</p>
            </div>
            <div className="footer-section quick-links">
               <h3>Quick Links</h3>
               <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/appointment">Book Appointment</a></li>
               </ul>
            </div>
            <div className="footer-section social">
               <h3>Follow Us</h3>
               <div className="social-icons">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                     <img src="/images/facebook-icon.png" alt="Facebook" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                     <img src="/images/instagram-icon.png" alt="Instagram" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                     <img src="/images/twitter-icon.png" alt="Twitter" />
                  </a>
               </div>
            </div>
         </div>
         <div className="footer-bottom">
            <p>&copy; 2024 Max Repair Ranger | All Rights Reserved</p>
         </div>
      </footer>
   );
}

export default Footer;