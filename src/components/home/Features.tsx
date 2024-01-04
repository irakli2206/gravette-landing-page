
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import img1 from '../../assets/why-us-1.svg'
import img2 from '../../assets/why-us-2.svg'
import img3 from '../../assets/why-us-3.svg'
import img4 from '../../assets/why-us-4.svg'
import { motion } from 'framer-motion'

const Features = () => {
    const features = [
        {
            name: 'Future-Ready Technology',
            description:
                `Step into the future with web solutions that not only meet today's standards but anticipate tomorrow's trends.`,
            icon: CloudArrowUpIcon,
        },
        {
            name: 'Revolutionary Performance',
            description: 'Revolutionize your online performance – expect nothing less than lightning-fast speed and unparalleled efficiency.',
            icon: LockClosedIcon,
        },
        {
            name: 'AI-Powered Solutions',
            description: 'Harness the power of artificial intelligence for intelligent, personalized, and smooth website functionalities.',
            icon: ServerIcon,
        },
    ]


    return (
        <div className="features overflow-hidden py-24 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <motion.div className="lg:pr-8 lg:pt-4"
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: [0, 1],
                            x: [-20, 0],
                            transition: {
                                delay: 0.3,
                                type: 'spring',
                                bounce: 0,

                            }
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <div className="lg:max-w-lg">
                            <h2 className="text-md font-medium text-indigo-400">Why Us</h2>
                            <p className="mt-2 text-3xl font-semibold tracking-tight  sm:text-4xl">Flawless efficiency</p>
                            <p className="mt-6 text-lg leading-8 text-gray-300">
                                Discover the power of precision, innovation, and visual brilliance
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                                            {feature.name}.
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0
                        }}
                        whileInView={{
                            opacity: [0, 1],
                            x: [20, 0],
                            transition: {
                                delay: 0.3,
                                type: 'spring',
                                bounce: 0,

                            }
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="my-auto relative md:w-full md:h-full !h-[500px]" >
                        <motion.img
                            src={img1}
                            alt="Product screenshot"
                            className={`w-[48rem] absolute top-1/2 -translate-y-1/2 max-w-none  rounded-xl shadow-xl border border-gray-400/10  sm:w-[57rem] md:-ml-4 lg:-ml-0
                        z-50`}
                            width={2432}
                            height={1442}
                            initial={{
                                opacity: 0,
                                x: 20,
                                y: '-50%'
                            }}
                            animate={{
                                opacity: [null, 1, , 1, 0],
                                x: [null, 0, 0, 100]
                            }}
                            transition={{
                                times: [0, 0.1, 0.8, 0.9],
                                duration: 4,
                                repeatDelay: 12,
                                repeat: Infinity,
                            }}

                        />
                        <motion.img
                            src={img2}
                            alt="Product screenshot"
                            className={`w-[48rem] absolute top-1/2 -translate-y-1/2 max-w-none  rounded-xl shadow-xl border border-gray-400/10  sm:w-[57rem] md:-ml-4 lg:-ml-0
                        z-50`}
                            width={2432}
                            height={1442}
                            initial={{
                                opacity: 0,
                                x: 20,
                                y: '-50%'
                            }}
                            animate={{
                                opacity: [null, 1, , 1, 0],
                                x: [null, 0, 0, 100]
                            }}
                            transition={{
                                times: [0, 0.1, 0.8, 0.9],
                                duration: 4,
                                delay: 4,
                                repeatDelay: 12,
                                repeat: Infinity,

                            }}

                        />
                        <motion.img
                            src={img3}
                            alt="Product screenshot"
                            className={`w-[48rem] absolute top-1/2 -translate-y-1/2 max-w-none  rounded-xl shadow-xl border border-gray-400/10  sm:w-[57rem] md:-ml-4 lg:-ml-0
                        z-50`}
                            width={2432}
                            height={1442}
                            initial={{
                                opacity: 0,
                                x: 20,
                                y: '-50%'
                            }}
                            animate={{
                                opacity: [null, 1, , 1, 0],
                                x: [null, 0, 0, 100]
                            }}
                            transition={{
                                times: [0, 0.1, 0.8, 0.9],
                                duration: 4,
                                delay: 8,
                                repeatDelay: 12,
                                repeat: Infinity,

                            }}

                        />
                        <motion.img
                            src={img4}
                            alt="Product screenshot"
                            className={`w-[48rem] absolute top-1/2 -translate-y-1/2 max-w-none  rounded-xl shadow-xl border border-gray-400/10  sm:w-[57rem] md:-ml-4 lg:-ml-0
                        z-50`}
                            width={2432}
                            height={1442}
                            initial={{
                                opacity: 0,
                                x: 20,
                                y: '-50%'
                            }}
                            animate={{
                                opacity: [null, 1, , 1, 0],
                                x: [null, 0, 0, 100]
                            }}
                            transition={{
                                times: [0, 0.1, 0.8, 0.9],
                                duration: 4,
                                delay: 12,
                                repeatDelay: 12,
                                repeat: Infinity,
                            }}

                        />
                    </motion.div>

                </div>
            </div>
            <style>
                {`
                  .features img {
                    -webkit-mask: linear-gradient(90deg, white 20%, #0000 80%, #0000 100%);
                    mask: linear-gradient(90deg, white 20%, #0000 80%, #0000 100%);
                  }
                `}
            </style>
        </div>
    )
}

export default Features