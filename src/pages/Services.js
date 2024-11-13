import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceList from '../components/ServiceList';
import './Services.css';

function Services() {
   return (
      <div className="services-page">
         <Header />
         <div className="services-header">
            <h1>Our Services</h1>
            <p>Reliable, affordable, and expert solutions for all your home repair needs. We specialize in a wide variety of home services to ensure your property stays in top condition.</p>
         </div>
         <section className="services-intro">
            <h2>Why Choose Max Repair Ranger?</h2>
            <p>With years of experience, we’ve honed our skills to handle everything from plumbing to electrical work. Max Repair Ranger is here to make your life easier with reliable, affordable, and professional home repair services.</p>
         </section>
         <section className="services-content">
            <h2>Our Expertise</h2>
            <ServiceList />
         </section>
         <section className="cta-section">
            <h3>Ready to Get Your Home Fixed?</h3>
            <p>Contact us today or book an appointment directly online. Our team is ready to help you!</p>
            <button className="cta-button" onClick={() => window.location.href = '/appointment'}>Book an Appointment</button>
         </section>
         <Footer />
      </div>
   );
}

export default Services;