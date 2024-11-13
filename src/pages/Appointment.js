import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Appointment.css';

function Appointment() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [service, setService] = useState('');
   const [date, setDate] = useState('');
   const [time, setTime] = useState('');
   const [message, setMessage] = useState('');
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');

      const appointmentData = {
         name,
         email,
         service,
         date,
         time,
         message
      };

      fetch('/php/submit_appointment.php', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(appointmentData)
      })
      .then((response) => response.json())
      .then((data) => {
         if (data.success) {
            alert('Appointment scheduled successfully!');
            setName('');
            setEmail('');
            setService('');
            setDate('');
            setTime('');
            setMessage('');
         } else {
            setError('There was an error scheduling your appointment.');
         }
      })
      .catch((error) => {
         setError('An error occurred. Please try again later.');
      })
      .finally(() => {
         setLoading(false);
      });
   };

   return (
      <div className="appointment-page">
         <Header />
         <div className="appointment-header">
            <h1>Book an Appointment</h1>
            <p>We’ll get your home fixed in no time! Schedule an appointment with Max today.</p>
         </div>
         <div className="appointment-form-container">
            <form onSubmit={handleSubmit} className="appointment-form">
               <label htmlFor="name">Full Name</label>
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

               <label htmlFor="service">Service Type</label>
               <select 
                  id="service" 
                  name="service" 
                  value={service} 
                  onChange={(e) => setService(e.target.value)} 
                  required
               >
                  <option value="">Select a Service</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Furniture Assembly">Furniture Assembly</option>
                  <option value="Painting">Painting</option>
                  <option value="Other">Other</option>
               </select>

               <label htmlFor="date">Preferred Date</label>
               <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)} 
                  required 
               />

               <label htmlFor="time">Preferred Time</label>
               <input 
                  type="time" 
                  id="time" 
                  name="time" 
                  value={time} 
                  onChange={(e) => setTime(e.target.value)} 
                  required 
               />

               <label htmlFor="message">Additional Details</label>
               <textarea 
                  id="message" 
                  name="message" 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  rows="4" 
                  placeholder="Let us know any additional information..." 
               ></textarea>

               <button type="submit" disabled={loading}>
                  {loading ? 'Scheduling...' : 'Schedule Appointment'}
               </button>

               {error && <div className="error-message">{error}</div>}
            </form>
         </div>
         <Footer />
      </div>
   );
}

export default Appointment;