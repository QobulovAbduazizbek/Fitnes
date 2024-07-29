import React from 'react';
import { Link } from 'react-router-dom';
import watsdap from "../Img/watsap.svg";
import telegram from "../Img/telegram.svg";
import wk from "../Img/wk.svg";
import ok from "../Img/ok.svg";
import ru from "../Img/ru.svg";

const Kontakt = () => {
    return (
        <div className='bg-white'>
            <div className='w-full max-w-[1450px] mx-auto px-5 py-10'>
                <h2 className='mb-5 text-lg sm:text-xl md:text-2xl lg:text-xl opacity-60'>
                    <Link to='/' className='text-red-600'>Главная/</Link>Контакты
                </h2>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mb-16'>Контакты</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <div className='w-full max-w-[448px] space-y-5'>
                        <div className='flex flex-col sm:flex-row sm:justify-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                            <Link className='text-xl sm:text-2xl font-bold opacity-60'>+7 (000) 000-00-00</Link>
                            <div className='flex space-x-2'>
                                <img className='w-8 h-8 sm:w-10 sm:h-10' src={watsdap} alt="WhatsApp" />
                                <img className='w-8 h-8 sm:w-10 sm:h-10' src={telegram} alt="Telegram" />
                            </div>
                        </div>
                        <p className='text-lg sm:text-xl opacity-60'>Пн—Пт с 11:00 до 21:00</p>
                        <p className='text-lg sm:text-xl opacity-60'>Сб—Вс Выходной</p>
                        <p className='text-lg sm:text-xl opacity-60'>г. Москва, ул. Ленинская, дом 0, корп 0, офис 0</p>
                        <a className='text-xl sm:text-2xl text-[#4285f5] inline-block mt-5' href="mailto:mail@company.ru">mail@company.ru</a>
                        <p className='text-lg sm:text-xl opacity-60'>ИНН 000000000 ОГРН 000000000</p>
                        <div className="flex flex-wrap gap-2">
                            <img className='rounded-lg w-10 h-10 sm:w-12 sm:h-12' src={wk} alt="VK" />
                            <img className='rounded-lg w-10 h-10 sm:w-12 sm:h-12' src={ok} alt="OK" />
                            <img className='rounded-lg w-10 h-10 sm:w-12 sm:h-12' src={ru} alt="RU" />
                        </div>
                    </div>

                    <div className='col-span-2 relative'>
                        <a
                            href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps"
                            className='text-xs md:text-sm absolute top-0 left-0 text-gray-500'
                        >
                            Yandex Maps
                        </a>
                        <a
                            href="https://yandex.com/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&utm_medium=mapframe&utm_source=maps&z=9.13"
                            className='text-xs md:text-sm absolute top-4 left-0 text-gray-500'
                        >
                            Moscow — Yandex Maps
                        </a>
                        <iframe
                            className='w-full h-[300px] md:h-[400px] lg:h-[500px] border-0'
                            src="https://yandex.com/map-widget/v1/?ll=37.385439%2C55.584227&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=9.13"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontakt;
