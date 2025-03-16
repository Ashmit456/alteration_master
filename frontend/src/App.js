// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import About from './pages/About';
import BookingForm from './pages/BookingForm';
import Resources from './pages/Resources';
import Contact from './pages/contact';
import Footer from './components/Footer';
// other imports...

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

