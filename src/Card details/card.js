import React from 'react'
import bgcardback from './images/bgcardback.png';
import bgcardfront from './images/bgcardfront.png';
import './card.css';
export const Card = () => {
  return (
    <div className='cardsFrontBack'>
      <img src={bgcardback} alt='backCard' className='backPic'/>
      <img src={bgcardfront} alt='backCard' className='frontPic'/>
    </div>
  )
}
