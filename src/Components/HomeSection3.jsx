import React from 'react';
import Logo1 from "../Img/Logotip1.webp";
import Logo2 from "../Img/Logotip2.webp";
import Logo3 from "../Img/Logotip3.webp";
import Logo4 from "../Img/Logotip4.webp";
import Logo5 from "../Img/Logotip5.webp";

const HomeSection3 = () => {
  return (
    <div className='w-full max-w-[1519px] mx-auto px-5 py-20 bg-AA'>
      <div className='overflow-hidden'>
        <div className='whitespace-nowrap animate-marquee'>
          <marquee behavior="1" direction="1">
          <div className='inline-flex gap-20'>
            <img className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]' src={Logo1} alt="Logo1" />
            <img className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]' src={Logo2} alt="Logo2" />
            <img className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]' src={Logo3} alt="Logo3" />
            <img className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]' src={Logo4} alt="Logo4" />
            <img className='w-[150px] h-[150px] sm:w-[200px] sm:h-[200px]' src={Logo5} alt="Logo5" />
          </div>
          </marquee>
          
        </div>
      </div>
    </div>
  );
};

export default HomeSection3;
