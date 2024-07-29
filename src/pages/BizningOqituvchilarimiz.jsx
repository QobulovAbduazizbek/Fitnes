import React from 'react'
import SectionLogo1 from "../Img/SectionLogo1.jpg";
import SectionLogo4 from "../Img/SectionLogo4.jpg";
import { Link } from 'react-router-dom';

const BizningOqituvchilarimiz = () => {
  return (
    <div className='bg-white'>
      <div className="w-full max-w-[1450px] mx-auto px-5 py-10">
        <h2 className='mb-5 opacity-60 text-sm sm:text-base md:text-lg'>
          <Link to='/' className='text-red-600 hover:underline'>Главная/</Link> Наши инструкторы
        </h2>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10'>
          Наши инструкторы
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={SectionLogo1} alt='SectionLogo1' className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover" />
            <div className="p-4">
              <h2 className="text-black text-base sm:text-lg md:text-xl mb-2">Пример - Екатерина Смагина</h2>
              <p className="text-gray-800 text-sm sm:text-base mb-5">Пример - Администратор</p>
              <p className="text-gray-800 text-sm sm:text-base mb-2">Пример - Администратор Пример - Когда Екатерина Смагина, дипломированный инженер-эколог, талантливая танцовщица и молодая мама, начала работать администратором..</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={SectionLogo4} alt='SectionLogo4' className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover" />
            <div className="p-4">
              <h2 className="text-black text-base sm:text-lg md:text-xl mb-2">Пример - Екатерина Смагина</h2>
              <p className="text-gray-800 text-sm sm:text-base mb-5">Пример - Администратор</p>
              <p className="text-gray-800 text-sm sm:text-base mb-2">Пример - Администратор Пример - Когда Екатерина Смагина, дипломированный инженер-эколог, талантливая танцовщица и молодая мама, начала работать администратором..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BizningOqituvchilarimiz
