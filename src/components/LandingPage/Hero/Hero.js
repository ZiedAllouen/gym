import React from 'react';
import Header from '../Header/Header';
import './Hero.css'
import Heart from '../../../assets/heart.png'
import HeroImg from '../../../assets/back-img.png'
import HeroBack from '../../../assets/hero_image_back.png'
import calories from '../../../assets/calories.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header/>
        <div className='best-ad'>
          <div></div>
         <span> the best fit web app in tunisia ever</span>
        </div>

        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your </span>
            </div> 
            <div> 
              <span>Ideal Body</span> 
            </div>
            <div >
              <span> in here we help you to get your best shape by providing the best exercises ,supplements, nutrition, and more ...</span>
            </div>
        </div>

{/* figures */}
      <div className='figures' >
        <div>
          <span>+1300 </span> 
          <span>Exercises</span>
        </div>
        <div>
          <span>+500 </span> 
          <span>Advice</span>
        </div>
        <div>
          <span>+625 </span> 
          <span>Food</span>
        </div>

      </div>
      {/* hero buttons */}
      <div className='hero-buttons'>
        <buttons className='btn'>Get Started</buttons>
        <buttons className='btn'>Learn More</buttons>
      </div>
      </div>
      <div className='right-h'>
        <div className='heart-rate'>
          <img src={Heart} />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        {/* hero images */}
        <img src={HeroImg} className='hero-image'/>
        <img src={HeroBack} className='hero-image-back'/>

        {/* calories */}
        <div className='calories'>
          <img src={calories} />
          <div>
            <span>Burn Calories </span> 
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero