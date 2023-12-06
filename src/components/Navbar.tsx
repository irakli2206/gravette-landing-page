import {  useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import classNames from 'classnames'
import Logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Buttons'
import { Link as ScrollLink} from 'react-scroll';


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

    return (
        <header className="fixed inset-x-0 top-0 z-[9999] font-sans backdrop-blur-md ">
            <nav className="flex relative max-w-screen-xl mx-auto items-center justify-between p-2.5 lg:px-8 " aria-label="Global">
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
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navLinks.map((item) => (
                        <ScrollLink key={item.name} smooth={true} to={item.path} className={classNames("cursor-pointer text-sm relative text-gray-300 hover:text-white duration-150 font-semibold  leading-6   ", {
                            // 'before:bg-indigo-700 before:absolute before:w-[150%] before:h-[120%] before:rounded-md before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:z-[-1]': item.current
                            '!text-white drop-shadow-glow': currentPath == item.path
                        })}>
                            {item.name}
                        </ScrollLink>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to='schedule' >
                        <Button title='Message Us' size='sm' onClick={() => { }} />
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold leading-6  flex gap-2">
                        Schedule <AppIcon name='arrow-right' />
                    </a> */}
                </div>
                <div className='w-full h-[1px]  absolute bottom-0' style={{background: "radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%)"}}></div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {/* {navLinks.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))} */}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}

export default Navbar