import React, { Component } from "react";
import { Button, Checkbox, Form } from 'semantic-ui-react'
import  './Delivery.css'
import Payment from './Payment'
import Forms from "./Form";
import {Spring} from 'react-spring/renderprops'




class Delivery extends Component {
  
  constructor(props) {
   
    super(props);
    this.state={
      showform:'none',
      FirstName:'',
      LastName:'',
      Address1:'',
      Address2:'',
      Country:''





    }

    this.displayform = this.displayform.bind(this);
    this.displayPayment=this.displayPayment.bind(this)
    this.OrderDetails=this.OrderDetails.bind(this)


  

    
  }
  
  displayPayment() {

      var x=document.getElementsByClassName('ProgressLine')[1].children[0]
      x.style.animation = "animateProgressLine 2s forwards";
      
      var y=document.getElementsByClassName('ProgressHeading')[1].children[0]
      y.style.color='black'
      this.setState({showform:'default'})

  
 
 
    
  }


   displayform() {

    if(this.state.Address1!='')
    {
      var x=document.getElementsByClassName('ProgressLine')[0].children[0]
      x.style.animation = "animateProgressLine 2s forwards";
      
      var y=document.getElementsByClassName('ProgressHeading')[0].children[0]
      y.style.color='black'
      this.setState({showform:'showPayment'})

    }
    else
    {
      alert('Please fill the address as much you can')
    }
 
    
  }
  OrderDetails(e)
  {

    

    this.setState({[e.target.name]:e.target.value})
    console.log(this.state)


  }

  
  render() {
    var date=new Date()
    const {clothCart}=this.props
    console.log(clothCart)
    var sum=0
    if(clothCart)
    {
      for(var i=0;i<clothCart.length;i++)
      {
         sum=parseFloat(clothCart[i].Price)+sum
   
      }
      

    }
   
    
    return (
      <div style={{width:'100%'}}> 
       <div className='ProgressBar'>

       <div><h3>Order Details</h3></div>

             <div className='ProgressLine'>

                  <span></span>


             </div>
             <div className='ProgressHeading'><h3>Payment</h3></div>  
             <div className='ProgressLine'>

                  <span></span>


             </div>
             
             <div className='ProgressHeading'><h3>Order Summary</h3></div>  
       </div>
        
      <div className='DeliveryGrid' >
        

        {this.state.showform=='none'?   <Spring
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props => <div style={props}> <div className='AddressForm'><Forms displayform={this.displayform} formDetails={this.state} OrderDetails={this.OrderDetails}/></div></div>  }
</Spring>
    : this.state.showform==='showPayment'?<Spring
    from={{ opacity: 0 }}
    to={{ opacity: 1 }}>
    {props => <div style={props}> <div className='AddressForm'></div><Payment addressDetails={this.state} displayPayment={this.displayPayment}/></div>  }
    </Spring>:<div className='AddressForm'><h3>Your order has been placed .You will receive the item on {date.getDate()+3}/{date.getMonth()}/2020 </h3></div>}
   
  
 <div className='ItemClass'>
   <div className='AmountContainer'> 
      <div className='Amount2'>
      <p style={{fontSize:'17px',fontWeight:'bold',fontFamily: 'Overpass'}}>Sub Total :</p>
      <p style={{fontSize:'17px',fontWeight:'bold',fontFamily: 'Overpass'}}>{sum}  €</p>
      </div>
      <div className='Amount'>
      <p style={{fontSize:'17px',fontWeight:'bold',fontFamily: 'Overpass'}}>Shipping:</p>
      <p style={{fontSize:'17px',fontWeight:'bold',fontFamily: 'Overpass'}}>3.53 €</p>
      </div>
     
     <hr></hr>
     <div className='Amount'>
      <p style={{fontSize:'24px',fontWeight:'bold',fontFamily: 'Overpass'}}>TOTAL:</p>
    <p style={{fontSize:'24px',fontWeight:'bold',fontFamily: 'Overpass'}}>{  parseFloat(sum+3.53).toFixed(2) }</p>
      </div>
     
        </div>
        <div className='DeliveryBags'>
          <div className='DeliveryBags2'>
        <h3 style={{fontWeight:'bolder',fontFamily: 'Overpass',fontWeight:'bolder'}}>SHOPPING BAG</h3>
        <hr></hr>

        {clothCart.map(clothCarts=>{
          return ( <div className='DeliveryBag3'>
          <img src={clothCarts.ImageLink} width='87px' height='116px'/>
       <div className='DeliveryBag4'>
     <h3 style={{fontWeight:'bolder',fontFamily: 'Overpass',fontWeight:'bolder'}}>{clothCarts.Title}</h3>
     <p style={{fontSize:'17px',fontFamily: 'Overpass',fontWeight:'bolder'}}>€ {clothCarts.Price} </p>
     <p style={{fontSize:'17px',fontFamily: 'Overpass',fontWeight:'bold'}}>QTY 1 </p>
     <p style={{fontSize:'17px',fontFamily: 'Overpass',fontWeight:'bolder',color:'#E72744'}}>SUBTOTAL € {clothCarts.Price} </p>
   
     </div>
     
     </div>   )
        })}
       
    <hr></hr>
    </div>
      
   </div>
    
    

    </div>


    
    </div>
    
     
     
     
    
    </div>
  
   
   
    );
  }
}

export default Delivery;
