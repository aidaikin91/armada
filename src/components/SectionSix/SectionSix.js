import React from 'react'
import './SectionSix.css'
import ulya from '../../assets/images/ulya.png'
import anna from '../../assets/images/anna.png'
import andrei from '../../assets/images/andrei.png'

export default function SectionSix() {
  return (
    <div>
      <h3 className='section_six_h3'>Наша команда</h3>
      <div className='section_six_main'>
      <div className='section_six_one'>
      <img className='ulya' alt='ulya' src={ulya}/>
      <p className='six_one_h5'>Юля</p>
      <p className='six_one_p'>Соучредитель</p>
      </div>
      <div className='section_six_two'>
      <img className='anna' alt='anna' src={anna}/>
      <p className='six_two_h5'>Анна</p>
      <p className='six_two_p'>Дизайнер</p>
      </div>
      <div className='section_six_three'>
      <img className='andrei' alt='andrei' src={andrei}/>
      <p className='six_three_h5'>Андрей</p>
      <p className='six_three_p'>Соучредитель</p>
      </div>
      <div className='section_six_additional'>
      <p className='additional_p'>Оставьте бесплатную заявку</p>
      <p className='additional_p2'>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
      <div className='section_six_input'>
      <input className='name' placeholder='Ваше Имя'></input>
      <input className='number' placeholder='Ваш телефон '></input>
      <button className='section_six_btn'>Отправить</button>
      </div>
      </div>
      </div>
    </div>
  )
}
