import React from 'react'
import './Reasons.css';
import image1 from '../../../assets/image1.png';
import image2 from '../../../assets/image2.png';
import image3 from '../../../assets/image3.png';
import image4 from '../../../assets/image4.png';
const Reasons = () => {
  return (
    <div className='Reasons' >
        <div className='left-r'>
            <img src={image1} alt={image1} />
            <img src={image2} alt={image2} />
            <img src={image3} alt={image3} />
            <img src={image4} alt={image4} />
        </div>
        <div className='right-r'> right side</div>
    </div>
  )
}

export default Reasons