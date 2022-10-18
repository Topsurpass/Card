import React from 'react';
import iconComplete from '../Card details/images/iconComplete.svg';
import './cardSubmitted.css';
import {Link} from 'react-router-dom';

export const CardSubmitted = () => {
  return (
    <div className='cardCreated'>
        <div className='thankYou'>
           <img src={iconComplete} alt='iconComplete'/>
           <h2>THANK YOU</h2> 
           <p>We've added your card details</p>
           <Link to='/' className='continueLink'>
             <input type='button' className='continue' value='Continue'/>
           </Link>
        </div>
    </div>
  )
}
