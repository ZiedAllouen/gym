import React from 'react'

import {Route,Routes} from 'react-router-dom';
import { Box } from '@mui/material';

import './App.css';
import Exercise from './pages/Exercise';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/ExercisePage/Navbar';
import Footer from './components/ExercisePage/Footer';
import Landing from './pages/Landing';

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
      {/* <Navbar/> */}
      <Routes>
      <Route path ="/" element={<Landing/>} />
        <Route path ="/exercise" element={<Exercise/>} />
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
      {/* <Footer/> */}
    </Box>
  )
}

export default App