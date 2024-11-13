import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);
   const [responseMessage, setResponseMessage] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setResponseMessage('');

      const contactData = {
         name,
         email,
         message,
      };

      fetch('/php/submit_contact.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(contactData),
      })
         .then((response) => response.json())
         .then((data) => {
            if (data.success) {
               setResponseMessage('Thank you! Your message has been sent.');
               setName('');
               setEmail('');
               setMessage('');
            } else {
               setResponseMessage('Sorry, there was an error. Please try again.');
            }
         })
         .catch((error) => {
            setResponseMessage('There was a problem submitting your message.');
         })
         .finally(() => {
            setLoading(false);
         });
   };

   return (
      <div className="contact-page">
         <Header />
         <div className="contact-header">
            <h1>Contact Us</h1>
            <p>We’d love to hear from you! Reach out with questions, service inquiries, or to schedule an appointment.</p>
         </div>
         <div className="contact-content">
            <div className="contact-form">
               <h2>Send Us a Message</h2>
               <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                     required
                  />

                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     required
                  />

                  <label htmlFor="message">Message</label>
                  <textarea
                     id="message"
                     name="message"
                     value={message}
                     onChange={(e) => setMessage(e.target.value)}
                     rows="5"
                     required
                  ></textarea>

                  <button type="submit" disabled={loading}>
                     {loading ? 'Sending...' : 'Submit'}
                  </button>
               </form>
               {responseMessage && <div className="response-message">{responseMessage}</div>}
            </div>
            <div className="contact-details">
               <h2>Our Location</h2>
               <div className="map-container">
                  <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531550423!3d-37.817209979751944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772ed78b8af17b!2sHandyman%20Services!5e0!3m2!1sen!2sau!4v1614104724694!5m2!1sen!2sau"
                     width="100%"
                     height="300"
                     allowFullScreen=""
                     loading="lazy"
                     title="Our Location"
                  ></iframe>
               </div>
               <p>123 Main Street, Cityville, ST 12345</p>
               <p>Phone: (011) 456-7890</p>
               <p>Email: contact@maxrepairranger.com</p>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default Contact;