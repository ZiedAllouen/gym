import React,{useState} from 'react';
import './Header.css'
import logo from '../../../assets/lg.png'
import bars from '../../../assets/report.png'
const Header = () => {
  const mobile=window.innerWidth <= 768 ? true : false;
  const [menuOpened,setMenuOpened] =useState(false)
  return (
    <div className='header'>
      <img src={logo} alt='' className='logo'/>
{(menuOpened===false && mobile===true)?(
  <div
  style={{ backgroundColor:'var(--appColor)',
  padding:'0.5rem',
   borderRadius:'5px',
   width:'2.6rem',
   height:'2.6rem' }}
        onClick={()=>setMenuOpened(true)}
  > <img src={bars} style={{width:'1.8rem',height:'1.8rem'}} /></div>
):
                <ul className='header-menu'>
                    <li onClick={()=>setMenuOpened(false)}>Home</li>
                    <li onClick={()=>setMenuOpened(false)}>Exercises</li>
                    <li onClick={()=>setMenuOpened(false)}>Nutrition</li>
                    <li onClick={()=>setMenuOpened(false)}>Supplements</li>
                </ul>
}

    </div>
  )
}

export default Header