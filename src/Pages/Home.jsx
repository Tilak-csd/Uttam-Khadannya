import Hero from '../components/Hero'
import { PromoGrid } from '../components/PromoBanner'
import ServiceFeatures from '../components/Services'
import ProductGrid from '../components/Products'
import TestimonialCarousel from '../components/Testomonial'

const Home = ()=>{
    return <>
      <Hero />
      <PromoGrid />
      <ProductGrid />
      <ServiceFeatures />
      <TestimonialCarousel />
    </>
    
}

export default Home;