import React from 'react';
import './ServiceList.css';

const services = [
   {
      id: 1,
      title: 'Plumbing',
      description: 'Expert plumbing services, from leaks to pipe installations.',
      image: '/images/service1.jpg',
   },
   {
      id: 2,
      title: 'Electrical Work',
      description: 'Safe and reliable electrical repairs and installations.',
      image: '/images/service2.jpg',
   },
   {
      id: 3,
      title: 'Furniture Assembly',
      description: 'Efficient assembly for all types of furniture.',
      image: '/images/service3.jpg',
   },
   {
      id: 4,
      title: 'Painting & Repairs',
      description: 'Professional painting and wall repair services.',
      image: '/images/service4.jpg',
   },
   {
      id: 5,
      title: 'Appliance Repair',
      description: 'Quick and effective appliance repair for your home.',
      image: '/images/service5.jpg',
   },
];

function ServiceList() {
   return (
      <div className="service-list">
         <h2>Our Services</h2>
         <div className="services-container">
            {services.map((service) => (
               <div className="service-card" key={service.id}>
                  <img src={service.image} alt={`${service.title} icon`} className="service-image" />
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
               </div>
            ))}
         </div>
      </div>
   );
}

export default ServiceList;