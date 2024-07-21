import React from 'react'
import './styles/footer.css'
import { FaFacebook , FaInstagramSquare , FaTelegram} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer' >
      
      <div className="foot-content">

        <div className="box-1">
          <h1>find us on</h1>
          <ul>
            <li><FaFacebook/> Facebook </li>
            <li> <FaInstagramSquare/> Instagram </li>
              <li><FaTelegram/>Telegram </li>
          </ul>
        </div>
        <div className="box-1">
        <h1>headqauters</h1>
          <ul>
            <li>Los angles</li>
            <li>paris, france</li>
            <li>london , uk</li>
          </ul>
        </div>
        <div className="box-1">
        <h1>contact</h1>
          <ul>
            <li className='li-2' >travleist@gmail.com</li>
            <li className='li-2' >headod@gmail.com
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
