import React from 'react'
import { Link } from 'react-router-dom'

import logo_welbex from "../img/logo_welbex.svg"
import whatsapp from "../img/whatsapp.svg"
import viber from "../img/viber.svg"
import telegram from "../img/telegram.svg"

const Header = () => {
  return (
    <header className='z-[100] w-full bg-black ss:bg-transparent' >
      <div className=' ss:hidden w-5/6 mx-auto py-[22px] z-20 flex flex-col gap-5 z-[100]' >
        <div className='flex justify-between'>
          <div>
            <Link to="/">
              <img src={logo_welbex} alt="logo_welbex" />
            </Link>
          </div>
          <ul className='flex justify-between gap-4' >
            <li>
              <a href='tg://resolve?domain=tarielarslanov' >
                <img src={telegram} alt="telegram" />
              </a>
            </li>
            <li>
              <a href='viber://add?number=+75555555555' >
                <img src={viber} alt="viber" />
              </a>
            </li>
            <li>
              <a href='whatsapp://send?phone=+75555555555' >
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </li>
          </ul>
        </div>
        <ul className='flex justify-between gap-2 text-xs uppercase' >
          <li>
            <Link to="/services">услуги</Link>
          </li>
          <li>
            <Link to="/widgets">виджеты</Link>
          </li>
          <li>
            <Link to="/integrations">интеграции</Link>
          </li>
          <li>
            <Link to="/cases">кейсы</Link>
          </li>
        </ul>
      </div>

      <div className='hidden ss:flex w-5/6 mx-auto justify-between gap-5 items-center pt-[57px] pb-5' >
        <div>
          <div className='mb-[10px]'>
            <Link to="/">
              <img src={logo_welbex} alt="logo_welbex" />
            </Link>
          </div>
          <p className=' font-montserrat font-light text-[10px] leading-3' >крупный интегратор CRM <br /> в Росcии и ещё 8 странах</p>
        </div>
        <ul className='flex justify-between gap-[30px] font-medium'>
          <li>
            <Link to="/services">Услуги</Link>
          </li>
          <li>
            <Link to="/widgets">Виджеты</Link>
          </li>
          <li>
            <Link to="/integrations">Интеграции</Link>
          </li>
          <li>
            <Link to="/cases">Кейсы</Link>
          </li>
          <li className='hidden md:block' >
            <Link to="/sertifications">Сертификаты</Link>
          </li>
        </ul>
        <ul className='flex justify-between gap-[34px] font-medium'>
          <li className='pr-4 hidden md:block'>
            <a href='tel:+75555555555' >
              <p>+7 555 555-55-55</p>
            </a>
          </li>
          <li>
            <a href='tg://resolve?domain=tarielarslanov' >
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li>
            <a href='viber://chat?number=+75555555555' >
              <img src={viber} alt="viber" />
            </a>
          </li>
          <li>
            <a href='whatsapp://send?phone=+75555555555' >
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header