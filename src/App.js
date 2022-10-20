import { useState } from 'react';
import './App.css';
import { CardSubmitted } from './Card details/CardSubmitted';
import { Form } from './Card details/form';
// import bgcardback from './Card details/images/bgcardback.png';
// import bgcardfront from './Card details/images/bgcardfront.png';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Card details/card';

function App() {

  const [name, setName] = useState('');
  const [card, setCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [cvvPin, setCvvPin] = useState('');
  const [error, setError] = useState('');
  const [error2, setError2] = useState('');
  const [error3, setError3] = useState('');
  const [error4, setError4] = useState('');
  
  const a = document.getElementById('cardname');
  const b = document.getElementById('cardnum');
  const c = document.querySelectorAll('.month');
  const d = document.querySelector('.cvv');


  if(localStorage.getItem('card storage')===null){
    localStorage.setItem('card storage',`{
      "card-name":"",
      "card-number":"",
      "card-month":"",
      "card-year":"",
      "card-cvv":""}`
    );
  }

  const handleName = (event) =>{
    setName(event.target.value);
    const a = document.getElementById('cardname');
    if(/\d/g.test(a.value)){
      a.style.border = '1px solid red';
      setError4('Name cannot include numbers');
    }else{
      setError4('');
      a.style.border = '1px solid green'; 
    }
  }
 
  const handleCard = (event) =>{ 
    setCard(event.target.value);

    const b = document.getElementById('cardnum');
    if( isNaN(b.value) || b.value.match(/[.]/g) || b.value.includes(' ')){
      b.style.border = '1px solid red';
      setError('Wrong format, numbers only');
    }
    else if(b.value.length < 16){
      b.style.border = '1px solid red';
      setError('Numbers must be 16 characters');
    }
    else{
      setError('');
      b.style.border = '1px solid green'; 
    } 
  }

  const handleMonth =(event)=>{
   setMonth(event.target.value);

    if((c[0].value < 0 )|| (c[0].value > 12) || (c[0].value.length < 2) ||(isNaN(c[0].value)) || c[0].value.includes(' ')){
      c[0].style.border = '1px solid red';
      setError2('Month should be numbers between 01 - 12');
    }else{
      c[0].style.border = '1px solid green';
      setError2('');
    }
  }

  const handleYear =(event)=>{
    setYear(event.target.value);

    if((c[1].value < 22) ||  (c[1].value.length < 2) || (isNaN(c[1].value)) || c[1].value.includes(' ')){
      c[1].style.border = '1px solid red';
      setError2('Year should be numbers from 22 above');
    }else{
      c[1].style.border = '1px solid green';
      setError2('');
    }  
  }

  const handCvv = (event) =>{  
    setCvvPin(event.target.value);

    if( d.value.length < 3 || isNaN(d.value) || d.value.includes(' ')){
      d.style.border = '1px solid red';
      setError3('cvv must be 3 digits');
    }else{
      d.style.border = '1px solid green';
      setError3('');
    }  
  }

  const handleFormValidation = (event) =>{

    if(/\d/g.test(a.value)){
      event.preventDefault();
    }
    else if(b.value.length < 16 || isNaN(b.value) || b.value.includes(' ')){
      event.preventDefault();
    }else if((c[0].value < 0 )|| (c[0].value > 12) || (c[0].value.length < 2) || isNaN(c[0].value) || c[0].value.includes(' ')){
      event.preventDefault();
    }else if((c[1].value < 22) ||  (c[1].value.length < 2) || isNaN(c[1].value) || c[1].value.includes(' ')){
      event.preventDefault();
    }else if( d.value.length < 3 || isNaN(d.value) || d.value.includes(' ')){
      event.preventDefault();
    }else{

      // if(localStorage.getItem('card storage')===null){
      //   localStorage.setItem('card storage',`{
      //     "card-name":"",
      //     "card-number":"",
      //     "card-month":"",
      //     "card-year":"",
      //     "card-cvv":""}`
      //   );
      // }
      const cardDetails = JSON.parse(localStorage.getItem('card storage'));

      cardDetails["card-name"]=`${name}`;
      cardDetails["card-number"]=`${card}`;
      cardDetails["card-month"]=`${month}`;
      cardDetails["card-year"]=`${year}`;
      cardDetails["card-cvv"]=`${cvvPin}`;
      localStorage.setItem('card storage', JSON.stringify(cardDetails));
    }
  }
  const store = JSON.parse( localStorage.getItem('card storage'));
  // console.log(store)
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <div className="App">
              <div className='purple'>
                <Card pin={''} name={''} month={''} year={''} cvv={''}/>
              </div>

              <div className='white'>
                <Form cardHolder={name}  cardCode={card}  month={month} year={year} cvv={cvvPin}     
                  changeName={handleName} changeCard={handleCard} changeMonth={handleMonth}
                  changeYear={handleYear} changeCvv={handCvv} submit={handleFormValidation} errorCard={error}
                  errorCard2={error2} errorCard3={error3} errorCard4={error4}              
                />
              </div>
              
          </div>
        }/>
        <Route exact path='/submit' element={
          <div className="App">
            <div className='purple'>
              <Card pin={store["card-number"]} name={store["card-name"]} month={store["card-month"]} year={store["card-year"]} cvv={store["card-cvv"]}/>
            </div>
              <br/><br/><br/>
            <div className='white'>
              <CardSubmitted/>
            </div>
          
         </div>
        }/>
      </Routes>
    </Router>
    
  );
}
export default App;