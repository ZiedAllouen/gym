import React from 'react'
import './Programs.css'
import {programsData} from '../Data/ProgramsData';
const Programs = () => {
  return (
    <div className='Programs'>
        {/* header */}
        <div className='programs-header'>
            <span className='stroke-text'>Explore </span>
            <span>Our services</span>
            <span className='stroke-text'>To reveal your best shape</span>
        </div >
        {/* programsData */}
        <div className='services'>
           { programsData.map((program) =>(
                <div className='category' >
                    {program.image}
                    <span> {program.heading} </span>
                    <span>{program.details}</span>
                    <div className='see-more'> <span>See More</span> </div>
                </div>
           ) )}
        </div>
    </div>
  )
}

export default Programs