import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer_section'>
      <div className='company'>
      <h5 className='company_h5'>О компании</h5>
      <p className='company_p'>Lorem ipsum dolor sit amet,
      <br></br>consectetur adipiscing elit ut aliquam, 
      <br></br>purus sit amet luctus venenatis, lectus
      <br></br> magna fringilla urna, porttitor rhoncus
      <br></br> dolor purus non enim</p>
      </div>
      <div className='information'>
      <h5 className='information_h5'>Информация</h5>
      <ul className='information_ul'>
        <li>Услуги</li>
        <li>О нас</li>
        <li>Контакты</li>
        <li>Портфолио</li>
        <li>Производство</li>
      </ul>
      </div>
      <div className='contact'>
        <h5 className='contact_h5'>Контактная информация</h5>
        <p className='contact_p'>
        Бишкек, ул. Калык Акиева 66, ТЦ Весна, 3 этаж, офис №37
        <br></br>+996 (0553) 577-575
        <br></br>Email@gmail.com
        </p>
      </div>
      <div className='social'>
        <h5 className='social_h5'>Мы в социальных сетях</h5>
        <p className='social_p'>Instagram 
        <br></br>Facebook
        </p>
      </div>

    </div>
  )
}
