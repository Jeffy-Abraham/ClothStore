import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";
import Delete from "./Images/delete.png";
import Carts from "./Images/Carter.png";
import "./Css/HomePage.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

class Cart extends Component {
  render() {
  
    const {clothCart}=this.props
  
    var sum=0
    if(clothCart)
    {
      for(var i=0;i<clothCart.length;i++)
      {
         sum=parseFloat(clothCart[i].Price)+sum
   
      }
      

    }
   function hideCart()
   {
    document.getElementsByClassName('dropdown-content')[0].style.display='none'
   }
    
    return (
      <div className="Cart">
        <div className="dropdown">
          
          <button className="dropbtn" style={{ marginTop: "-10px" }}>
    <div style={{position:'relative'}}> <img src={Carts} width="30px" height="27px" /> <div style={{position:'absolute',bottom:'10px',left:'20px',color:'white',fontWeight:'700',fontSize:'19px',backgroundColor:'#E72744',width:'20px',height:'20px',fontFamily:'Roboto',borderRadius:'50%',fontSize:'14px'}}>{clothCart.length}</div></div>
           
          </button>
          
          <div className="dropdown-content" style={{ marginLeft: "-130px" }}>
           

            <div
              className="CartDialogBox"
              style={{ height: "390px", width: "330px" }}

            >
              
              <div className='CartTitle'>
    <div className='MyCart' style={{fontWeight:'900' ,marginLeft:'20px',marginTop:'20px',marginBottom:'20px'}}>My Cart, {clothCart.length} items</div>
              
                <Button style={{backgroundColor:'whitesmoke'}} onClick={hideCart}><h3 style={{fontFamily:'Raleway',fontWeight:'900',color:'black'}}>X</h3></Button>
              </div>

             
              {!clothCart.length ? <div style={{margin:'10px'}}><h5 style={{fontSize:'16px',fontFamily:'Roboto',letterSpacing:'0.3',fontWeight:'bold'}}>Your cart is empty</h5></div> : <div >
             <div style={{overflowY:'scroll',maxHeight:'220px', scrollbarColor:'dark'}}> {
              clothCart.map((cloths) => {
              return (
                <div>
                <div className='GridCartImage'>
                <div><img src={cloths.ImageLink} width='130px'height='180px' style={{margin:'20px'}}></img></div>
                <div style={{marginLeft:'-10px' ,marginTop:'30px',marginRight:'20px'}}>
                <div style={{fontFamily:'Raleway',fontWeight:'bolder',fontSize:'16px'}}>{cloths.Price} EUR</div>
                <div style={{fontFamily:'Roboto',fontWeight:'bolder',fontSize:'14px'}}>{cloths.Title}</div>
               </div>
                  </div>
     <img onClick={this.props.RemoveFromCart.bind(this,cloths.id)} style={{float:'right' ,marginTop:'-50px',marginRight:'20px'}}src={Delete} width='30px'height='30px'></img>
        </div>
              );
            })}</div>
          
                 
     <div className='SubTotal' style={{backgroundColor:'#f8f8f8',zIndex:'999'}}><div style={{margin:'20px',fontWeight:'700'}} >Sub-Total</div>
        <div style={{margin:'20px',fontSize:'20px',fontFamily:'Raleway',fontWeight:'bolder'}}> {parseFloat(sum).toFixed(2)} EUR</div>

                  </div>
                  <div className='CheckButtons' style={{marginBottom:'5px'}}>
                    
                <Link to='/Login'>  <Button style={{ borderRadius: '0 !important',width:'150px',height:'50px', border: 'solid ', backgroundColor:'#E72744',borderWidth:'thin'}}><h5 style={{fontFamily:'Raleway',fontSize:'11px',letterSpacing:'0.2rem',color:'white'}}>CHECKOUT</h5></Button></Link>
        <Button style={{width:'150px', border: 'solid ', backgroundColor:'white',borderWidth:'thin'}}><h5 style={{fontFamily:'Raleway',fontSize:'11px',letterSpacing:'0.2rem',color:'black'}}> BAG</h5></Button>
        </div></div>}
                     




            </div>








          
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
