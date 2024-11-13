import React from 'react';
import './TestimonialList.css';

const testimonials = [
   {
      id: 1,
      name: 'Sarah Johnson',
      feedback: 'Max was fantastic! Quick, professional, and got my plumbing fixed in no time!',
      image: '/images/customer1.jpg',
   },
   {
      id: 2,
      name: 'Michael Lee',
      feedback: 'Highly recommend Max for any home repair! Excellent service and fair prices.',
      image: '/images/customer2.jpg',
   },
   {
      id: 3,
      name: 'Jessica Smith',
      feedback: 'I called Max for an emergency electrical issue, and he handled it perfectly. Very reliable!',
      image: '/images/customer3.jpg',
   },
   {
      id: 4,
      name: 'David Thompson',
      feedback: 'Max assembled my furniture quickly and made sure everything was safe and secure. Great work!',
      image: '/images/customer4.jpg',
   },
];

function TestimonialList() {
   return (
      <div className="testimonial-list">
         <h2>What Our Clients Say</h2>
         <div className="testimonials-container">
            {testimonials.map((testimonial) => (
               <div className="testimonial-card" key={testimonial.id}>
                  <img src={testimonial.image} alt={`${testimonial.name}'s testimonial`} className="testimonial-image" />
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-feedback">"{testimonial.feedback}"</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default TestimonialList;