import React from 'react'
import './Nike.css'
import nike_one from '../../assets/images/nike.png'
import nike_two from '../../assets/images/nike.png'
import nike_three from '../../assets/images/nike.png'
import nike_four from '../../assets/images/nike.png'
import nike_five from '../../assets/images/nike.png'
import nike_six from '../../assets/images/nike.png'

export default function Nike() {
  return (
    <div className='Nike'>
          <img className='nike_one' alt='nike_one' src={nike_one}/>
          <img className='nike_two' alt='nike_two' src={nike_two}/>
          <img className='nike_three' alt='nike_three' src={nike_three}/>
          <img className='nike_four' alt='nike_four' src={nike_four}/>
          <img className='nike_five' alt='nike_five' src={nike_five}/>
          <img className='nike_six' alt='nike_six' src={nike_six}/>
    </div>
  )
}
