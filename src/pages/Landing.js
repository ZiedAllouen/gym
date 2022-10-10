import React from 'react'
import Hero from '../components/LandingPage/Hero/Hero';
import Programs from '../components/LandingPage/Programs/Programs';
import '../App.css';
import Reasons from '../components/LandingPage/Reasons/Reasons';
import Coaches from '../components/LandingPage/Coaches/Coaches';
import Join from '../components/LandingPage/Join/Join';
import Footer from '../components/LandingPage/Footer/Footer';
const LandingPage = () => {
  return (
    <div className='App'>
      
        <Hero/>
        <Programs/>
        <Reasons/>
        <Coaches/>
        <Join/>
        <Footer/>
    </div>
  )
}

export default LandingPage