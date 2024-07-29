import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import bolim1 from '../Img/bolim1.webp';
import bolim6 from '../Img/bolim6.webp';
import bolim7 from '../Img/bolim7.webp';

const MaqolalarVaMaslahatlar2 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        console.log(`Selected item: ${item}`);
        setIsOpen(false); // Close the dropdown after selecting an item
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleEscape = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div className='bg-white'>
            <div className='w-full max-w-[1460px] mx-auto px-4 py-10'>
                <h2 className='mb-10 opacity-60 text-xs sm:text-sm md:text-base'>
                    <Link to='/' className='text-red-600'>Главная/</Link>
                    <Link to='/okompany' className='text-red-600'>О компании/</Link>
                    <Link to='/MaqolalarVaMaslahatlar' className='text-red-600'>Статьи и советы/</Link>
                    Производственные цеха
                </h2>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mb-16'>Производственные цеха</h1>
                <div
                    className="mb-5 relative inline-block"
                    ref={dropdownRef}
                >
                    <button
                        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={handleToggle}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            className="w-5 h-5 mr-2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        <span className='text-blue-700'>Разделы</span>
                    </button>

                    {isOpen && (
                        <ul className="dropdown-menu absolute top-full left-0 mt-2 bg-white shadow-lg z-10 list-none p-0 m-0 w-60 md:w-72 lg:w-80">
                            <li className='pt-3 font-semibold pr-4 p-2 transition-all duration-300'>
                                <Link to="/MaqolalarVaMaslahatlar2" className='text-blue-700 hover:text-blue-500'><u>Производственные <br />цеха</u></Link>
                            </li>
                            <li className='pt-3 font-semibold pr-4 p-2 transition-all duration-300'>
                                <Link to="/MaqolalarVaMaslahatlar3" className='text-blue-700 hover:text-blue-500'><u>Новости компании</u></Link>
                            </li>
                            <li className='pt-3 font-semibold pr-4 p-2 transition-all duration-300'>
                                <Link to="/MaqolalarVaMaslahatlar4" className='text-blue-700 hover:text-blue-500'><u>Для посетителей</u></Link>
                            </li>
                        </ul>
                    )}
                </div>
                <ul className='space-y-6'>
                    {[{ src: bolim1, alt: "bolim1", title: "Профессиональное обслуживание клиентов", link: '/Bolim1' },
                      { src: bolim6, alt: "bolim6", title: "Инициативный аудит", link: '/Bolim6' },
                      { src: bolim7, alt: "bolim7", title: "Медийная реклама", link: '/Bolim7' }
                    ].map((item, index) => (
                        <li key={index} className='flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 py-4 px-5 border rounded-md'>
                            <div className='flex-1'>
                                <time className='opacity-60 text-xs sm:text-sm md:text-base' datetime="2020-02-04">04.02.2020 <br /></time>
                                <Link to={item.link} className='text-lg sm:text-xl md:text-2xl text-red-500'><u>{item.title}</u></Link>
                                <div className='flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 mt-4'>
                                    <img className='w-100px h-auto md:w-64 lg:w-80' src={item.src} alt={item.alt} />
                                    <p className='mt-2 md:mt-0 text-xs sm:text-sm md:text-base opacity-70'>{item.description || 'При создании новости, помимо заголовка и содержимого, Вы можете задать еще ряд параметров. Тут Вы видите пример заполнения анонса новости. Пройдя по ссылке "читать дальше" Вы можете ознакомиться с полным текстом новостей и примером заполнения.'}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MaqolalarVaMaslahatlar2;
