import React from 'react'
import { Stack,Typography } from '@mui/material';
import left from '../../assets/arrow-left.png'
import right from '../../assets/arrow-right.png';
import muscle from '../../assets/muscle.png'; 
import { properties } from './Data';
const BodyPart = ({ item, setBodyPart, bodyPart,bodyPart1 }) => {

  return (
    <Stack type="button"
    alignItems="center"
    justifyContent="center" 
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #f48915', background: 'rgba(0, 0, 0, .1)', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : {borderTop: '4px solid #f48915', background: 'rgba(0, 0, 0, .1)', borderRadius: '20px 0px ', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
      
        <img src={muscle} alt="Gym" style={{width:'100px', height:'100px'}} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="M PLUS Rounded 1c" color="#000" textTransform="capitalize">Target {item}</Typography>
    </Stack>
  )
}

export default BodyPart