
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'

const RootLayout = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <Navbar />


      <div className="min-h-screen"

      >
        <AnimatePresence
          mode='wait'

        >
          <Outlet />
        </AnimatePresence>
      </div>

      <Footer />
    </div >

  )
}

export default RootLayout