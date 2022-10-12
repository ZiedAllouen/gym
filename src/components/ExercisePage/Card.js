import React from 'react'

const Card = ({data}) => {
    const { imageUrl, title  } =data;
  return (
    <div>
        <img src={imageUrl} alt="Gym" style={{width:'100px', height:'100px'}} />
    </div>
  )
}

export default Card