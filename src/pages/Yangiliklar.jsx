import React from 'react'
import { Link } from 'react-router-dom'

const Yangiliklar = () => {
  return (
    <div className='bg-white'>
      <div className='w-full max-w-[1460px] mx-auto px-4 sm:px-5 py-6 sm:py-10'>
        <h2 className='mb-6 sm:mb-8 md:mb-10 opacity-60 text-sm sm:text-base md:text-lg'>
          <Link to={'/'} className='text-red-600'>Главная/</Link> Новости
        </h2>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-12 md:mb-16'>
          Новости
        </h1>
      </div>
    </div>
  )
}

export default Yangiliklar
