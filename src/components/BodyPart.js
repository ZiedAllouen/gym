import React from 'react'
import { Stack,Typography } from '@mui/material';
import left from '.././assets/left.png'
import right from '.././assets/right.png';
import gym1 from '.././assets/gym1.png'; 
const BodyPart = () => {
  return (
    <Stack type="button"
    alignItems="center"
    justifyContent="center" 
    className="bodyPart-card">
        <img src={gym1} alt="Gym" styles={{width:'40px', height:'40px'}} />
    </Stack>
  )
}

export default BodyPart