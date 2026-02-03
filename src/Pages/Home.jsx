import Hero from '../components/Hero'
import { PromoGrid } from '../components/PromoBanner'
import ServiceFeatures from '../components/Services'
import ProductGrid from '../components/Products'
import TestimonialCarousel from '../components/Testomonial'
import CartDrawer from '../components/CartDrawer'

const Home = ()=>{
    return <>
        <CartDrawer />
      <Hero />
      <PromoGrid />
      <ProductGrid />
      <ServiceFeatures />
      <TestimonialCarousel />
    </>
    
}

export default Home;