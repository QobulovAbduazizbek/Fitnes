import React, { useState, useEffect } from "react"; // useState va useEffect import qilish
import { Link, NavLink } from "react-router-dom";
import logo from "../Img/logo.webp";

import Run from "../Img/Run.jpg";
import x from "../Img/X.png";
import Dropdown1 from "../Components/Dropdown1";
import Dicon from "../Img/Dicon.png";
import Dropdown2 from "./Dropdown2";

const Header = () => { // Header komponenti
 

  return (
    <div className="w-full max-w-[1460px] mx-auto px-5 py-5">
      <div className="flex flex-col items-center">
        <header className="relative flex items-start justify-between w-full bg-black text-white p-4">
          <div className="flex flex-col space-y-6 w-1/3 z-10">
            <NavLink to="/" className="flex items-center space-x-4">
              <img src={logo} alt="logo" />
              <div className="items-center">
                <h2 className="font-bold text-xl opacity-75">
                  Название компании
                </h2>
                <span className="opacity-65">
                  Окна, остекление балконов, лоджий
                </span>
              </div>
            </NavLink>
          </div>
          <div className="flex flex-col items-center space-y-4 z-10">
            <div className="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M17.7 12.3c-.4-.4-1-.4-1.4 0l-1.6 1.6c-.7-.2-2.1-.7-3-1.6s-1.4-2.3-1.6-3l1.6-1.6c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0L3.6 5c-.4.4-.6.9-.6 1.4 0 1.4.4 6.4 4.3 10.3S16.1 21 17.6 21c.5 0 1-.2 1.4-.6l2.7-2.7c.4-.4.4-1 0-1.4l-4-4zm-.1 6.7c-1.2 0-5.5-.4-8.9-3.7C5.3 11.9 5 7.6 5 6.4l2-2L9.6 7 8.3 8.3c-.2.2-.3.6-.3.9 0 .1.6 2.8 2.3 4.5s4.4 2.2 4.5 2.3c.3.1.7 0 .9-.3l1.3-1.3 2.6 2.6-2 2z"
                  fill="white"
                ></path>
              </svg>
              <p className="font-semibold text-xl cursor-pointer text-[15px] hover:text-red-500">
                +7 (000) 000-00-00
              </p>
              <div className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 68 90"
                  data-prefix="i6xvk6teb"
                >
                  <path
                    d="M0 33.76a34 34 0 0 1 67.992 0c0 22.5-34 56.25-34 56.25s-34-33.75-34-56.25m19.831 0A14.165 14.165 0 1 0 34 19.7a14.11 14.11 0 0 0-14.167 14.06z"
                    fill="white"
                    fillRule="evenodd"
                    className="path-iozpz6rs1"
                  ></path>
                </svg>
                <p className="font-semibold text-xl cursor-pointer text-[15px]">
                  Москва, Лубянский проезд, дом
                </p>
              </div>
            </div>
          </div>
        </header>
        <ul className="flex gap-5 justify-center items-center w-full bg-black p-4">
          <li>
            <Link
              to="/"
              className="text-lg text-gray-400 hover:text-white"
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/Uy"
              className="text-lg text-gray-400 hover:text-white"
            >
              Добро пожаловать
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg text-gray-400 hover:text-white"
            >
              <Dropdown1 />
            </Link>
          </li>
          <li>
            <Link
              to="/Yangiliklar"
              className="text-lg text-gray-400 hover:text-white"
            >
              Новости
            </Link>
          </li>
          <li>
            <Link
              to="/BizHaqimizda"
              className="text-lg text-gray-400 hover:text-white"
            >
              Отзывы о нас
            </Link>
          </li>
          <li>
            <Link
              to="/Kontakt"
              className="text-lg text-gray-400 hover:text-white"
            >
              Контакты
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-lg text-gray-400 hover:text-white"
            >
              
            </Link>
          </li>
          <Dropdown2/>
        </ul>
      </div>
    </div>
  );
};

export default Header;
