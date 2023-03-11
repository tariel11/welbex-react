import React from 'react'
import { Link } from 'react-router-dom'

import whatsapp from "../img/whatsapp.svg"
import viber from "../img/viber.svg"
import telegram from "../img/telegram.svg"

const Footer = () => {
  return (
    <footer className=' z-[1000] mt-auto bg-black ss:bg-inherit pt-[35px] pb-[60px] ss:pb-5 ' >
      <div className='w-5/6 mx-auto flex flex-col ss:flex-row ss:justify-between gap-[30px] ' >
        <div>
          <ul className='flex flex-col gap-[10px]'>
            <h3 className=' text-xs uppercase text-secondary mb-[10px] font-bold' >О компании</h3>
            <li>
              <Link>Партнёрская программа</Link>
            </li>
            <li>
              <Link>Вакансии</Link>
            </li>
          </ul>
        </div>
        
        <div className=' h-fit flex justify-between gap-12' >
          <ul className='flex flex-col gap-[10px]' >
            <h3 className=' text-xs uppercase text-secondary mb-[10px] font-bold' >Меню</h3>
            <li >
              <Link>Расчёт стоимости</Link>
            </li>
            <li>
              <Link>Услуги</Link>
            </li>
            <li>
              <Link>Виджеты</Link>
            </li>
            <li>
              <Link>Интеграции</Link>
            </li>
            <li>
              <Link>Наши клиенты</Link>
            </li>
          </ul>
          <ul className=' flex flex-col gap-[10px] mt-auto'>
            <li>
              <Link>Кейсы</Link>
            </li>
            <li>
              <Link>Благодарственные письма</Link>
            </li>
            <li>
              <Link>Сертификаты</Link>
            </li>
            <li>
              <Link>Блог на Youtube</Link>
            </li>
            <li>
              <Link>Вопрос / Ответ</Link>
            </li>
          </ul>
        </div>
        
        <div className='flex flex-col justify-start ss:justify-end'>
          <h3 className=' text-xs uppercase text-secondary mb-[20px] font-bold' >Контакты</h3>
          <ul className='mb-[50px] ss:mb-[70px] flex flex-col gap-3 '>
            <li className='hover:text-blue-600 duration-300'>
              <a href='tel:+75555555555' >
                <p>+7 555 555-55-55</p>
              </a>
            </li>
            <li>
              <ul className='flex gap-[15px]'>
                <li>
                  <a href='w.me//:+75555555555' >
                    <img src={telegram} alt="telegram" />
                  </a>
                </li>
                <li>
                  <a href='w.me//:+75555555555' >
                    <img src={viber} alt="viber" />
                  </a>
                </li>
                <li>
                  <a href='w.me//:+75555555555' >
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </li>
              </ul>
            </li>
            <li>
              Москва, Путевой проезд 3с1, к 902
            </li>
          </ul>
          <div className=' font-montserrat text-xs'>
            <p>©WELBEX 2022. Все права защищены.</p>
            <a href="https://welbex.tech/ru/#polity" className=' underline'>Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer