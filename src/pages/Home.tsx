import React from 'react'
import Hero from '../components/home/Hero'
import Teacher from '../components/home/Teacher'
import Pricing from '../components/home/Pricing'
import CTA from '../components/home/CTA'
import Testimonials from '../components/home/Testimonials'
import Modal from '../components/Modal'
import Features from '../components/home/Features'
import { Element } from 'react-scroll'

const Home = () => {
  return (
    <div className='bg-gray-900'>
      <Hero />
      <Features />
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