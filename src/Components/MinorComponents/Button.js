import React from "react";
import { Button } from 'semantic-ui-react'

function ClickButton(props) {
  
  return ( 
   <Button value='s'onClick={props.AddToCart.bind(this,props)} style={{width:'300px', border: 'solid ', backgroundColor:'black',borderWidth:'thin'}}><h3 style={{fontFamily:'Raleway',fontSize:'16px',letterSpacing:'0.3rem',color:'white'}}>ADD TO CART</h3></Button>

)
}

export default ClickButton;
