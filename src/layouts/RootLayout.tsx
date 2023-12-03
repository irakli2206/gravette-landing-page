import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>

  )
}

export default RootLayout