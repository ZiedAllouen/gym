import React,{useState} from 'react'
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercise from '../components/SearchExercise';
const Home = () => {
  
  const [bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises] = useState([]);
  console.log(bodyPart)
  return (
    <div>
      <HeroBanner/>
      <SearchExercise  setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises}/>
    </div>
  )
}

export default Home