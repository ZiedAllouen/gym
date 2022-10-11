import React,{useState} from 'react'
import './Coaches.css';
import {CoachesData} from '../../LandingPage/Data/CoachesData';
import leftArrow from '../../../assets/arrow-left.png';
import rightArrow from '../../../assets/arrow-right.png';
import {motion} from 'framer-motion';
const Coaches = () => {
  const transition={type: 'spring', duration:3}
  const [selected,setSelected]=useState(0);
  const tLength=CoachesData.length;
  return (
    <div className='Coaches'>
      <div className='left-c'>
        <span>Coaches</span>
      
        <span className='stroke-text'>what</span>
        <span>they will <span className='stroke-text'>add</span> </span>
        <motion.span
        key={selected}
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:100}}
        transition={transition}
        >{CoachesData[selected].review }</motion.span>
        <span>
        <span style={{color:'var(--orange)'}}>{CoachesData[selected].name }</span>{" "}
        -{CoachesData[selected].status }
        </span>
      </div>
      <div className='right-c'>
        <motion.div
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}} 
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
                initial={{opacity:0,x:100}}
                transition={{...transition,duration:2}} 
                whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={CoachesData[selected].image } />
        <div className='arrow'>
          <img onClick={()=>{selected===0?setSelected(tLength - 1):setSelected((prev)=>prev-1)} } src={leftArrow } />
          <img  onClick={()=>{selected===tLength - 1?setSelected(0):setSelected((prev)=>prev+1)} } src={rightArrow } />
        </div>
      </div>
    </div>
  )
}

export default Coaches