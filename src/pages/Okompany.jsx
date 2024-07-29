import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png';

const Okompany = () => {
  return (
    <div className='bg-white'>
      <div className='w-full max-w-[1450px] mx-auto px-4 sm:px-5 py-10 sm:py-20'>
        <h2 className='mb-5 opacity-60 text-xs sm:text-sm md:text-base'>
          <Link to='/' className='text-red-600'>Главная/</Link> О компании
        </h2>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mb-10 sm:mb-16'>О компании</h1>
        <div className='font-normal text-base sm:text-lg md:text-[22px] space-y-5 mb-10'>
          <p>
            В этом блоке мы рекомендуем разместить информацию о Вашей организации, подчеркнуть ее значимость и надежность на рынке оказываемых услуг или предлагаемых товаров.
          </p>
          <p>
            Примечание. Обращаем Ваше внимание, что текстовая информация на сайте должна быть индивидуальной, не скопированной с других интернет-ресурсов, о чем указано в рекомендациях Яндекса: «Мы стараемся не индексировать или не ранжировать высоко сайты, копирующие информацию с других ресурсов и не создающие оригинального контента или сервиса».
          </p>
          <h2 className='font-bold text-xl sm:text-2xl md:text-[30px]'>Пример заполнения страницы:</h2>
          <p>Вас приветствует компания «...» введите название компании!</p>
          <p>…введите название компании - динамично развивающаяся компания в области/сфере … укажите сферу деятельности.</p>
          <p>Мы рады предложить вам широкий спектр услуг по … укажите предлагаемые услуги по самым выгодным ценам.</p>
          <p>или</p>
          <p>Мы рады предложить вам широкий ассортимент … укажите предлагаемые товары по самым выгодным ценам.</p>
          <p>Вот уже … укажите стаж работы компании лет наша компания занимает уверенные позиции на рынке и предоставляет только самые современные решения, позволяя нашим клиентам делать заказы через сайт.</p>
          <p>За годы успешной работы компания … введите название компании приобрела бесценный опыт, о чем свидетельствуют лестные отзывы наших клиентов.</p>
          <p>В случае если у Вас возникли вопросы при оформлении заказа, Вы всегда можете обратиться в наш справочный центр по телефону … укажите номер телефона или воспользовавшись онлайн-консультантом на сайте.</p>
        </div>

        <div className="space-y-5">
          <Link to='/' className='bg-[#d9e7fc] w-full sm:w-[450px] flex justify-between items-center px-4 sm:px-5 py-3 rounded-lg'>
            <span className='text-sm sm:text-xl opacity-50'>Статьи и советы</span>
            <img className='w-4 h-4 sm:w-5 sm:h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='' className='bg-[#d9e7fc] w-full sm:w-[450px] flex justify-between items-center px-4 sm:px-5 py-3 rounded-lg'>
            <span className='text-sm sm:text-xl opacity-50'>Напишите нам</span>
            <img className='w-4 h-4 sm:w-5 sm:h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='' className='bg-[#d9e7fc] w-full sm:w-[450px] flex justify-between items-center px-4 sm:px-5 py-3 rounded-lg'>
            <span className='text-sm sm:text-xl opacity-50'>Условия оплаты</span>
            <img className='w-4 h-4 sm:w-5 sm:h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='' className='bg-[#d9e7fc] w-full sm:w-[450px] flex justify-between items-center px-4 sm:px-5 py-3 rounded-lg'>
            <span className='text-sm sm:text-xl opacity-50'>Способы оплаты</span>
            <img className='w-4 h-4 sm:w-5 sm:h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
        </div>
        <Outlet/>
      </div>
    </div>
  );
};

export default Okompany;
