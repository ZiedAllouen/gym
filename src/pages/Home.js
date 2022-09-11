import React from 'react'
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
const Home = () => {
  return (
    <div>
      <HeroBanner/>
      <SearchExercise/>
      <Exercises/>
    </div>
  )
}

export default Home