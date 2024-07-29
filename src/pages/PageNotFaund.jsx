import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='bg-white'>
      <div className='w-full max-w-[1450px] mx-auto px-4 sm:px-5 py-10'>
        <h2 className='mb-5 sm:mb-8 opacity-60 text-xs sm:text-sm md:text-base'>
          <Link to='/' className='text-red-600'>Главная/</Link> Страница не найдена
        </h2>
        <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8'>
          Страница не найдена
        </h1>
        <h2 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>
          404 Not Found
        </h2>
      </div>
    </div>
  )
}

export default PageNotFound
