import React from "react";
import { Link } from "react-router-dom";
import SectionLogo1 from "../Img/SectionLogo1.jpg";
import SectionLogo2 from "../Img/SectionLogo2.jpg";
import SectionLogo3 from "../Img/SectionLogo3.jpg";
import SectionLogo4 from "../Img/SectionLogo4.jpg";

const HomeSection = () => {
  return (
    <div className="w-full max-w-[1450px] mx-auto px-5 py-20">
      <h2 className="text-red-500 text-[40px] font-bold">ТРЕНЕРЫ</h2>
      <h2 className="text-white text-[50px] font-bold mb-10">
        НАШИ ИНСТРУКТОРЫ
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-10">
        {[
          { img: SectionLogo1, name: "Николай Алексеев" },
          { img: SectionLogo2, name: "Александр Иванов" },
          { img: SectionLogo3, name: "Мария Петрова" },
          { img: SectionLogo4, name: "Ирина Сидорова" }
        ].map((trainer, index) => (
          <div key={index} className="bg-AA flex items-center w-full h-[400px] rounded-2xl">
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-[300px] h-full object-cover mr-6"
            />
            <div>
              <h2 className="text-white text-2xl font-bold mb-2 hover:text-red-500 cursor-pointer">
                {trainer.name}
              </h2>
              <p className="text-white mb-4">Персональный тренер</p>
              <div className="flex gap-3">
              <svg className="cursor-pointer hover:bg-red-500 rounded-full bg-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 399.13" data-prefix="i9r2w5yf3"><path data-name="Rectangle 1 copy 12" d="M0 0h400v399.12H0V0z" fill="none"></path><path d="M196.861 255.54h11.955s3.61-.4 5.456-2.39c1.7-1.82 1.643-5.24 1.643-5.24s-.233-16.03 7.21-18.4c7.341-2.32 16.766 15.5 26.754 22.35 7.555 5.18 13.294 4.05 13.294 4.05l26.712-.37s13.973-.87 7.347-11.84c-.544-.9-3.86-8.12-19.862-22.97-16.75-15.53-14.5-13.02 5.67-39.89 12.287-16.37 17.2-26.35 15.664-30.63-1.462-4.08-10.5-3-10.5-3l-30.075.18a6.838 6.838 0 0 0-3.883.69 8.41 8.41 0 0 0-2.653 3.22 174.249 174.249 0 0 1-11.109 23.44c-13.391 22.72-18.748 23.92-20.936 22.51-5.093-3.29-3.82-13.21-3.82-20.26 0-22.03 3.343-31.21-6.51-33.58-3.268-.79-5.676-1.31-14.038-1.4-10.731-.11-19.813.03-24.955 2.55-3.421 1.68-6.062 5.41-4.453 5.62 1.988.27 6.488 1.22 8.875 4.46 3.084 4.19 2.975 13.6 2.975 13.6s1.771 25.92-4.136 29.14c-4.053 2.21-9.614-2.3-21.555-22.91a191.528 191.528 0 0 1-10.735-22.24 8.949 8.949 0 0 0-2.479-3.35 12.479 12.479 0 0 0-4.619-1.86l-28.581.19s-4.289.12-5.864 1.98c-1.4 1.66-.112 5.09-.112 5.09s22.372 52.31 47.708 78.67c23.235 24.17 49.612 22.59 49.612 22.59z" fill-rule="evenodd" class="path-i2wiqv1dx"></path></svg>
              <svg className="cursor-pointer hover:bg-red-500 rounded-full bg-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 399.125" data-prefix="i9fg76gpc"><path data-name="Rectangle 1 copy 15" d="M0 0h400v399.121H0V0z" fill="none"></path><path d="M285.79 115.378l-179.28 67.8c-9.81 2.829-9.49 12.5-2.24 14.828l44.92 14 17.19 52.632c2.09 5.761 3.8 7.931 7.36 7.979 3.75.052 5.19-1.316 9.08-4.755 4.56-4.277 11.51-11.009 22.49-21.667l46.72 34.482c8.6 4.737 14.81 2.283 16.95-7.976l29.29-144.732c3.14-12.569-4.25-16.321-12.48-12.591zm-129.55 93.414l102.13-64c5.03-3.371 6.61.39 4.34 2.988l-84.76 76.151-4.35 38.008z" fill-rule="evenodd" class="path-iwnps716a"></path></svg>
              <svg className="cursor-pointer hover:bg-red-500 rounded-full bg-white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 399.125" data-prefix="if2cwz938"><path data-name="Rectangle 1 copy 13" d="M0 0h400v399.121H0V0z" fill="none"></path><path d="M200.8 98.99a97.5 97.5 0 0 0-83.24 147.749l-17.55 52.276 53.81-17.27A97.37 97.37 0 1 0 200.8 98.99zm0 16.32a81.112 81.112 0 0 0-65.5 128.676l-10.11 30.12 31.1-9.978a80.294 80.294 0 0 0 44.51 13.411 81.115 81.115 0 0 0 0-162.229zm50.21 106.338c-.58-1.06-2.21-1.747-4.64-3.082s-14.41-7.813-16.65-8.728-3.88-1.389-5.63 1.039-6.71 7.845-8.22 9.452-2.96 1.756-5.4.415-10.33-4.263-19.49-13.089a75.188 75.188 0 0 1-13.16-17.741c-1.35-2.545-.01-3.842 1.28-5.033 1.16-1.075 2.59-2.814 3.89-4.219a16.77 16.77 0 0 0 2.63-4.053 4.6 4.6 0 0 0-.04-4.365c-.58-1.264-5.08-13.692-6.96-18.748s-3.98-4.3-5.43-4.361-3.09-.323-4.74-.384a9.125 9.125 0 0 0-6.74 2.861c-2.36 2.4-9 8.179-9.45 20.42s7.99 24.395 9.16 26.1 16.13 28.235 40.98 39.144 24.98 7.581 29.54 7.336 14.9-5.468 17.19-11.194 2.46-10.709 1.88-11.77z" fill-rule="evenodd" class="path-i823cvqki"></path></svg>
              </div>
              <div className="flex space-x-4 mb-10">
                <Link aria-label="Instagram Profile">
                  {/* SVG code for Instagram */}
                </Link>
                <Link aria-label="Facebook Profile">
                  {/* SVG code for Facebook */}
                </Link>
                <Link aria-label="Twitter Profile">
                  {/* SVG code for Twitter */}
                </Link>
              </div>
              <button className="text-white bg-red-600 hover:bg-red-500 px-10 py-6 rounded-2xl text-center text-[20px] font-bold">
                ЗАПИСАТЬСЯ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;