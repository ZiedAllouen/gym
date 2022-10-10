import React,{useState} from 'react'
import Exercises from '../components/ExercisePage/Exercises';
import HeroBanner from '../components/ExercisePage/HeroBanner';
import SearchExercise from '../components/ExercisePage/SearchExercise';
import Hero from '../components/LandingPage/Hero/Hero';
const Home = () => {
  
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises] = useState([]);
  console.log(bodyPart)
  return (
    <div >
      <Hero/>
      <HeroBanner/>
      {/* <SearchExercise  setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/> */}
    </div>
  )
}

export default Home