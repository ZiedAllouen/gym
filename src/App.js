import React from 'react'

import {Route,Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Exercise from './pages/Exercise';
import ExerciseDetail from './pages/ExerciseDetail';

import Landing from './pages/Landing';
import Nutrition from './pages/Nutrition';
import Tips from './pages/Tips';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      {/* <Navbar/> */}
      <Routes>
      <Route path ="/" element={<Landing/>} />
        <Route path ="/exercise" element={<Exercise/>} />

        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        <Route path ="/nutrition" element={<Nutrition/>} />
        <Route path ="/tips" element={<Tips/>} />
      </Routes>
      {/* <Footer/> */}
    </Box>
  )
}

export default App