import React from 'react';
import './Header.css'
import logo from '../../../assets/lg.png'
const Header = () => {
  return (
    <div className='hero'>
      <img src={logo} alt='' className='logo'/>
      <ul className='header-menu'>
        <li>Home</li>
        <li>Exercises</li>
        <li>Nutrition</li>
        <li>Supplements</li>
      </ul>
    </div>
  )
}

export default Header