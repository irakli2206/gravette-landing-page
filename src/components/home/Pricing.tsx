import { useState } from 'react'
import PricingCard from '../PricingCard'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
import OfferPricingCard from '../OfferPricingCard'
import { motion } from 'framer-motion'

const Pricing = () => {
    const [pricingType, setPricingType] = useState('design')

    const onPricingTypeChange = (newType: any) => {
        console.log(newType)
        setPricingType(newType)
    }

    return (
        <div className='mx-auto py-24 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 flex flex-col justify-center items-center'>
            <div className='flex flex-col max-w-4xl items-center text-center'>
                <motion.h3 viewport={{once: true}} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0, transition: { delay: 0, bounce: 0, type: 'spring' } }} className='text-md font-medium text-indigo-400'>Pricing</motion.h3>
                <motion.h1 viewport={{once: true}} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, bounce: 0, type: 'spring' } }} className='text-3xl sm:text-5xl font-semibold mt-3'>Meant for every kind of customer</motion.h1>
                <motion.h2 viewport={{once: true}} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0, transition: { delay: 0.4, bounce: 0, type: 'spring' } }} className='text-lg text-gray-300 mt-6'>Choose an affordable plan that's packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</motion.h2>
            </div>
            <div className='flex flex-col  w-full'>
                <OfferPricingCard className='col-span-2' />

                <RadioGroup value={pricingType} onChange={(e) => onPricingTypeChange(e)} className={classNames('flex mx-auto cursor-pointer text-xs rounded-full ring-1 ring-gray-700 font-medium  [&>*]:rounded-full [&>*]:', {

                })}>
                    <RadioGroup.Option value="design" className={'mx-1 mt-[8px] mb-[6px]'}>
                        {({ checked }) => (
                            <span className={checked ? 'bg-indigo-600 px-4 py-1 rounded-full  text-white' : 'text-gray-400 px-4 py-1'}>Design</span>
                        )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="development" className={'mx-1 mt-[8px] mb-[6px]'}>
                        {({ checked }) => (
                            <span className={checked ? 'bg-indigo-600 px-4 py-1  rounded-full  text-white' : 'text-gray-400 px-4 py-1'}>Development</span>
                        )}
                    </RadioGroup.Option>

                </RadioGroup>

                {pricingType == 'design' && <div className='w-full gap-16 flex flex-col justify-between items-center mt-12 lg:flex-row'>
                    <PricingCard custom={0} isMain={false} type='Brand Identity Design' desc={`A memorable and eye-catching logo to catch the customer's attention.`} price={500}
                        features={['Design Consultation', 'Design Process Overview', 'Logo Pattern Exploration', 'WIP Updates']} timeUnit='hour' buttonAction={() => { }}
                    />
                    <PricingCard custom={1} isMain={true} type='UI/UX Design' desc='Clean and aesthetic UI with smooth user-friendly UX.' price={1900}
                        features={['UI Template Selection', 'UI Detail Overview', 'UX Overview', 'WIP Updates']} timeUnit='trade' buttonAction={() => { }} />

                </div>}


                {pricingType == 'development' && <div className='w-full gap-16 flex flex-col justify-between items-center mt-12 lg:flex-row'>
                    <PricingCard custom={0} isMain={true} type='Landing Page' desc={`Create a swift, high-performing, and modern website to elevate your enterprise's professional image.`} price={3400}
                        features={['Includes UI/UX Designing', 'Smooth Animations', 'Effortless Deployment', 'Rapid Development Solutions']} timeUnit='hour' buttonAction={() => { }}
                    />
                    <PricingCard custom={1} isMain={false} type='Full-Stack Project' desc='Integrate both frontend and backend technologies seamlessly in a database-driven, complex project.' price={7000}
                        features={['End-to-End Digital Solutions', 'Comprehensive Digital Architecture', 'From Concept to Code', 'Intuitive User Interface']} timeUnit='trade' buttonAction={() => { }} />
                </div>
                }


            </div>
        </div >
    )
}

export default Pricing