import React from 'react'
import Testimonial from '../Testimonial'

const Testimonials = () => {
    const testimonialData = [
        {
            author: 'Jim B.',
            testimonial: 'It was nothing short of incredible to witness Sam in his "trading flow". I was extremely skeptical about the alleged success rate but the first 10 minutes of our call I was convinced I was listening to a trading genius.'
        },
        {
            author: 'Jamal N.',
            testimonial: "I was trying to get into day-trading Effereums but soon realized I needed to get more knowledge first. Sam's mentorship helped me a lot in gaining confidence as a trader."
        },
        {
            author: 'Rayana A.',
            testimonial: 'Being a female day-trader is daunting, but Sam was extremely kind and, on top of all the trading wisdom, shared a lot of insights about fourth wave feminism and their positive influence on the world.'
        },
        {
            author: 'Wyatt A.',
            testimonial: 'This cowboy likes to toot his horn I tell you hwat but lemme tell ya pardner, he knows how to read a chart alright. Highly recommend this talented feller.'
        },
        {
            author: 'Masha A.',
            testimonial: 'Total stud this Sam guy.'
        },
        {
            author: 'John E.',
            testimonial: 'I hate minorities.'
        },
        {
            author: 'Shitalk L.',
            testimonial: 'I did not care about trading crypto when I booked the call. I merely wanted to talk to a West Eurasian genoconservatist with a high IQ. As an avid eugenicist and race realist I am very into IQ research and wanted to corroborate whatever evidence I have about the credibility of IQ with the insights provided by Sam.'
        }
    ]

    return (
        <div className='max-w-5xl py-24 mx-auto'>
            <div className='flex flex-col max-w-4xl items-center text-center mx-auto'>
                <h3 className='text-md font-medium text-indigo-400'>Testimonials</h3>
                <h1 className='text-5xl font-semibold mt-3'>Dozens of traders leveled up their game thanks to Coin Counsel, here's what they say.</h1>
            </div>
            <div className='relative '>
                <div className="absolute bg-gradient-to-b from-transparent to-gray-900 from-50% to-90% z-50 w-full h-full pointer-events-none"></div>
                <div className='grid relative grid-cols-2 gap-8 mt-16 bottom-4 z-10'>
                    {testimonialData.map(testimonial => <Testimonial {...testimonial} isMain={testimonial.author == 'Jim B.'} />)}
                </div>
            </div>
        </div>
    )
}

export default Testimonials