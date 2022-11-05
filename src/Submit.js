import React from 'react'
import './App.css';
import Card from './Card details/card';
import { CardSubmitted } from './Card details/CardSubmitted';

export const Submit = () => {
    const store = JSON.parse( localStorage.getItem('card storage'));
  return (
    <div className="App">
        
        <div className='purple'>
            <Card pin={store["card-number"]} name={store["card-name"]} month={store["card-month"]} year={store["card-year"]} cvv={store["card-cvv"]}/>
        </div>
            <br/><br/><br/>
        <div className='white'>
            <CardSubmitted/>
        </div>
        
    </div>
  )
}
