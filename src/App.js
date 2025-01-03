import React from 'react';
import { Routes, Route, Outlet, Link, Router } from "react-router";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import BookAppointment from './pages/appointments/BookAppointment';
import AdminDashboard from './pages/Admin/AdminDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
