import React from 'react'
import Button from '../Button/Button'
import './SectionFour.css'
import painting  from '../../assets/images/workone.png'
import frame from '../../assets/images/worktwo.png'
import newyork from '../../assets/images/workthree.png'
import kodak from '../../assets/images/worksix.png'
import painting_two  from '../../assets/images/workone.png'
import frame_two from '../../assets/images/worktwo.png'
import newyork_two from '../../assets/images/workthree.png'
import kodak_two from '../../assets/images/worksix.png'

export default function SectionFour() {
  return (
    <div>
        <h3 className='section_four_h3'>Наш прайс</h3>
        <div className='section_four_first'>
        <div className='section_four_one'>
        <img className='painting' alt='painting' src={painting}/>
        <p className='section_four_one_p'>Фасадная вывеска (подсветка внутреняя, 
        <br></br>железный короб, флекс)</p>
        <p className='amount_one'>1990 сом</p>
        </div>
        <div className='section_four_two'>
        <img className='frame' alt='frame' src={frame}/>
        <p className='section_four_two_p'>Фасадная вывеска (подсветка внутреняя, 
        <br></br>железный короб, флекс)</p>
        <p className='amount_two'>1990 сом</p>
        </div>
        <div className='section_four_three'>
        <img className='newyork' alt='newyork' src={newyork}/>
        <p className='section_four_three_p'>Фасадная вывеска (подсветка внутреняя, 
        <br></br>железный короб, флекс)</p>
        <p className='amount_three'>1990 сом</p>
        </div>
        <div className='section_four_four'>
        <img className='kodak' alt='kodak' src={kodak}/>
        <p className='section_four_four_p'>Фасадная вывеска (подсветка внутреняя, 
        <br></br>железный короб, флекс)</p>
        <p className='amount_four'>1990 сом</p>
        </div>
        </div>
        <div className='section_four_second'>
        <div className='section_four_five'>
        <img className='painting_two' alt='painting_two' src={painting_two}/>
        <p className='section_four_five_p'>Фасадная вывеска (подсветка внутреняя,
        <br></br>железный короб, флекс)</p>
        <p className='amount_five'>1990 сом</p>
        </div>
        <div className='section_four_six'>
        <img className='frame_two' alt='frame_two' src={frame_two}/>
        <p className='section_four_six_p'>Фасадная вывеска (подсветка внутреняя, 
        <br></br>железный короб, флекс)</p>
        <p className='amount_six'>1990 сом</p>
        </div>
        <div className='section_four_seven'>
        <img className='newyork_two' alt='newyork_two' src={newyork_two}/>
        <p className='section_four_seven_p'>Фасадная вывеска (подсветка внутреняя, 
        <br></br>железный короб, флекс)</p>
        <p className='amount_seven'>1990 сом</p>
        </div>
        <div className='section_four_eight'>
        <img className='kodak_two' alt='kodak_two' src={kodak_two}/>
        <p className='section_four_eight_p'>Фасадная вывеска (подсветка внутреняя, 
         <br></br>железный короб, флекс)</p>
        <p className='amount_eight'>1990 сом</p>
        </div>
        </div>
        <div className='section_four_btn'>
            <Button buttonText = 'Все работы'/>
        </div>
    </div>
  )
}
