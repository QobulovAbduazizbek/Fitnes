import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Modalni yopish tugmasi uchun rasm
import { Link } from 'react-router-dom';

const Footer = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animatsiya davomiyligi
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-black text-white'>
      <div className='w-full max-w-[1450px] mx-auto px-5 py-10'>
        <h2 className='text-[30px] md:text-[40px] font-bold text-red-500'>КОНТАКТЫ</h2>
        <p className='text-white font-bold text-[30px] md:text-[50px]'>СВЯЖИТЕСЬ С НАМИ</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-10 text-lg">
          <ul>
          <div className='w-full max-w-[1450px] mx-auto px-5 py-10'>
          <div className='w-full max-w-[1450px] mx-auto px-5 py-10'>
  <div className='flex flex-col md:flex-row items-start md:items-center justify-between'>
    <li className='flex items-center mb-6 md:mb-0'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 293.13 327.97" data-prefix="ie9q1ak1t">
        <path d="M265.14 238.1l22.8 33.45c12.81 17.88-.36 29.4-15.43 36.94-20.03 10.02-40.89 22.29-73.04 18.87-49.89-5.31-80.08-37.63-112.31-72.14-29.12-31.18-107.41-115-82.3-202.5a133.479 133.479 0 0 1 18.75-39.14c9.65-13.93 23.75-20.8 41.23-2.53L99.62 42.9c21.07 19.91 21.81 29.07 13.37 45.02-2.55 4.81-3.17 4.57-6.57 8.8-3.03 3.76-11.42 9.9-15.62 12.32l-9.29 7.42c-.44.25 4.78-4.76 4.41-4.42-14.98 13.81-10.89 32.02 1.97 48.19L138.6 224a41.562 41.562 0 0 0 56 8.43l3.81-2.6c26.71-28.37 44.8-22.88 66.73 8.27z" fill='white' fill-rule="evenodd" className="path-i4wo3nzum"></path>
      </svg>
      <button className='text-white font-bold text-[16px] md:text-[20px] hover:text-red-500 ml-3'>+7 (000) 000-00-00</button>
    </li>
    <li className='flex items-center mb-6 md:mb-0'>
      <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 68 90" data-prefix="i6xvk6teb">
        <path d="M0 33.76a34 34 0 0 1 67.992 0c0 22.5-34 56.25-34 56.25s-34-33.75-34-56.25m19.831 0A14.165 14.165 0 1 0 34 19.7a14.11 14.11 0 0 0-14.167 14.06z" fill-rule="evenodd" fill='white' className="path-iozpz6rs1"></path>
      </svg>
      <p className='text-white text-[14px] md:text-[16px]'>Москва, Лубянский проезд, дом номер, <br /> офис</p>
    </li>
    <li className='flex items-center mb-6 md:mb-0'>
      <Link className='opacity-65 hover:text-red-500 flex items-center text-white text-[14px] md:text-[16px]'>
        test@example.com
        <svg className='ml-3' data-name="Слой 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" width="24" height="18" data-prefix="ir1qw7c4u">
          <path d="M22.29.3l-.02-.02C21.89.1 21.46 0 21.01 0H3a3 3 0 0 0-1.16.23L1.81.2l-.09.1A3 3 0 0 0 0 3v12c0 1.66 1.34 3 3 3h18c1.66 0 3-1.34 3-3V3c0-1.19-.7-2.21-1.71-2.7zM20.55 2l-7.67 7.47c-.41.4-1.11.4-1.53 0L3.7 2h16.85zM21 16H3c-.55 0-1-.45-1-1V3.18l7.92 7.72c.6.58 1.38.87 2.16.87s1.56-.29 2.16-.87L22 3.34V15c0 .55-.45 1-1 1z" fill='white' className="path-i7zxnjuj1"></path>
        </svg>
      </Link>
    </li>
  </div>
</div>

</div>

            <li className='flex gap-5'>
            <svg className='rounded-full bg-white hover:bg-red-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 399.13" data-prefix="i9r2w5yf3"><path data-name="Rectangle 1 copy 12" d="M0 0h400v399.12H0V0z" fill="none"></path><path d="M196.861 255.54h11.955s3.61-.4 5.456-2.39c1.7-1.82 1.643-5.24 1.643-5.24s-.233-16.03 7.21-18.4c7.341-2.32 16.766 15.5 26.754 22.35 7.555 5.18 13.294 4.05 13.294 4.05l26.712-.37s13.973-.87 7.347-11.84c-.544-.9-3.86-8.12-19.862-22.97-16.75-15.53-14.5-13.02 5.67-39.89 12.287-16.37 17.2-26.35 15.664-30.63-1.462-4.08-10.5-3-10.5-3l-30.075.18a6.838 6.838 0 0 0-3.883.69 8.41 8.41 0 0 0-2.653 3.22 174.249 174.249 0 0 1-11.109 23.44c-13.391 22.72-18.748 23.92-20.936 22.51-5.093-3.29-3.82-13.21-3.82-20.26 0-22.03 3.343-31.21-6.51-33.58-3.268-.79-5.676-1.31-14.038-1.4-10.731-.11-19.813.03-24.955 2.55-3.421 1.68-6.062 5.41-4.453 5.62 1.988.27 6.488 1.22 8.875 4.46 3.084 4.19 2.975 13.6 2.975 13.6s1.771 25.92-4.136 29.14c-4.053 2.21-9.614-2.3-21.555-22.91a191.528 191.528 0 0 1-10.735-22.24 8.949 8.949 0 0 0-2.479-3.35 12.479 12.479 0 0 0-4.619-1.86l-28.581.19s-4.289.12-5.864 1.98c-1.4 1.66-.112 5.09-.112 5.09s22.372 52.31 47.708 78.67c23.235 24.17 49.612 22.59 49.612 22.59z" fill-rule="evenodd" class="path-i2wiqv1dx"></path></svg>
            <svg className='rounded-full bg-white hover:bg-red-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 399.125" data-prefix="i9fg76gpc"><path data-name="Rectangle 1 copy 15" d="M0 0h400v399.121H0V0z" fill="none"></path><path d="M285.79 115.378l-179.28 67.8c-9.81 2.829-9.49 12.5-2.24 14.828l44.92 14 17.19 52.632c2.09 5.761 3.8 7.931 7.36 7.979 3.75.052 5.19-1.316 9.08-4.755 4.56-4.277 11.51-11.009 22.49-21.667l46.72 34.482c8.6 4.737 14.81 2.283 16.95-7.976l29.29-144.732c3.14-12.569-4.25-16.321-12.48-12.591zm-129.55 93.414l102.13-64c5.03-3.371 6.61.39 4.34 2.988l-84.76 76.151-4.35 38.008z" fill-rule="evenodd" class="path-iwnps716a"></path></svg>
            <svg className='rounded-full bg-white hover:bg-red-500 cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 399.125" data-prefix="iyld6fnig"><path data-name="Rectangle 1 copy 13" d="M0 0h400v399.121H0V0z" fill="none"></path><path d="M200.8 98.99a97.5 97.5 0 0 0-83.24 147.749l-17.55 52.276 53.81-17.27A97.37 97.37 0 1 0 200.8 98.99zm0 16.32a81.112 81.112 0 0 0-65.5 128.676l-10.11 30.12 31.1-9.978a80.294 80.294 0 0 0 44.51 13.411 81.115 81.115 0 0 0 0-162.229zm50.21 106.338c-.58-1.06-2.21-1.747-4.64-3.082s-14.41-7.813-16.65-8.728-3.88-1.389-5.63 1.039-6.71 7.845-8.22 9.452-2.96 1.756-5.4.415-10.33-4.263-19.49-13.089a75.188 75.188 0 0 1-13.16-17.741c-1.35-2.545-.01-3.842 1.28-5.033 1.16-1.075 2.59-2.814 3.89-4.219a16.77 16.77 0 0 0 2.63-4.053 4.6 4.6 0 0 0-.04-4.365c-.58-1.264-5.08-13.692-6.96-18.748s-3.98-4.3-5.43-4.361-3.09-.323-4.74-.384a9.125 9.125 0 0 0-6.74 2.861c-2.36 2.4-9 8.179-9.45 20.42s7.99 24.395 9.16 26.1 16.13 28.235 40.98 39.144 24.98 7.581 29.54 7.336 14.9-5.468 17.19-11.194 2.46-10.709 1.88-11.77z" fill-rule="evenodd" class="path-ifoa3f95x"></path></svg>
            </li>
            <iframe
  className="w-full h-[300px] md:h-[400px] lg:h-[500px] mt-10 filter grayscale invert"
  src="https://yandex.com/map-widget/v1/?ll=37.385439%2C55.584227&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=9.13"
  width="100%"
  height="100%"
  frameBorder="1"
  allowFullScreen={true}
  style={{ position: 'relative' }}
></iframe>

            
          </ul>
          
           
        </div>
      </div>

      <hr className="border-white" />
      <div className='w-full max-w-[1450px] mx-auto px-5 my-8 flex flex-col sm:flex-row justify-between items-center'>
  <p className='text-white text-[12px] md:text-[15px] mb-2 sm:mb-0'>Copyright © 2022 - 2024 Kompaniya nomi</p>
  <p className='text-white text-[12px] md:text-[15px]'>Yordam.<u>Saytlar yaratish</u> Megagroup tomonidan.</p>
</div>

    </div>
  );
};

export default Footer;
