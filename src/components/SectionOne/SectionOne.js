import React from 'react'
import './SectionOne.css'
import one from '../../assets/images/one.png'
import two from '../../assets/images/two.png'
import three from '../../assets/images/three.png'
import four from '../../assets/images/four.png'

export default function SectionOne() {
  return (
    <div>
     <h3 className='section_one_h3'>Наши услуги</h3>
     <div className='sectionOne_card'>
        <div className='card_one'>
        <img className='one' alt='one' src={one} />
        <h5 className='card_one_h5'>Конструкция под ключ</h5>
        <p className='card_one_p'>Хотите узнать подробность, телефон для связи:</p>
        <p className='card_one_number'>+996 (0553) 577-575</p>
        </div>
        <div className='card_two'>
        <img className='two' alt='two' src={two} />
        <h5 className='card_two_h5'>Вывески, объемные буквы</h5>
        <p className='card_two_p'>Хотите узнать подробность, телефон для связи:</p>
        <p className='card_two_number'>+996 (0553) 577-575</p>
        </div>
        <div className='card_three'>
        <img className='three' alt='three' src={three} />
        <h5 className='card_three_h5'>Визитки, буклеты, полиграфия</h5>
        <p className='card_three_p'>Хотите узнать подробность, телефон для связи:</p>
        <p className='card_three_number'>+996 (0553) 577-575</p>
        </div>
        <div className='card_four'>
        <img className='four' alt='four' src={four} />
        <h5 className='card_four_h5'>Вывески, объемные буквы</h5>
        <p className='card_four_p'>Хотите узнать подробность, телефон для связи:</p>
        <p className='card_four_number'>+996 (0553) 577-575</p>
        </div>
    </div>
    </div>
  )
}
