import React from 'react'
import './SectionThree.css'
import productionone from '../../assets/images/productionone.png'
import productiontwo from '../../assets/images/productiontwo.png'
import productionthree from '../../assets/images/productionthree.png'

export default function SectionThree() {
  return (
    <div>
        <h3 className='section_three_h3'>Производство</h3>
        <div className='section_three_img'>
        <img className='productionone' alt='productionone' src={productionone}/>
        <img className='productiontwo' alt='productiontwo' src={productiontwo}/>
        <img className='productionthree' alt='productionthree' src={productionthree}/>
        </div>
    </div>
  )
}
