import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../Img/Section2Logo1.jpg';
import Logo2 from '../Img/Section2Logo2.jpg';
import x from '../Img/X.png';

const HomeSection2 = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const toggleInfoModal = () => {
    setIsInfoModalOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsInfoModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      setIsInfoModalOpen(false);
    }
  };

  return (
    <div className='bg-AA w-full max-w-[1519px] mx-auto px-5 py-20'>
      <h2 className="text-red-500 text-[40px] font-bold">ТРЕНЕРЫ</h2>
      <h2 className="text-white text-[50px] font-bold mb-10">
        НАШИ ИНСТРУКТОРЫ
      </h2>
      <div className='grid grid-cols-3 gap-5 justify-between items-center'>
        <div className="bg-black py-5 flex  w-[400px] h-[300px] rounded-2xl">
          <div>
            <h2 className="text-white text-3xl ml-5 font-bold mb-2 hover:text-red-500 cursor-pointer">
              Эконом
            </h2>
            <p className="text-white mb-8 ml-5">Срок действия: 1 месяц</p>
            <p className='text-white ml-5 mb-8'>
              <span className='text-white text-[30px] mr-2 '>1400</span>
              рублей
            </p>
            <button
              onClick={toggleInfoModal}
              className="text-white bg-red-600 hover:bg-red-500 ml-5 px-7 py-4 rounded-2xl text-center text-[18px] font-bold"
            >
              ЗАПИСАТЬСЯ
            </button>
          </div>
        </div>
        <div className="bg-black py-5 flex w-[400px] h-[300px] rounded-2xl">
          <div>
            <h2 className="text-white text-3xl ml-5 font-bold mb-2 hover:text-red-500 cursor-pointer">
            Стандарт
            </h2>
            <p className="text-white mb-8 ml-5">Срок действия: 6 месяцев</p>
            <p className='text-white ml-5 mb-8'>
              <span className='text-white text-[30px] mr-2 '>3260</span>
              рублей
            </p>
            <button
              onClick={toggleInfoModal}
              className="text-white bg-red-600 hover:bg-red-500 ml-5 px-7 py-4 rounded-2xl text-center text-[18px] font-bold"
            >
              ЗАПИСАТЬСЯ
            </button>
          </div>
        </div>
        <img className='rounded-xl ' src={Logo1} alt="Logo1" />
        <div className="bg-black py-5 flex w-[400px] h-[300px] rounded-2xl">
          <div>
            <h2 className="text-white text-3xl ml-5 font-bold mb-2 hover:text-red-500 cursor-pointer">
            Серебро
            </h2>
            <p className="text-white mb-8 ml-5">Срок действия: 12 месяцев</p>
            <p className='text-white ml-5 mb-8'>
              <span className='text-white text-[30px] mr-2 '>5600</span>
              рублей
            </p>
            <button
              onClick={toggleInfoModal}
              className="text-white bg-red-600 hover:bg-red-500 ml-5 px-7 py-4 rounded-2xl text-center text-[18px] font-bold"
            >
              ЗАПИСАТЬСЯ
            </button>
          </div>
        </div>
        <div className="bg-black py-5 flex w-[400px] h-[300px] rounded-2xl">
          <div>
            <h2 className="text-white text-3xl ml-5 font-bold mb-2 hover:text-red-500 cursor-pointer">
            Золото
            </h2>
            <p className="text-white mb-8 ml-5">Срок действия: 12 месяцев</p>
            <p className='text-white ml-5 mb-8'>
              <span className='text-white text-[30px] mr-2 '>12800</span>
              рублей
            </p>
            <button
              onClick={toggleInfoModal}
              className="text-white bg-red-600 hover:bg-red-500 ml-5 px-7 py-4 rounded-2xl text-center text-[18px] font-bold"
            >
              ЗАПИСАТЬСЯ
            </button>
          </div>
        </div>
        <img className='rounded-xl' src={Logo2} alt="Logo2" />
      </div>
      {isInfoModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-AA p-6 rounded-lg relative">
            <button
              onClick={toggleInfoModal}
              className="absolute top-2 right-2 bg-black hover:bg-white p-2 rounded-full"
            >
              <img src={x} alt="Close" className="w-4 h-4" />
            </button>
            <div className='px-6 py-8 sm:px-4 sm:py-6'>
          <h1 className='text-white text-2xl sm:text-3xl text-center font-semibold mb-3'>Записаться</h1>
          <form >
            <input className='text-black bg-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-b-2  rounded-md hover:border-red-500 duration-500' type="text" placeholder="Ваше имя" />
            <input className='text-black bg-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-b-2  rounded-md hover:border-red-500 duration-500' type="tel" placeholder="+7 (___) ___ __ __" />
          </form>
          <div className='flex items-center mb-4'>
            <input type="checkbox" className='mr-3 h-5  w-5 rounded-lg border-none' />
            <Link to={''} className='text-sm text-white duration-500 sm:text-base'>
Ознакомлен с<u className='text-red-500'>пользовательским соглашением </u><span className="text-red-600 text-bold text-xl"> *</span></Link>
          </div>
          <div className="flex justify-center">
            <button className='w-[200px] py-4 bg-red-500 text-lg text-white rounded-md sm:text-xl'>ОТПРАВЛЯТЬ</button>
          </div>
        </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default HomeSection2;
