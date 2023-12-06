
import Logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="mx-auto  w-full max-w-container ">
            <div className="border-t border-gray-800  py-10">

                <div className='flex gap-2 justify-center items-center mx-auto'>
                    <img src={Logo} className='w-16 h-16 ' />
                    {/* <h1 className='text-3xl'>Coin Counsel</h1> */}
                </div>

                <p className="mt-5 text-center text-sm leading-6 ">© 2023 Gravette. All rights reserved.</p>
                <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-gray-500 [&>*]:transition">
                    <a href="/privacy-policy" className='hover:text-gray-400'>Privacy policy</a><div className="h-4 w-px bg-slate-500/20">
                    </div>
                    <a href="/changelog" className='hover:text-gray-400'>Changelog</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer