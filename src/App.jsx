import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import ScrollToTop from './components/ScrollToTop';
import Home from './Pages/Home'
import CheckoutPage from './Pages/CheckoutPage'
import PaymentSuccess from './Pages/PaymentSuccess';
import PaymentFailure from './Pages/PaymentFailed';
import NotFound from './Pages/404_Page';

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar stays outside Routes so it shows on every page */}
      <Navbar />
      <CartDrawer />
      <ScrollToTop />

        <Routes>
          {/* Use Route, not Link, to define your paths */}
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/paymentsuccess" element={<PaymentSuccess />} />
          <Route path="/paymentfailure" element={<PaymentFailure />} />

          {/* Worng Directory Route */}
          <Route path="*" element={<NotFound />} />

        </Routes>

      {/* Footer stays outside Routes so it shows on every page */}
      <Footer />
    </BrowserRouter>
  )
}