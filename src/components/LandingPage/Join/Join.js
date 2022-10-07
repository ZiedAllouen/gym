import { Button } from '@mui/material'
import React from 'react'
import './Join.css'
const Join = () => {
  return (
    <div className='Join'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP ?</span>
            </div>
            <div>
                <span> JOIN THE </span>
                <span className='stroke-text'> TEAM</span>
            </div>


        </div>
        <div className='right-j'>
            <form className='email'>
                <input type='email' placeholder='Enter your Email address '/>
                <Button className='btn btn-j'>Join Now</Button>
            </form>
        </div>
    </div>
  )
}

export default Join