import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Togo_1 from '../Img/Togo_1.webp';
import Togo_2 from '../Img/Togo_2.webp';
import Hola_1 from '../Img/Hola_1.webp';

const BizHaqimizda = () => {
  const [modal, setModal] = useState(false);
  const closeModal = (e) => {
    if (e.target.id === 'overlay') setModal(false);
  };
  const clickEscape = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };
  document.addEventListener('keydown', clickEscape);

  return (
    <div className='bg-white'>
      <div className='w-full max-w-[1450px] mx-auto px-5 py-10'>
        <div className='flex items-center pt-10 mb-7 text-sm sm:text-base md:text-lg'>
          <Link to={'/'} className="text-red-600"><u>Главная</u><span className='mx-1'>/</span></Link>
          <p className='text-[#a5a3a3]'>Отзывы о нас</p>
        </div>
        <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10'>
          Отзывы о нас
        </h3>
        <ul className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6'>
          <li>
            <p className='text-sm sm:text-base md:text-lg mb-2'>
              Начинаем строительство уже второго дома. Первый строили для себя, теперь решили родителям жены сделать подарок, чтобы не ютились в маленькой квартире. Ребята, вы вообще молодцы и реально профессионалы! Хочу искренне поблагодарить Виктора, который проектировал, учесть столько мелочей… Спасибо! Надеемся, что все и дальше пойдет слажено, качественно и позитивно.
            </p>
            <div className='flex items-center mb-7'>
              <img className='rounded-full w-16 h-16 md:w-20 md:h-20 mr-5' src={Togo_1} alt="" />
              <p className='text-lg md:text-xl font-bold'>Кирилл Яковлев</p>
            </div>
            
          </li>
          <li>
            <p className='text-sm sm:text-base md:text-lg mb-2'>
              У нас была масса сомнений по поводу строительства, но нам устроили экскурсию на строящемся объекте. Менеджер отвечал на все наши вопросы честно, толково. Очень располагает, когда люди прямо говорят: вот это сделать можно, это нельзя, а тут проблему можно обойти вот таким способом. В целом проект продуман прекрасно. В доме просто приятно находиться, душой отдыхаешь.
            </p>
            <div className='flex items-center mb-7'>
              <img className='rounded-full w-16 h-16 md:w-20 md:h-20 mr-5' src={Hola_1} alt="" />
              <p className='text-lg md:text-xl font-bold'>Александра Сомова</p>
            </div>
          </li>
          <li>
            <p className='text-sm sm:text-base md:text-lg mb-2'>
              Очень благодарен за теплый и профессиональный подход, который я получил. Спасибо за ответственность, открытость и готовность помочь. Всегда буду рекомендовать вас друзьям и знакомым.
            </p>
            <div className='flex items-center mb-7'>
              <img className='rounded-full w-16 h-16 md:w-20 md:h-20 mr-5' src={Togo_2} alt="" />
              <p className='text-lg md:text-xl font-bold'>Александр Ягудин</p>
            </div>
          </li>
        </ul>
        <button onClick={() => setModal(true)} className='bg-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base md:text-lg text-green-500 hover:bg-blue-400 hover:text-white'>
              Оставить отзыв
            </button>
      </div>
      {modal && (
        <div onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-50 z-20 py-5' id='overlay'>
          <div className='max-w-[90%] md:max-w-[650px] bg-white w-full mx-auto min-h-[50%] md:min-h-[60%] bg-bgModal rounded-3xl relative'>
            <button onClick={() => setModal(false)} className='absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full text-2xl md:text-3xl font-bold bg-white text-black'>
              &times;
            </button>
            <div className='px-5 md:px-10 py-8 md:py-12'>
              <h1 className='text-black text-xl md:text-2xl lg:text-3xl font-semibold mb-7'>Оставить отзыв</h1>
              <form>
                <p className='text-lg md:text-xl mb-1'>Имя <span className='text-red-500 font-bold'>*</span></p>
                <input className='text-black w-full text-base sm:text-lg px-4 py-3 mb-5 border rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="text" />
                <p className='text-lg md:text-xl mb-1'>Телефон <span className='text-red-500 font-bold'>*</span></p>
                <input className='text-black w-full text-base sm:text-lg px-4 py-3 mb-5 border rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="tel" />
                <p className='text-lg md:text-xl mb-1'>Текст отзыва <span className='text-red-500 font-bold'>*</span></p>
                <textarea className='text-black w-full text-base sm:text-lg px-4 py-3 mb-5 border rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' name="Message"></textarea>
              </form>
              <div className='flex items-center mb-7'>
                <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
                <Link to={'/FoydalanishSharti'} className='text-sm sm:text-base hover:text-[#51bef0e3] duration-500'>
                  Я принимаю условия обработки моих <u className='text-[#51bef0e3]'>персональных данных</u> <span className='text-red-600'>*</span>
                </Link>
              </div>
              <button className='px-4 sm:px-5 md:px-7 py-2 sm:py-3 bg-[#2c9dd1] text-white rounded-md hover:bg-[#33afe9] duration-500'>
                Отправить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BizHaqimizda;
