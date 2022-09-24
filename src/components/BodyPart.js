import React from 'react'
import { Stack,Typography } from '@mui/material';
import left from '.././assets/left.png'
import right from '.././assets/right.png';
import gym1 from '.././assets/gym1.png'; 
const BodyPart = ({ item, setBodyPart, bodyPart,bodyPart1 }) => {
  return (
    <Stack type="button"
    alignItems="center"
    justifyContent="center" 
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: 'rgba(255, 255, 255, .7)', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
        <img src={gym1} alt="Gym" style={{width:'40px', height:'40px'}} />
        <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyPart