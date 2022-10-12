import React,{useState} from 'react';
import './Header.css'
import logo from '../../../assets/lg.png'
import bars from '../../../assets/report.png'
import { Link } from 'react-router-dom';
import diet from '../../../assets/diet.png';
import tips from '../../../assets/tips.png';
import gym from '../../../assets/gymN.png';
import ex from '../../../assets/ex.png';
import Tooltip from '@mui/material/Tooltip';
const Header = () => {
  const mobile=window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] =useState(false)
  return (
    <div className='header'>
      <img src={logo} alt='' className='logo'/>
      <div className='menu'>
                <Tooltip title="Home" arrow >
                <Link to ="/">
                    <img  src={gym} alt='home' style ={{width:'46px' , height:'46px', }} />
                </Link></Tooltip>
                <Tooltip title="Exercises" arrow>
                <Link to ="/exercise">
                    <img src={ex} alt='home' style ={{width:'46px' , height:'46px', }} />
                </Link></Tooltip>
                <Tooltip title="Nutrition" arrow>
                <Link to ="/nutrition">
                    <img src={diet} alt='home' style ={{width:'46px' , height:'46px'}} />
                </Link></Tooltip>
                <Tooltip title="Tips & Myths" arrow>
                <Link to ="/tips">
                    <img src={tips} alt='home' style ={{width:'50px' , height:'50px'}} />
                </Link></Tooltip>
        </div>
    </div>
  )
}

export default Header