import React from 'react';
import './Footer.css';
import logo from '../../../assets/lg.png'
import linkedin from '../../../assets/linkedin.png'
const Footer = () => {
  return (
    <div className='Footer-container'>
        <hr/>
        <div className='footer'>
        <div className='logo-f'>
                <img src={logo} alt="" />
        </div>
            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/zied-allouen" target="_blank">
                <div className='linkedin'>
                <img src={linkedin} alt="" />
                </div>
            </a>
        </div>
        <div className='blur blur-f-1'></div>
        <div className='blur blur-f-2'></div>
    </div>
  )
}

export default Footer
