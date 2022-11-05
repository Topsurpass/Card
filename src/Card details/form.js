import React from 'react'
import './form.css';

export const Form = (props) => {
  return (
    <div className='cardRegistration'>
        <form name='validCardRegistration' onSubmit={props.submit} action='' method='get'>
            <label className='label'>CARDHOLDER NAME</label> <br/>
            <input type='text' name='cardholderName' placeholder='e.g Surname Firstname' className='register'  id='cardname'required  value={props.cardHolder} onChange={props.changeName}/>
            <p className='error4'>{props.errorCard4}</p>
            <br/>
            <label  className='label'>CARD NUMBER</label> <br/>
            <input type='text' name='cardNumber' placeholder='e.g 0000000000000000' maxLength={16} className='register'  id='cardnum'required value={props.cardCode} onChange={props.changeCard}/>
            <p className='error1'>{props.errorCard}</p>
            <br/>
            <br/>
            <div className='monthCVV'>
                <div className='expDate'>
                    <label  className='label'>EXP. DATE (MM/YY) </label> <br/>   
                    <input type='text' name='month' placeholder='MM' className='month' required value={props.month} maxLength={2} onChange={props.changeMonth}/>   
                    <input type='text' name='year' placeholder='YY' className='month' required value={props.year} maxLength={2} onChange={props.changeYear}/>
                    <p className='error2'>{props.errorCard2}</p>
                </div>
                
                <div className='flexCvv'>
                    <label  className='label' id='cvvName'>CVV</label><br/>
                    <input type='text' name='cvv' placeholder='e.g 123' className='cvv' required value={props.cvv} maxLength={3} onChange={props.changeCvv}/>
                    <p className='error3'>{props.errorCard3}</p>
                </div>
                
            </div><br/>
            <div className='submitForm'>
                <input type='submit' value='Confirm' className='submit' id='CardSubmitted' />          
            </div>
            
        </form>
    </div>
    
  )
}
