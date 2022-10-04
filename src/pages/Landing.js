import React from 'react'
import Hero from '../components/LandingPage/Hero/Hero'
import Programs from '../components/LandingPage/Programs/Programs'
import '../App.css'
const LandingPage = () => {
  return (
    <div className='App'>
        <Hero/>
        <Programs/>
    </div>
  )
}

export default LandingPage