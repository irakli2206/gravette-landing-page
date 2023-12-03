import { CheckIcon } from '@heroicons/react/20/solid'
import React from 'react'

type Props = {
    className?: string
}

const OfferPricingCard = ({ className }: Props) => {
    const includedFeatures = [
        'UI/UX Design',
        'Brand Identity Design',
        'Web Development',
        'DNS Management & Website Hosting',
    ]

    return (
        <div className={`mx-auto w-full [&>*]:transition  pointer-events-none  mb-8 ${className}`}>

            <div className="mx-auto  max-w-2xl rounded-3xl ring-1 ring-indigo-300/30 hover:ring-indigo-300/50 bg-gray-900 lg:mx-0 lg:flex lg:max-w-none">
                <div className="p-8 sm:p-10 lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight ">Full Suite</h3>
                    <p className="mt-6 text-base leading-7 text-gray-300">
                        Comprehensive website development service including web design, brand identity design, web development, domain name management and hosting.
                    </p>
                    <div className="mt-10 flex items-center gap-x-4">
                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-400">What’s included</h4>
                        <div className="h-px flex-auto bg-gray-200" />
                    </div>
                    <ul
                        role="list"
                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                    >
                        {includedFeatures.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                    <div className="transition rounded-2xl bg-indigo-500 bg-opacity-10 ring-1 hover:pointer-events-none   ring-indigo-500/30 hover:ring-indigo-500/50 py-10 text-center lg:flex lg:flex-col lg:justify-center lg:py-16">
                        <div className="mx-auto max-w-xs px-8">
                            <p className="text-base font-semibold text-gray-300">Starting from</p>
                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                <span className="text-5xl font-bold tracking-tight text-white">$1000</span>
                                <span className="text-sm font-semibold leading-6 tracking-wide text-indigo-300">USD</span>
                            </p>
                            <a
                                href="#"
                                className="transition mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-medium text-white shadow-sm pointer-events-auto hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Schedule
                            </a>
                            <p className="mt-6 text-xs leading-5 text-gray-400">
                                Contact us to learn about additional maintenance fees
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OfferPricingCard