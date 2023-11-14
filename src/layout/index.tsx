import React from 'react'
import Navbar from '../components/Navbar';
import HomePage from '../pages/HomePage';
import Footer from '../components/footer';

const Layout = () => {
  return (
    <div className='layout'>
        <Navbar />
        <HomePage />
        <Footer />
    </div>
    
  )
}

export default Layout;