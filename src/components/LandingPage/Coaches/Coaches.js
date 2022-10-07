import React,{useState} from 'react'
import './Coaches.css';
import {CoachesData} from '../../LandingPage/Data/CoachesData';
import leftArrow from '../../../assets/arrow-left.png';
import rightArrow from '../../../assets/arrow-right.png';
const Coaches = () => {
  const [selected,setSelected]=useState(0);
  const tLength=CoachesData.length;
  return (
    <div className='Coaches'>
      <div className='left-c'>
        <span>Coaches</span>
        <span className='stroke-text'>what</span>
        <span>they will <span className='stroke-text'>add</span> </span>
        <span>{CoachesData[selected].review }</span>
        <span>
        <span style={{color:'var(--orange)'}}>{CoachesData[selected].name }</span>{" "}
        -{CoachesData[selected].status }
        </span>
      </div>
      <div className='right-c'>
        <img src={CoachesData[selected].image } />
        <div className='arrow'>
          <img src={leftArrow } />
          <img src={rightArrow } />
        </div>
      </div>
    </div>
  )
}

export default Coaches