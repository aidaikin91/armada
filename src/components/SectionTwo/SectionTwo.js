import React from 'react'
import Button from '../Button/Button'
import './SectionTwo.css'


export default function SectionTwo() {
  return (
    <div>
    <h3 className='section_two_h3'>Наши работы</h3>
    <div className='section_two_card'>
    <div className='section_two_card_one_main'>
    <div className='section_two_card_one'>
          <p className='workone_p'>Работа на Манаса</p>  
    </div>
    </div>
    <div className='section_two_card_two_main'>
    <div className='section_two_card_two'>
          <p className='worktwo_p'>Работа на Манаса</p>  
    </div>
    </div>
    <div className='section_two_card_three_main'>
    <div className='section_two_card_three'>
          <p className='workthree_p'>Работа на Манаса</p>  
    </div>
    </div>
    <div className='section_two_card_four_main'>
    <div className='section_two_card_four'>
          <p className='workfour_p'>Работа на Манаса</p>  
    </div>
    </div>
    <div className='section_two_card_five_main'>
    <div className='section_two_card_five'>
          <p className='workfive_p'>Работа на Манаса</p>  
    </div>
    </div>
    <div className='section_two_card_six_main'>
    <div className='section_two_card_six'>
          <p className='worksix_p'>Работа на Манаса</p>  
    </div>
    </div>
    </div>
    <div className='section_two_button'>
   <Button buttonText = 'Скачать прайс'/>
   </div>
    </div>
  )
}
