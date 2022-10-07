import React from 'react'
import './Coaches.css';
import {CoachesData} from '../../LandingPage/Data/CoachesData';
const Coaches = () => {
  return (
    <div className='Coaches'>
      <div className='left-c'>
        <span>Coaches</span>
        <span className='stroke-text'>what</span>
        <span>they will <span className='stroke-text'>add</span> </span>
        <span>{CoachesData[0].review }</span>
      </div>
      <div className='right-c'></div>
    </div>
  )
}

export default Coaches