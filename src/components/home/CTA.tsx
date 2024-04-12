
import { TransparentButton } from '../Buttons'
import Chart from '../../assets/CTA.svg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTA = () => {
    return (
        <div className="relative  overflow-hidden pt-24 pb-12">
            <div className='flex flex-col md:flex-row justify-between'>
                <div className="flex flex-col items-center mx-auto py-24 md:py-64 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 z-20">
                    <div className="text-left">
                        <h2 className="text-4xl md:text-5xl font-semibold">Give your business the competitive <br /> edge with <motion.span className=''
                            animate={{
                                textShadow: ['0 0px 6px rgba(255,255, 255, 0.35)', "0 0px 16px rgba(255,255, 255, 0.75)",  "0 0px 16px rgba(255,255, 255, 0.75)", '0 0px 6px rgba(255,255, 255, 0.35)' ]
                            }}
                            transition={{
                                duration: 4,
                                times: [0, 0.5, 0.6, 1],
                                repeat: Infinity
                            }}
                        >Gravette</motion.span>'s solutions  </h2>
                        <p className="mt-6 text-gray-300">Start upgrading your online  presence today!</p>
                        <div className="mt-10">
                            <Link to='contact' className='rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
                                <TransparentButton title='Message Us' className='w-fit mr-auto' size='xl' onClick={() => { }} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='relative h-[400px] md:h-[550px] left-20 md:left-0 -mr-48 my-auto z-30 '>
                    <div className='w-full h-full bg-gradient-to-r from-transparent to-gray-900 to-75% absolute '></div>
                    <img alt='' src={Chart} className='h-full object-cover object-left ' />
                </div>
            </div>
            <div className="absolute w-full h-[800px]  -bottom-[550px] left-1/2 -translate-x-1/2 bg-cta"></div>
        </div>
    )
}

export default CTA