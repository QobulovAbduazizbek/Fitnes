import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

const MainLayout = () => {
  return (
    <div className='w-full bg-black flex flex-col'>
        <Header />
      <main className='grow '>
        <Outlet/>
      </main>
      <Footer/>


      
    </div>
  )
}

export default MainLayout
