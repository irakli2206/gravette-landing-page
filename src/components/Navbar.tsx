import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { TransparentButton } from './Buttons'


let navLinks = [
    { name: 'Testimonials', path: 'testimonials' },
    { name: 'Pricing', path: 'pricing' },
    // { name: 'Contact', href: '/contact', current: false },
]

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [currentPath, setCurrentPath] = useState('/')

    const location = useLocation()
    const path = location.pathname

    useEffect(() => {
        setCurrentPath(path)
    }, [path])

    console.log(mobileMenuOpen)

    return (
        <header className="fixed inset-x-0 top-0 z-[9999]  font-sans  ">
            <nav className="flex relative  max-w-screen-xl mx-auto backdrop-blur-md items-center justify-between p-2.5 lg:px-8 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to='/' className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-12 w-auto"
                            src={Logo}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"

                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" aria-hidden="true" onClick={() => setMobileMenuOpen(false)} /> : <Bars3Icon className="h-6 w-6" aria-hidden="true" onClick={() => setMobileMenuOpen(true)} />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navLinks.map((item) => (
                        <Link key={item.name} to={'/#' + item.path} id={item.path} className={classNames("cursor-pointer text-sm relative text-gray-300 hover:text-white duration-150 font-semibold  leading-6   ", {
                            // 'before:bg-indigo-700 before:absolute before:w-[150%] before:h-[120%] before:rounded-md before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-1]': item.current
                            '!text-white drop-shadow-glow': currentPath == item.path
                        })}>
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to='contact' className='rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
                        <TransparentButton glowClassName='bg-transparent-button-sm' title='Message Us' size='md' onClick={() => { }} />
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold leading-6  flex gap-2">
                        Schedule <AppIcon name='arrow-right' />
                    </a> */}
                </div>
                <div className='w-full h-[1px]  absolute bottom-0' style={{ background: "radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%)" }}></div>
            </nav>
            {mobileMenuOpen && <div className="backdrop-blur-md relative h-screen sm:max-w-sm  z-[9998]  lg:hidden" >
                <div className="fixed h-full     left-0 z-50 w-full overflow-y-auto bg-transparent backdrop-blur-md px-6  sm:max-w-sm ">

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">

                            <div className="py-6 space-y-4">

                                {navLinks.map((item) => (
                                    <Link key={item.name} to={'/#' + item.path} id={item.path} className={classNames("-mx-3 block rounded-md px-3 py-2.5 text-lg font-semibold leading-7 text-white hover:bg-indigo-500/25", {
                                        // 'before:bg-indigo-700 before:absolute before:w-[150%] before:h-[120%] before:rounded-md before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-1]': item.current
                                        '!text-white drop-shadow-glow': currentPath == item.path
                                    })}>
                                        {item.name}
                                    </Link>
                                ))}
                                <Link to='contact'>
                                    <TransparentButton onClick={() => { }} title='Message Us' className='w-full mt-4' size='xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </header>
    )
}

export default Navbar