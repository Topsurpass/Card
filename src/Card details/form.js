import React from 'react'
import './form.css';

export const Form = ({cardHolder, cardCode, month,
     year, cvv, changeName, 
    changeCard, changeMonth, changeYear, 
    changeCvv, submit, errorCard,
    errorCard3,errorCard2,errorCard4}) => {
  return (
    <div className='cardRegistration'>
        <form name='validCardRegistration' onSubmit={submit} action='/submit' method='get'>
            <label className='label'>CARDHOLDER NAME</label> <br/>
            <input type='text' name='cardholderName' placeholder='e.g Surname Firstname' className='register'  id='cardname'required  value={cardHolder} onChange={changeName}/>
            <p className='error4'>{errorCard4}</p>
            <br/>
            <label  className='label'>CARD NUMBER</label> <br/>
            <input type='text' name='cardNumber' placeholder='e.g 0000000000000000' maxLength={16} className='register'  id='cardnum'required value={cardCode} onChange={changeCard}/>
            <p className='error1'>{errorCard}</p>
            <br/>
            <br/>
            <div className='monthCVV'>
                <div className='expDate'>
                    <label  className='label'>EXP. DATE (MM/YY) </label> <br/>   
                    <input type='text' name='month' placeholder='MM' className='month' required value={month} maxLength={2} onChange={changeMonth}/>   
                    <input type='text' name='year' placeholder='YY' className='month' required value={year} maxLength={2} onChange={changeYear}/>
                    <p className='error2'>{errorCard2}</p>
                </div>
                
                <div className='flexCvv'>
                    <label  className='label' id='cvvName'>CVV</label><br/>
                    <input type='text' name='cvv' placeholder='e.g 123' className='cvv' required value={cvv} maxLength={3} onChange={changeCvv}/>
                    <p className='error3'>{errorCard3}</p>
                </div>
                
            </div><br/>
            <div className='submitForm'>
                <input type='submit' value='Confirm' className='submit' id='<CardSubmitted/>' />          
            </div>
            
        </form>
    </div>
    
  )
}
