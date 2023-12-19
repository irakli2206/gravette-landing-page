
import Testimonial from '../Testimonial'
import AWLogo from '../../assets/aw-light.png'

const Testimonials = () => {
    const testimonialData = [
        {
            author: 'Nika B.',
            socialsLink: "@sulkalmakh",
            logo: AWLogo,
            testimonial: `From concept to execution, Gravette exceeded our expectations. They took the time to understand our vision and transformed it into a visually striking and responsive website. Their technical expertise and innovative solutions made the development process smooth and enjoyable. We're grateful for the outstanding service and would collaborate with them again in a heartbeat!`
        },
        {
            author: 'Giorgi N.',
            testimonial: "Real talk – these guys are the web whisperers. Our site went from 'meh' to 'wow' in no time. The team's passion for what they do is infectious. Cheers to making our digital dreams come true!"
        },
        {
            author: 'Kamil N.',
            testimonial: "Impressive work by Gravette! They turned our vision into a sleek website that's boosted our online presence. Quick, responsive, and highly skilled team."
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
            author: 'Giorgi A.',
            testimonial: 'Gravette transformed our outdated website into a modern masterpiece. They were fast, efficient, and the results speak for themselves. A game-changer for our business!'
        },
        {
            author: 'Lasha G.',
            testimonial: `Working with this agency was a game-changer! The team's creativity and technical skills are unmatched. Our website is now a masterpiece, thanks to their brilliant work.`
        },
        {
            author: 'Masha A.',
            testimonial: `Exceptional experience! This agency's developers are true wizards. They turned our vision into a stunning reality. Our website is now a powerful tool, thanks to their expertise.`
        },
        {
            author: 'Gela G.',
            testimonial: `Our website got a serious facelift, courtesy of this UI maestro squad. Navigating feels like a joyride, and every click is a pleasure. If you're after a site that wows, these are your go-to guys!`
        },
        {
            author: 'Jason R.',
            testimonial: `Kudos to this agency for making our vision not only look good but feel good too. The UI design is next level – it's like they read our minds. Our users are in for a treat, and so are we!`
        },
        {
            author: 'Miguel E.',
            testimonial: `Total game-changers! This web dev and UI team took our online presence to new heights. The website is not just eye-catching but navigates like a dream. Kudos for seamlessly blending style and functionality. Couldn't be happier with the results!`
        },
    ]

    return (
        <div className='w-full py-24 mx-auto px-4' >
            <div className='flex flex-col max-w-4xl items-center text-center mx-auto'>
                <h3 className='text-md font-medium text-indigo-400'>Testimonials</h3>
                <h1 className='text-5xl font-semibold mt-3 bg-clip-text text-transparent bg-gradient-to-b from-white from-50% to-zinc-300'>These businesses leveled up their online presence thanks to Gravette. Here's what they have to say.</h1>
            </div>
            <div className='relative max-w-screen-2xl mx-auto '>
                <div className="absolute bg-gradient-to-b from-transparent to-gray-900 from-40% to-90%  z-50 w-full h-full pointer-events-none"></div>
                <div className='grid grid-cols-2 xl:grid-cols-4 xl:grid-flow-col  relative gap-8 mt-16 bottom-4 z-10'>
                    <div className="  col-span-2 row-end-1 col-start-1 xl:col-start-2">
                        <Testimonial {...testimonialData[0]} isMain={true} />
                    </div>

                    <div className="contents">
                        <div className='row-span-2 space-y-8'>
                            <Testimonial {...testimonialData[1]} />
                            <Testimonial {...testimonialData[2]} />
                            <Testimonial {...testimonialData[3]} />
                        </div>
                        <div className='row-start-1 space-y-8'>
                            <Testimonial {...testimonialData[4]} />
                            <Testimonial {...testimonialData[5]} />
                        </div>
                    </div>

                    <div className="contents">
                        <div className='row-start-1 space-y-8'>
                            <Testimonial {...testimonialData[6]} />
                            <Testimonial {...testimonialData[7]} />
                        </div>
                        <div className='row-span-2 space-y-8'>
                            <Testimonial {...testimonialData[8]} />
                            <Testimonial {...testimonialData[9]} />
                            <Testimonial {...testimonialData[10]} />
                        </div>

                    </div>

                    {/* {testimonialData.map((testimonial, i, arr) => <Testimonial {...testimonial} isMain={i === 1} />)} */}
                </div>
            </div>
        </div>
    )
}

export default Testimonials