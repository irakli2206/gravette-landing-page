import React from 'react'
import { Button } from '../Buttons'
import Chart from '../../assets/CTA.svg'

const CTA = () => {
    return (
        <div className="relative  overflow-hidden pt-24 pb-12">
            <div className='flex justify-between'>
                <div className="flex flex-col items-center mx-auto py-64 max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 z-20">
                    <div className="text-left">
                        <h2 className="text-5xl font-semibold">Become a master trader.<br />Schedule a call now.</h2>
                        <p className="mt-6 text-gray-300">Don't miss out the opportunity to start making big money all by yourself.</p>
                        <div className="mt-10">
                            <Button title='Schedule' className='w-fit mr-auto' size='xl' onClick={()=> {}} />
                        </div>
                    </div>
                </div>

                <div className='relative h-[600px] -mr-48 my-auto z-30'>
                    <div className='w-full h-full bg-gradient-to-r from-transparent to-gray-900 to-75% absolute '></div>
                    <img src={Chart} className='h-full object-cover object-left' />
                </div>
            </div>
            <svg viewBox="0 0 1024 1024" className="absolute isolate z-100 left-0 right-0 -bottom-72 mx-auto max-w-screen-lg translate-y-1/2 blur-3xl opacity-30" aria-hidden="true"><circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fill-opacity="0.7"></circle><defs><radialGradient id="8d958450-c69f-4251-94bc-4e091a323369"><stop stop-color="#7775D6"></stop><stop offset="1" stop-color="#E935C1"></stop></radialGradient></defs></svg>
        </div>
    )
}

export default CTA