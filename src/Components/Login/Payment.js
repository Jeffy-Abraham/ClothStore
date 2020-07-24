import React, { Component } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'

import  './Delivery.css'

import  './Delivery.css'



class Payment extends Component {

    
    

  
  render() {

    
    return (  
<div>
        <div className='AddressCard'>
        <h3>Personal Details</h3>
    <p>{this.props.addressDetails.FirstName}  {this.props.addressDetails.LastName}</p>
      <p>{this.props.addressDetails.Address1}</p>
      <p>{this.props.addressDetails.Address2}</p>
      <div style={{display:'flex' ,justifyContent:'space-between'}}>
      <p>{this.props.addressDetails.Country}</p>
      <p style={{color:'#E72744',fontWeight:'bold'}}>Change</p>
      </div>
      </div>
        
        <h3>Credit Card Details</h3>
        
        <div className='Payment'>
        <label for='CardHolder'>Card Holder</label>
      
        <input value ='RANDOM PERSON'name='CardHolder'type='text'style={{width:'300px',height:'40px',borderStyle:'solid',borderWidth:'0.1px',borderColor:'lightgray',borderRadius:'2px'}} ></input>
      
         <div style={{display:'flex'}}>
         <div style={{marginTop:'15px'}}>
        <label for='CardNumber'>Card number</label>
         <br></br>
        <input name='CardNumber' value ='4317176412491233'type='number'style={{width:'300px' ,height:'40px',borderStyle:'solid',borderWidth:'0.1px',borderColor:'lightgray',borderRadius:'2px' }} ></input>
        </div>
        <div style={{marginLeft:'25px',marginTop:'15px'}}>
        <label for='CVV'>Cvv</label>
       <br>
       </br>
        <input name='CVV' value='324'type='text'style={{width:'80px',height:'40px',borderStyle:'solid',borderWidth:'0.1px',borderColor:'lightgray',borderRadius:'2px' }} ></input>
        </div>
        </div>
          <div  style={{marginTop:'15px'}}>
         <label for='valid'>Valid till</label>
         <br></br>
       
        <input name='valid' type='date' style={{width:'100px' ,height:'40px',borderStyle:'solid',borderWidth:'0.1px',borderColor:'lightgray',borderRadius:'2px' }}></input>
        </div>
        </div>
        <Button type='submit' onClick={this.props.displayPayment} style={{backgroundColor:'black',color:'white',width:'240px',marginTop:'45px'}}><div  style={{fontFamily:'Roboto' ,fontWeight:'400px',letterSpacing:'0.2rem'}}>PAY NOW</div></Button>
       
        </div>
      
    
        
   
    );
  }
}

export default Payment;
