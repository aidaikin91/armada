import React from 'react'
import './Service.css'
import serviceone from '../../assets/images/serviceone.png'
import servicetwo from '../../assets/images/servicetwo.png'
import servicethree from '../../assets/images/servicethree.png'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';


export default function Service() {
  return (
    <div>
      <h3 className='service_section_one_h3'>Наши услуги</h3>
      <div className='service_section_one'>
      <div className='service_section_two'>
      <img className='serviceone' alt='serviceone' src={serviceone}/>
      <img className='servicetwo' alt='servicetwo' src={servicetwo}/>
      <img className='serviceone2' alt='serviceone2' src={serviceone}/>
      <img className='servicetwo2' alt='servicetwo2' src={servicetwo}/>
      <img className='serviceone3' alt='serviceone3' src={serviceone}/>
      </div>
      <div className='service_section_three'>
      <img className='servicethree' alt='servicethree' src={servicethree}/>
      <img className='servicetwo3' alt='servicetwo3' src={servicetwo}/>
      </div>
      </div>
      <div className='service_section_four'>
        <h3 className='service_section_four_h3'>Наши преимущества</h3>
        <div className='service_section_five'>
        <div className='alarm_section'> 
        <AccessAlarmIcon/>
        <p className='alarm_p'>Оперативность</p>
        </div>
        <div className='book_section'>
        <BookIcon/>
        <p className='book_p'>Высококвалифицированные <br></br>
        специалисты</p>
        </div>
        <div className='setting_section'>
        <SettingsIcon/>
        <p className='setting_p'>Современное <br></br>
        оборудование</p>
        </div>
        <div className='list_section'>
        <ListIcon/>
        <p className='list_p'>Широкий спектр <br></br>
        услуг</p>
        </div>
        </div>
      </div>
      <div className='service_section_six'>
      <p className='service_section_six_p'>Оставьте бесплатную заявку</p>
      <p className='service_section_six_p2'>и менеджер по работе с клиентами свяжется с вами и проконсультирует</p>
      <div className='service_section_six_input'>
      <input className='service_name' placeholder='Ваше Имя'></input>
      <input className='service_number' placeholder='Ваш телефон'></input>
      <button className='service_section_btn'>Отправить</button>
      </div>
      </div>
      <div>
      </div>
    </div>
  )
}
