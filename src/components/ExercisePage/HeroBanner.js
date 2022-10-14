import React,{ useState, useEffect } from 'react'
import { Box,Stack,Typography,Button } from '@mui/material'

import Header from '../../components/LandingPage/Header/Header';
import './Hero.css'
import Heart from '../../assets/heart.png'
import HeroImg from '../../assets/back-img.png'
import HeroBack from '../../assets/hero_image_back.png'
import calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';
import {motion} from 'framer-motion';


const HeroBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ 'Sweat”', 'Blood”', 'Vomit”' ];
  const period = 700;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  const transition={type: 'spring', duration:3}
  const mobile=window.innerWidth <= 768 ? true : false;
  return (
    <div className='App' >



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
         <span> the best fit web app in tunisia </span>
        </div>

        <div className='hero-text'>
          <div>
          <span>You shall </span>
            <span className='stroke-text'>Gain </span> 
            <span>but</span>
            </div> 
            <div> 
              <span> you shall </span>
              <span className='stroke-text'>pay </span>
              <span> with </span>
              <span className='stroke-text'><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Sweat"", "Blood"", "Vomit"" ]'><span className="wrap">{text}</span></span></span> 
            </div>
            <div >
              <span> "Pavel Tsatsouline"</span>
            </div>
            
        </div>

{/* figures */}
      <div className='figures' >
        <div>
          <span>
          <NumberCounter end={400} start={300} delay='4' preFix="+" />
             </span> 
          <span>Lower body Exercises</span>
        </div>
        <div>
          <span><NumberCounter end={800} start={700} delay='4' preFix="+" /> </span> 
          <span>upper body Exercises</span>
        </div>
        <div>
          <span><NumberCounter end={130} start={100} delay='4' preFix="+" /> </span> 
          <span>cardio Exercises</span>
        </div>

      </div>
      {/* hero buttons */}
      <div className='hero-buttons'>
        <button className='btn'><a href="#exercises" >Explore Exercises</a></button>
        
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
        <img src={HeroImg} className='hero-image1'/>
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
  
    
    </div>
  )
}

export default HeroBanner