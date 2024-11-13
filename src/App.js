import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/services" element={<Services />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/appointment" element={<Appointment />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;