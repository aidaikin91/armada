import React from 'react'
import './Header.css'
import armada from '../../assets/images/armada.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
      <div className='header_one'>
        <p className='header_p_one'>Наша сила в вашем успехе!</p>
        <p className='header_p_two'>Нужна помощь? Свяжитесь с нашим экспертом</p>
        <p className='header_p_three'>+996 (553) 993 342</p>
      </div>
      <div className='header_two'>
       <Link to='/'><img className='armada' alt='armada' src={armada} /></Link> 
        <nav>
          <ul className='header_ul'>
            <li>
              <Link to='/service'>
                Услуги </Link></li>
            <li>
              <Link to='/about'>О нас</Link>
            </li>
            <li>
              <Link to='/contact'>Контакты</Link></li>
            <li>
              <Link to='/portfolio'>Портфолио</Link></li>
            <li>
              <Link to='/production'>Производство</Link></li>
          </ul>
        </nav>
        <div className='header_button'>
          <Button buttonText = 'Скачать прайс'/>
        </div>
      </div>
    </div>
  )
}
