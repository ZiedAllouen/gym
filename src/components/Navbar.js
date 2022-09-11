import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import hs from '../assets/hs.png';
import ex from '../assets/ex.png'
const Navbar = () => {
  return (
    <Stack direction = 'row' justifyContent="center" gap="40px" sx ={{gap:{sm:'122px',xs:'40px'},mt:{sm:'32px',xs:'20px'}}} px="200px" >
        <Link to ="/">
            <img src={hs} alt='home' style ={{width:'50px' , height:'50px', margin :'0 20 px'}} />
        </Link>
        <Link to ="/">
            <img src={ex} alt='home' style ={{width:'46px' , height:'46px', margin :'0 20 px'}} />
        </Link>
   
    </Stack>
  )
}

export default Navbar