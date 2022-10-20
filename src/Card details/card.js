import React from 'react'
import bgcardback from './images/bgcardback.png';
import bgcardfront from './images/bgcardfront.png';
import './card.css';
 const Card = (props) => {
  return (
    <div className='cardsFrontBack'>
      <div className='front'>
        <p className='pin'>{props.pin}</p>
        <div className='monthYearCard'>
            <p className='name'>{props.name}</p>
            <p className='monthCard'>{`${props.month}/${props.year}`}</p>
        </div>
            <img src={bgcardfront} alt='frontCard' className='frontPic'/>
      </div>
      <div className='back'>
          <p className='cvvCode'>{props.cvv}</p>
        <img src={bgcardback} alt='backCard' className='backPic'/>
      </div>
    </div>
  )
}
export default Card;