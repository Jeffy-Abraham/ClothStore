import React, { Component } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import  './Delivery.css'

import  './Delivery.css'



class Forms extends Component {

    
    

  
  render() {
 
   console.log(this.props.formDetails.FirstName)
    
    return (  
    <Form>
      <h3>Personal Details</h3>
    <div className='PersonalDetails'>
    <Form.Field style={{marginTop:'30px'}}>
      <p style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:'14px'}}>Firstname</p>
      <input style={{width:'300px' ,borderRadius:'0px' }}  type='text'onChange={this.props.OrderDetails} value={this.props.formDetails.FirstName} name='FirstName'/>
    </Form.Field>
    <Form.Field style={{marginLeft:'20px'}}>
    <p style={{fontFamily:'Roboto',fontWeight:'bolder',fontSize:'14px'}}>Surname</p>
      <input style={{width:'300px' ,borderRadius:'0px'}} name='LastName'type='text'onChange={this.props.OrderDetails} value={this.props.formDetails.LastName}/>
    </Form.Field>
    </div>
    <h3>Address</h3>
    <div className='AddressDetails'>
      
    <Form.Field>
    <p style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:'14px'}}>Country</p>
                <input style={{width:'300px' ,borderRadius:'0px'}} type='text'onChange={this.props.OrderDetails} value={this.props.formDetails.Country} name='Country' />
    </Form.Field>
    <Form.Field style={{marginLeft:'20px'}}>
    <p style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:'14px'}}>Address Line 1</p>
      <input style={{width:'300px' ,borderRadius:'0px'}}  name='Address1' type='text'onChange={this.props.OrderDetails} value={this.props.formDetails.Address1}/>
    </Form.Field>
    </div>
    <div className='AddressDetails2'>
    <Form.Field>
   
    <p style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:'14px'}}>Address Line 2</p>
      <input style={{width:'300px' ,borderRadius:'0px'}}   name='Address2' type='text'onChange={this.props.OrderDetails} value={this.props.formDetails.Address2}/>
    </Form.Field>
    <Form.Field style={{marginLeft:'20px'}}>
    <p style={{fontFamily:'Roboto',fontWeight:'bold',fontSize:'14px'}}>Town City</p>
      <input style={{width:'300px' ,borderRadius:'0px'}}  />
    </Form.Field>
    </div>
    <div>
    <Button type='submit' onClick={this.props.displayform} style={{backgroundColor:'black',color:'white',width:'240px'}}><div  style={{fontFamily:'Roboto' ,fontWeight:'400px',letterSpacing:'0.2rem'}}>PROCEED</div></Button>
    </div>
  </Form>
  
    
   
   
    );
  }
}

export default Forms;
