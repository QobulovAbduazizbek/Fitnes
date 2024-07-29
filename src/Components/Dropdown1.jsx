import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleItemClick = (item) => {
        console.log(`Selected item: ${item}`);
    };

    return (
        <div 
            className="dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <Link to={'/okompany'} className="dropdown-toggle opacity-70 flex items-center justify-between text-white">
              <span className='mr-4 hover:text-red-500 transition-all duration-300'>
              
О компании
              </span>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 21 11"
            >
              <path d="M0 2.737L10.5 11 21 2.737 17.57 0 10.5 5.564 3.43 0z" fill='white' fillRule="evenodd"></path>
            </svg>
            </Link>
          
            {isOpen && (
                <ul className="rounded-2xl" style={{
                    display: 'block',
                    position: 'absolute',
                    top: '100%',
                    left: -20,
                    backgroundColor: '#000',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    width: '300px',
                    color: '#fff'
                }}>
                <li className='opacity-70 border-2 text-white hover:text-red-500 rounded-none transition-all duration-300' onClick={() => handleItemClick("Option 1")} style={{ padding: '12px 15px', cursor: 'pointer' }}>
                    <Link to="/MaqolalarVaMaslahatlar" className="text-white">Статьи и советы</Link>
                </li>
                <li className='opacity-70 border-x-2 text-white hover:text-red-500 rounded-none transition-all duration-300' onClick={() => handleItemClick("Option 2")} style={{ padding: '12px 15px', cursor: 'pointer' }}>
                    <Link to={'/BizgaYozing'} className="text-white">Напишите нам</Link>
                </li>
                <li className='opacity-70 border-x-2 text-white hover:text-red-500 rounded-none transition-all duration-300' onClick={() => handleItemClick("Option 4")} style={{ padding: '8px 10px', cursor: 'pointer' }}>
                <Link to={'/TolovUsullari'} className="text-white">Способы оплаты
</Link>
                </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown1;
