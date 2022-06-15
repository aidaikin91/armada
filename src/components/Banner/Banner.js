import React from 'react'
import './Banner.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined'

export default function Banner() {
    return (
        <div className='black'>
            <div className='banner'>
                <div className='banner_one'>
                    <h3 className='banner_h3'>Наружная  реклама в Бишкеке</h3>
                    <p className='banner_p'>Произдводство наружной рекламы и создание проектов под ключ</p>
                    <button className='banner_button'>Оставить заявку</button>
                </div>
                <div className='banner_two'>
                    <WhatsappOutlinedIcon />
                    <InstagramIcon/>
                    <FacebookTwoToneIcon/>
                </div>
            </div>
        </div>
    )
}
