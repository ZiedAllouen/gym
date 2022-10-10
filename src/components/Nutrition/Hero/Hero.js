import React from 'react';
import Header from '../../LandingPage/Header/Header';
import './Hero.css'
import Heart from '../../../assets/heart.png'
import HeroImg from '../../../assets/back-img.png'
import HeroBack from '../../../assets/hero_image_back.png'
import calories from '../../../assets/calories.png';
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion';
const Hero = () => {
  const transition={type: 'spring', duration:3}
  const mobile=window.innerWidth <= 768 ? true : false;
  return (
    <div className='hero'>
      <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header/>
        <div className='best-ad'>
          <motion.div
          initial={{left: mobile? "148":"185px"}}
          whileInView={{left:'8px'}}
          transition={{...transition,type:'tween'}}
          ></motion.div>
         <span> the best fit web app in tunisia</span>
        </div>

        <div className='hero-text'>
          <div>
          <span>Get fit in the </span>
            <span className='stroke-text'>Gym </span>
            
            </div> 
            <div> 
            <span>Lose weight in the </span>
            <span className='stroke-text'>kitchen </span>
            </div>
            <div >
              <span> in here we help you to get your best shape by providing the best exercises ,supplements, nutrition, and more ...</span>
            </div>
        </div>

{/* figures */}
      <div className='figures' >
        <div>
          <span>
          <NumberCounter end={1300} start={1000} delay='4' preFix="+" />
             </span> 
          <span>Exercises</span>
        </div>
        <div>
          <span><NumberCounter end={1300} start={1000} delay='4' preFix="+" /> </span> 
          <span>Advice</span>
        </div>
        <div>
          <span><NumberCounter end={1300} start={1000} delay='4' preFix="+" /> </span> 
          <span>Food</span>
        </div>

      </div>
      {/* hero buttons */}
      <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
      </div>
      </div>
      <div className='right-h'>
        <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
        className='heart-rate'>
          <img src={Heart} />
          <span>Improve your <br/> </span>
          <span>Heart Rate</span>
          <span>100 bpm</span>
        </motion.div>
        {/* hero images */}
        <img src={HeroImg} className='hero-image'/>
        <motion.img 
        initial={{right:'11rem'}}
        whileInView={{right:"20rem"}}
        transition={transition}
        src={HeroBack} className='hero-image-back'/>

        {/* calories */}
        <motion.div 
        initial={{right:'37rem'}}
        whileInView={{right:"28rem"}}
        transition={transition}
        className='calories'>
          <img src={calories} />
          <div>
            <span>Burn Calories </span> 
            <span> Manifest ABS</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero