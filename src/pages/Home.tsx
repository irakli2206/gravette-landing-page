
import Hero from '../components/home/Hero'
import Pricing from '../components/home/Pricing'
import CTA from '../components/home/CTA'
import Testimonials from '../components/home/Testimonials'
import Features from '../components/home/Features'
import { Element } from 'react-scroll'
import { ScrollRestoration, useLocation } from 'react-router-dom'
import { LegacyRef, useEffect, useRef } from 'react'

const Home = () => {
  const location = useLocation()
  const testimonialRef = useRef<null | HTMLDivElement>(null)
  const pricingRef = useRef<null | HTMLDivElement>(null)

  useEffect(() => {
    const elementId = location.hash.substring(1); // Remove the leading '#' from the URL hash
    scrollToElement(elementId);
  }, [location])

  const scrollToElement = (hash: string) => {

    let ref = hash === 'testimonials' ? testimonialRef : pricingRef
    if (hash && ref.current) {
      // 👇 Will scroll smoothly to the top of the next section

      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }
  };

  return (
    <div className='bg-gray-900'>
      <ScrollRestoration />
      <Hero />
      <div id='features' >
        <Features />
      </div>
      <div ref={testimonialRef}>
        <Testimonials />
      </div>
      <div ref={pricingRef}>
        <Pricing />
      </div>
      <CTA />
    </div>
  )
}

export default Home