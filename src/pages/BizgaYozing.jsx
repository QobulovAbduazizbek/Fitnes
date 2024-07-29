import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BizgaYozing = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    return (
        <div className='bg-white'>
            <div className='w-full max-w-[1460px] mx-auto px-5 py-10'>
                <h2 className='mb-10 opacity-60 text-sm sm:text-base md:text-lg'>
                    <Link to='/' className='text-red-600'>Главная/</Link> 
                    <Link to={'/okompany'} className='text-red-600'>О компании/</Link> 
                    Напишите нам
                </h2>
                <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mb-16'>
                    Напишите нам
                </h1>
                <div className="w-full max-w-md mx-auto mt-10">
                    <form className="space-y-6">
                        <div className="relative">
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                                placeholder="Ismingiz"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                            >
                                Ваше имя
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                                placeholder="Email manzilingiz"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                            >
                                Телефон
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="peer h-24 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600"
                                placeholder="Xabaringiz"
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600"
                            >
                                Комментарий
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BizgaYozing;
