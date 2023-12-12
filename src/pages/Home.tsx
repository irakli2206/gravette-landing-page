
import Hero from '../components/home/Hero'
import Pricing from '../components/home/Pricing'
import CTA from '../components/home/CTA'
import Testimonials from '../components/home/Testimonials'
import Features from '../components/home/Features'
import { Element } from 'react-scroll'
import { ScrollRestoration } from 'react-router-dom'

const Home = () => {
  return (
    <div className='bg-gray-900'>
      <ScrollRestoration />
      <Hero />
      <Element name='features'>
        <Features />
      </Element>
      <Element name='testimonials'>
        <Testimonials />
      </Element>
      <Element name='pricing'>
        <Pricing />
      </Element>
      <CTA />
    </div>
  )
}

export default Home