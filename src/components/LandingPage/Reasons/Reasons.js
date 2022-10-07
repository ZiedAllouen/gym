import React from 'react'
import './Reasons.css';
import image1 from '../../../assets/image1.png';
import image2 from '../../../assets/image2.png';
import image3 from '../../../assets/image3.png';
import image4 from '../../../assets/image4.png';
import barbell from '../../../assets/barbell.png';
import coach from '../../../assets/coach.png';
import salad from '../../../assets/salad.png';
import supplement from '../../../assets/supplement.png';
const Reasons = () => {
  return (
    <div className='Reasons' >
        <div className='left-r'>
            <img src={image1} alt={image1} />
            <img src={image2} alt={image2} />
            <img src={image3} alt={image3} />
            <img src={image4} alt={image4} />
        </div>
        <div className='right-r'>
          <span>Some Reasons</span>
          <div>
            <span className='stroke-text'>Why </span>
            <span> Choose Us ?</span>
          </div>

          
            <div className='details-r'>
            <div>
              <img src={barbell} />
              <span>best exercises selected</span>
            </div>

            <div>
              <img src={salad} />
              <span>infos about food</span>
            </div>

            <div>
              <img src={coach} />
              <span>over 20 coach suggested </span>
            </div>

            <div>
              <img src={supplement} />
              <span>supps</span>
            </div>

          </div>

        </div>
    </div>
  )
}

export default Reasons