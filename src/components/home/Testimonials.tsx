import React from 'react'
import Testimonial from '../Testimonial'
import AWLogo from '../../assets/aw-light.png'

const Testimonials = () => {
    const testimonialData = [

        {
            author: 'Kamil N.',
            testimonial: "Impressive work by Gravette! They turned our vision into a sleek website that's boosted our online presence. Quick, responsive, and highly skilled team."
        },
        {
            author: 'Nika B.',
            socialsLink: "@sulkalmakh",
            logo: AWLogo,
            testimonial: `From concept to execution, Gravette exceeded our expectations. They took the time to understand our vision and transformed it into a visually striking and responsive website. Their technical expertise and innovative solutions made the development process smooth and enjoyable. We're grateful for the outstanding service and would collaborate with them again in a heartbeat!`
        },
        {
            author: 'Nate H.',
            testimonial: 'Nailed it! Our online store got a complete design makeover, and sales have soared. Professional, creative, and a pleasure to work with.'
        },
        {
            author: 'Wyatt A.',
            testimonial: 'Gravette understood our mission, and the website reflects our values. Grateful for their dedication and expertise.'
        },
        {
            author: 'Masha A.',
            testimonial: 'Gravette transformed our outdated website into a modern masterpiece. They were fast, efficient, and the results speak for themselves. A game-changer for our business!'
        },
        
    ]

    return (
        <div className='w-full py-24 mx-auto'>
            <div className='flex flex-col max-w-4xl items-center text-center mx-auto'>
                <h3 className='text-md font-medium text-indigo-400'>Testimonials</h3>
                <h1 className='text-5xl font-semibold mt-3 bg-clip-text text-transparent bg-gradient-to-b from-white from-50% to-zinc-300'>These businesses leveled up their online presence thanks to Gravette. Here's what they have to say.</h1>
            </div>
            <div className='relative max-w-screen-2xl mx-auto px-4'>
                <div className="absolute bg-gradient-to-b from-transparent to-gray-900 from-70%  z-50 w-full h-full pointer-events-none"></div>
                <div className='grid grid-cols-4 relative gap-8 mt-16 bottom-4 z-10'>
                    {testimonialData.map((testimonial, i, arr) => <Testimonial {...testimonial} isMain={i === 1} />)}
                </div>
            </div>
        </div>
    )
}

export default Testimonials