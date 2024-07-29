import React from 'react'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const TolovUsullari = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='bg-white'>
      <div className="w-full max-w-[1450px] mx-auto px-4 sm:px-5 py-10 sm:py-20">
        <h2 className='mb-5 sm:mb-10 opacity-60 text-xs sm:text-sm md:text-base'>
          <Link to='/' className='text-red-600'>Главная/</Link> <Link to={'/okompany'} className='text-red-600'>О компании/</Link> Способы оплаты
        </h2>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-16'>
          Способы оплаты
        </h1>

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='border-y-2 border-black'>
          <AccordionHeader onClick={() => handleOpen(1)} className='opacity-60 text-xl sm:text-2xl md:text-3xl font-bold'>
            Далеко-далеко за словесными горами
          </AccordionHeader>
          <AccordionBody className='opacity-60 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-10'>
            Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className='border-b-2 border-black'>
          <AccordionHeader onClick={() => handleOpen(2)} className='opacity-60 text-xl sm:text-2xl md:text-3xl font-bold'>
            Великий Оксмокс
          </AccordionHeader>
          <AccordionBody className='opacity-60 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 md:leading-10'>
            Предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу.
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}

export default TolovUsullari
