import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { PromoGrid } from './components/PromoBanner'
import ServiceFeatures from './Services'
import ProductGrid from './components/Products'
import TestimonialCarousel from './components/Testomonial'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <PromoGrid />
      <ProductGrid />
      <ServiceFeatures />
      <TestimonialCarousel />
      <Footer />
    </div>
  )
}
