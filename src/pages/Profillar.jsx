import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png'

const Profillar = () => {
  return (
    <div>
       <div className='w-full max-w-[1450px] mx-auto px-5 py-20'>
      <h2 className='mb-5 opacity-60'>
        <Link to='/' className='text-[#79c701]'>Главная/</Link> Профили
      </h2>
      <h1 className='font-bold text-5xl mb-16'>Профили</h1>
      <div className='font-normal text-[22px] space-y-5 opacity-60 mb-20'>
       <p>Окна из алюминиевого профиля устанавливают в коттеджах, зимних садах, беседках, кафе, на витринах, террасах. Они пропускают больше света, чем пластиковые. Профильные системы из алюминия подходят для крупногабаритного панорамного остекления, дверных проемов. Они выдерживают большую нагрузку, разнообразны по оформлению. Есть профили с термовставкой, хорошо изолирующие шум, тепло.</p>
       <p>Алюминиевые окна долговечны, сохраняют первоначальные свойства на протяжении нескольких десятков лет. Они устойчивы к осадкам, огню, механическому воздействию, не боятся ржавчины. Заказать в Москве алюминиевые окна и двери от производителя вы можете в нашей компании. Мы изготавливаем и устанавливаем оконные системы любой формы и размера с гарантией 5 лет.</p>
      </div>

      <div className="space-y-5">
        <Link to='' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
           <span className=' text-xl opacity-50'>Одностворчатое окно</span>
            <img className='w-5 h-5 rounded-full ' src={arrow} alt="arrowimg" />
        </Link>
        <Link to='' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
           <span className=' text-xl opacity-50'> Двухстворчатое окно</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
        </Link>
        <Link to='' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
           <span className=' text-xl opacity-50'> Трехстворчатое окно</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
        </Link>
        
      </div>
      <Outlet/>
    </div>
    </div>
  )
}

export default Profillar
