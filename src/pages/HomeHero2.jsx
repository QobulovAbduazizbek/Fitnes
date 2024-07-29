import React from 'react'
import text from "../Img/Text.png"
import { Link } from 'react-router-dom'
import Fitnes from "../Img/Fitnes.jpg"

const HomeHero2 = () => {
  return (
    <div className='bg-AA w-full max-w-[1510px] mx-auto px-5 py-10'>
        <div className='flex justify-between items-center mb-20'>
            <div className='mr-10'>
            <img className='mb-10' src={text} alt="text" />
            <p className='text-[18px] text-white mb-8 leading-7'>Сегодня спорт и спортивный образ жизни стал неотъемлемой частью многих из <br /> нас. И все же остается немало вопросов. Все ответы Вы сможете найти у <br /> инструкторов нашего клуба - это специалисты, за плечами которых и спортивный и <br />тренерский опыт. При посещении нашего фитнес зала, персональный инструктор <br /> разработает план индивидуальных занятий, соответствующий Вашей физической <br /> подготовке, достигаемым целям и предпочтениям.</p>
            <Link className='text-white text-[22px] hover:text-red-500'><u>Подробнее</u></Link>
            </div>
            <div>
            <img className='w-[650px] h-[520px] rounded-2xl' src={Fitnes} alt="Fitnes" />
            </div>
        </div>
        <ul className='grid grid-cols-4 gap-5'>
            <li className='text-white text-[20px]'><span className='text-red-500 text-[60px] mr-2'>14</span> Лет опыт работы</li>
            <li className='text-white text-[20px]'><span className='text-red-500 text-[60px] mr-2'>34+</span> тренажёров</li>
            <li className='text-white text-[20px]'><span className='text-red-500 text-[60px] mr-2'>400</span> клиентов за месяц</li>
            <li className='text-white text-[20px]'><span className='text-red-500 text-[60px] mr-2'>15%</span> Скидка клиентам</li>
        </ul>
    </div>
  )
}

export default HomeHero2
