import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Logo from '../assets/logo-light.svg'
import { Link, useLocation } from 'react-router-dom'
import { TransparentButton } from './Buttons'


let navLinks = [
    { name: 'Testimonials', path: 'testimonials' },
    { name: 'Pricing', path: 'pricing' },
    // { name: 'Contact', href: '/contact', current: false },
]

const Navbar = () => {
    const [currentPath, setCurrentPath] = useState('/')

    const location = useLocation()
    const path = location.pathname

    useEffect(() => {
        setCurrentPath(path)
    }, [path])


    return (
        <header className={classNames("fixed inset-x-0 top-0 z-[9999]  font-sans  backdrop-blur-md")}>
            <nav className="flex relative  max-w-screen-xl mx-auto items-center justify-between p-2.5 lg:px-8 " aria-label="Global">
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
                <div className="  lg:flex lg:flex-1 lg:justify-end">
                    <Link to='contact' className='rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600' >
                        <TransparentButton glowClassName='bg-transparent-button-sm' title='Message Us' size='md' onClick={() => { }} />
                    </Link>
                    {/* <a href="#" className="text-sm font-semibold leading-6  flex gap-2">
                        Schedule <AppIcon name='arrow-right' />
                    </a> */}
                </div>
                <div className='w-full h-[1px]  absolute bottom-0' style={{ background: "radial-gradient(62.87% 100% at 50% 100%,rgba(255,255,255,.12) 0%,rgba(255,255,255,0) 100%)" }}></div>
            </nav>

        </header>
    )
}

export default Navbar