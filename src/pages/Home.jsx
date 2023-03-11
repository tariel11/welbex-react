import React from 'react'

const Home = () => {
  return (
    <section className='pt-[128px] pb-[60px] ss:pt-[210px] ss:pb-[90px]' >
      <div className='w-5/6 mx-auto flex flex-col ss:flex-row ss:justify-between gap-10' >
        <div className='mb-[45px] ss:mb-0'>
          <h1 className=' text-4xl ss:text-5xl leading-[56px] mb-[15px] ss:mb-[30px] '>
            <span className='leading-[56px]' >Зарабатывайте <br /> больше</span><br />
            <span className='leading-[56px] font-black bg-heading bg-clip-text text-transparent'>с WELBEX</span>
          </h1>
          <p className=' text-lg font-montserrat'>Развиваем и контролируем <br /> продажи за вас</p>
        </div>

        <div>
          <h2 className='font-bold text-lg mb-5 ss:text-right'>
            Вместе с <span className='bg-heading bg-clip-text text-transparent ss:uppercase'>бесплатной <br /> консультацией</span> мы дарим:
          </h2>

          <div className='ss:hidden' >
            <ul className='grid grid-cols-[auto,auto] gap-y-[14px] gap-x-[10px] font-montserrat uppercase'>
              <li className='pl-[15px] bg-linear bg-no-repeat bg-left'>Skype аудит</li>
              <li className='pl-[15px] bg-linear bg-no-repeat bg-left'>30 виджетов</li>
              <li className='pl-[15px] bg-linear bg-no-repeat bg-left'>Dashboard</li>
              <li className='pl-[15px] bg-linear bg-no-repeat bg-left'>Месяц аmoCRM</li>
            </ul>
          </div>

          <div className='hidden ss:block' >
            <ul className='grid grid-cols-2 gap-[30px] mb-[60px] text-right'>
              <li >
                <h3 className='font-medium text-lg mb-[6px] uppercase'>Виджеты</h3>
                <p className=' font-montserrat text-base'>30 готовых <br /> решений</p>
              </li>
              <li >
                <h3 className='font-medium text-lg mb-[6px] uppercase'>Dashboard</h3>
                <p className=' font-montserrat text-base'>с показателями <br /> вашего бизнеса</p>
              </li>
              <li >
                <h3 className='font-medium text-lg mb-[6px] uppercase'>Skype Аудит</h3>
                <p className=' font-montserrat text-base'>отдела продаж <br /> и CRM системы</p>
              </li>
              <li >
                <h3 className='font-medium text-lg mb-[6px] uppercase'>35 дней</h3>
                <p className=' font-montserrat text-base'>использования <br /> CRM</p>
              </li>
            </ul>
            <button className='bg-[#4077F3] text-base font-medium py-[21px] px-[34px]'>Получить консультацию</button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Home