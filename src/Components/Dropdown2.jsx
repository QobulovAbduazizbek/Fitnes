import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown2 = () => {
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
            <Link to={'/PlastikOynalar'} className="dropdown-toggle opacity-70 flex items-center justify-between text-white">
              <span className='mr-4 hover:text-red-500 transition-all duration-300'>
              ...
              </span>
            
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
                    <Link to="/SignUp" className="text-white">Регистрация</Link>
                </li>
                <li className='opacity-70 border-x-2 text-white hover:text-red-500 rounded-none transition-all duration-300' onClick={() => handleItemClick("Option 2")} style={{ padding: '12px 15px', cursor: 'pointer' }}>
                    <Link to={'/BizningOqituvchilarimiz'} className="text-white">Наши инструкторы</Link>
                </li>
               
                </ul>
            )}
        </div>
    );
};

export default Dropdown2;
