import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';
import TestimonialList from '../components/TestimonialList';
import './Home.css';

function Home() {
   const handleCTA = () => {
      window.location.href = '/appointment'; // Redirect to appointment page
   };

   return (
      <div className="home">
         <Header />
         <div className="hero-section">
            <img src="/images/background.jpg" alt="Handyman at work" className="hero-image" />
            <div className="hero-text">
               <h1>Welcome to Max Repair Ranger!</h1>
               <p>Your trusted handyman for all things repair and maintenance.</p>
               <button className="cta-button" onClick={handleCTA}>Book an Appointment</button>
            </div>
         </div>
         <section className="about-section">
            <h2>About Max</h2>
            <p>
               With over 10 years of experience in various handyman tasks, Max is committed to providing
               reliable and quality service for your home repair needs. From plumbing to electrical work, 
               he’s got you covered.
            </p>
         </section>
         <section className="services-section">
            <h2>Our Services</h2>
            <p>We offer a wide range of services to keep your home in top shape. Browse below for more information.</p>
            <ServiceList />
         </section>
         <section className="testimonials-section">
            <h2>What Our Customers Say</h2>
            <p>Don’t just take our word for it. See what our satisfied customers have to say.</p>
            <TestimonialList />
         </section>
         <Footer />
      </div>
   );
}

export default Home;