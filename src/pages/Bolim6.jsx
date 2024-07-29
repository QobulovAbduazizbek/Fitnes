import React from 'react'
import { Link } from 'react-router-dom'

const Bolim6 = () => {
  return (
    <div className='bg-white'>
      <div className='w-full max-w-[1460px] mx-auto px-5 py-10'>
        <h2 className='mb-5 sm:mb-8 md:mb-10 opacity-60 text-sm sm:text-base md:text-lg lg:text-xl'>
          <Link to='/' className='text-red-600 hover:underline'>Главная/</Link> 
          <Link to={'/okompany'} className='text-red-600 hover:underline'>О компании/</Link> 
          <Link to={'/MaqolalarVaMaslahatlar'} className='text-red-600 hover:underline'>Статьи и советы/</Link> 
          <Link to={'/MaqolalarVaMaslahatlar2'} className='text-red-600 hover:underline'>Производственные цеха/</Link> 
          Инициативный аудит
        </h2>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 sm:mb-12 md:mb-16'>
          Инициативный аудит
        </h1>
        <h5 className='text-gray-500 text-sm sm:text-base md:text-lg mb-4 sm:mb-5'>
          Дата публикации: 04.02.2020
        </h5>
        <h4 className='text-base sm:text-lg md:text-xl mb-3 sm:mb-4'>
          В данном разделе мы рекомендуем Вам размещать новостные, информационные, справочные и иные статьи, так или иначе связанные с работой Вашей компании.
        </h4>
        <h4 className='text-base sm:text-lg md:text-xl mb-3 sm:mb-4'>
          Вы можете задать способ отображения новостей в ленте: анонс (со ссылкой на полный текст) или новости целиком. Помимо этого, доступны настройки сортировки, количества новостей на странице и формата изображений, прикрепленных к новостям.
        </h4>
        <h3 className='text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4'>
          Пример новости:
        </h3>
        <h4 className='text-base sm:text-lg md:text-xl mb-3 sm:mb-4'>
          Приветствуем Вас на сайте нашей компании. Теперь, помимо сети филиалов по всему городу, у нас есть и небольшое Интернет-представительство, где Вы всегда можете ознакомиться с перечнем предоставляемой продукции, а также действующих акций и скидок, подобрать и оформить заказ, получить любую справочную и контактную информацию и просто всегда быть в курсе последних новостей нашей фирмы.
        </h4>
        <h4 className='text-base sm:text-lg md:text-xl'>
          В данном разделе Вы всегда сможете найти актуальную и полезную информацию о предоставляемой продукции, последних поступлениях, обновлении товаров и многом другом.
        </h4>
      </div>
    </div>
  )
}

export default Bolim6
