import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo1 from "../Img/Logo1.jpg";
import Logo2 from "../Img/Logo2.jpg";
import Logo3 from "../Img/Logo3.jpg";
import Logo4 from "../Img/Logo4.jpg";
import Logo5 from "../Img/Logo5.jpg";
import Logo6 from "../Img/Logo6.jpg";
import x from "../Img/X.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const HomeSlider = () => {
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

    const toggleInfoModal = () => {
        setIsInfoModalOpen(prev => !prev);
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
        <div className='w-full max-w-[1450px] mx-auto px-5 py-10'>
            <h2 className='text-red-500 text-[40px] font-bold'>УСЛУГИ</h2>
            <h2 className='text-white text-[50px] font-bold mb-10'>МЫ ПРЕДЛАГАЕМ</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                breakpoints={{
                    240: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {[Logo1, Logo2, Logo3, Logo4, Logo5, Logo6].map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className='relative w-full h-full mb-10'>
                            <img className='w-full h-[400px] rounded-[20px] object-cover' src={logo} alt={`Logo ${index + 1}`} />
                            <p className='absolute inset-0 flex items-center justify-center text-white text-[30px] font-bold bg-black bg-opacity-50 hover:bg-opacity-0 transition-all'>ТРЕНАЖЕРНЫЙ ЗАЛ</p>
                        </div>
                        <button onClick={toggleInfoModal} className='text-white bg-red-600 hover:bg-red-500 pt-7 pr-12 pb-6 pl-12 rounded-2xl text-center text-[30px] font-bold ml-28'>ЗАПИСАТЬСЯ</button>
                    </SwiperSlide>
                ))}
            </Swiper>
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
                            <form>
                                <input className='text-black bg-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-b-2 rounded-md hover:border-red-500 duration-500' type="text" placeholder="Ваше имя" />
                                <input className='text-black bg-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-b-2 rounded-md hover:border-red-500 duration-500' type="tel" placeholder="+7 (___) ___ __ __" />
                            </form>
                            <div className='flex items-center mb-4'>
                                <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
                                <Link to={''} className='text-sm text-white duration-500 sm:text-base'>
                                    Ознакомлен с<u className='text-red-500'>пользовательским соглашением </u><span className="text-red-600 text-bold text-xl"> *</span>
                                </Link>
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

export default HomeSlider;
