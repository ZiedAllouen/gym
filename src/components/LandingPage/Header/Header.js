import React,{useState} from 'react';
import './Header.css'
import logo from '../../../assets/lg.png'
import bars from '../../../assets/report.png'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import hs from '../../../assets/hs.png';
import ex from '../../../assets/ex.png'
const Header = () => {
  const mobile=window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] =useState(false)
  return (
    <div className='header'>
      <img src={logo} alt='' className='logo'/>
      <div className='menu'>
              <Link to ="/">
                    <img src={hs} alt='home' style ={{width:'50px' , height:'50px', }} />
                </Link>
                <Link to ="/exercise">
                    <img src={ex} alt='home' style ={{width:'46px' , height:'46px', }} />
                </Link>
                <Link to ="/nutrition">
                    <img src={bars} alt='home' style ={{width:'50px' , height:'50px'}} />
                </Link>
                <Link to ="/tips">
                    <img src={ex} alt='home' style ={{width:'46px' , height:'46px'}} />
                </Link>
        </div>
    </div>
  )
}

export default Header