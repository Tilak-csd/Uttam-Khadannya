import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
// Assuming you put the UI code I wrote earlier in a file called Checkout.jsx
import CheckoutPage from './Pages/CheckoutPage' 

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays outside Routes so it shows on every page */}
      <Navbar />

        <Routes>
          {/* Use Route, not Link, to define your paths */}
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>

      {/* Footer stays outside Routes so it shows on every page */}
      <Footer />
    </BrowserRouter>
  )
}