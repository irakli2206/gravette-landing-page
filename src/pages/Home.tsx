import React from 'react'
import Hero from '../components/home/Hero'
import Teacher from '../components/home/Teacher'
import Pricing from '../components/home/Pricing'
import CTA from '../components/home/CTA'
import Testimonials from '../components/home/Testimonials'
import Modal from '../components/Modal'
import Features from '../components/home/Features'

const Home = () => {
  return (
    <div className='bg-gray-900'>
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
    </div>
  )
}

export default Home