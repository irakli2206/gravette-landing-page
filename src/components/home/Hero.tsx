import { useState } from 'react'
import OfferModal from './OfferModal'
import classNames from 'classnames'
import { motion } from 'framer-motion'
import { Link as ScrollLink } from 'react-scroll'
import { TransparentButton } from '../Buttons'
import { Link } from 'react-router-dom'

const Hero = () => {
    const [offerModalOpen, setOfferModalOpen] = useState(false)

    return (
        <>
            <OfferModal isOpen={offerModalOpen} onClose={() => setOfferModalOpen(false)} />


            <div className="relative isolate px-6   lg:px-8 ">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-600/70 to-indigo-400/50 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
                        Don't miss out special Autumn offer.{' '}
                        <a href="#" className="font-semibold text-indigo-400">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div> */}
                    <motion.div className="hidden sm:mb-8 sm:flex sm:justify-center" onClick={() => setOfferModalOpen(true)}
                        animate={{
                            opacity: [0, 1],
                            x: [-20, 0],
                            transition: {
                                delay: 0.3,
                                type: 'spring',
                                bounce: 0
                            }
                        }}
                    >
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 transition text-gray-300 ring-1 ring-indigo-500/30 hover:ring-indigo-500/50 bg-indigo-500 bg-opacity-10">
                            Don't miss our special referral offer.{' '}
                            <div className="font-semibold text-indigo-400 inline cursor-pointer">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Read more <span aria-hidden="true">&rarr;</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="text-center text-white">
                        <motion.h1 className="text-4xl font-bold tracking-tight  sm:text-6xl"
                            animate={{
                                opacity: [0, 1],
                                x: [-20, 0],
                                transition: {
                                    delay: 0.5,
                                    type: 'spring',
                                    bounce: 0
                                }
                            }}
                        >
                            Software Solutions for Everyone.

                        </motion.h1>
                        <motion.p className="mt-6 text-lg leading-8 text-gray-300"
                            animate={{
                                opacity: [0, 1],
                                x: [-20, 0],
                                transition: {
                                    delay: 0.7,
                                    type: 'spring',
                                    bounce: 0
                                }
                            }}
                        >
                            Crafting digital experiences that inspire and engage.

                        </motion.p>
                        <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-6"
                            animate={{
                                opacity: [0, 1],
                                x: [-20, 0],
                                transition: {
                                    delay: 1,
                                    type: 'spring',
                                    bounce: 0
                                }
                            }}
                        >

                            <Link to='contact' className='rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
                                <TransparentButton title='Message Us' size='lg' onClick={() => { }} />
                            </Link>


                            <ScrollLink href='' smooth={true} to="features"  >
                                <div className={classNames('transition cursor-pointer text-sm text-white font-medium flex gap-2.5 items-center group ', {

                                })}>
                                    <h1>Learn More</h1>
                                    <div className='w-5 h-7 rounded-full border-white border-2'>
                                        <motion.div className='w-1 h-1 rounded-full bg-white mx-auto mt-1.5'
                                            animate={{
                                                y: [0, 3, 0],
                                                // opacity: [1, 0, 1]
                                            }}
                                            transition={{
                                                repeat: Infinity,
                                                delay: 1,
                                                repeatDelay: 1
                                            }}
                                        ></motion.div>
                                    </div>
                                </div>
                            </ScrollLink>
                        </motion.div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-indigo-600/90 to-indigo-400/50 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Hero