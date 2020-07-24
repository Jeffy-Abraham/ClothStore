import React, { Component } from "react";

import "./Css/HomePage.css";
import {Spring} from 'react-spring/renderprops'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (

      <div>
   
    

        <div className="cent">
        <Spring
  from={{ opacity: 0 }}
  to={{ opacity: 1 }}>
  {props => <div style={props}> <img
            src="https://www.louisvuitton.com/images/louis-vuitton--HP_AU_Tambour_Horizon_Connected_Watch_DIE.jpg?wid=2048" alt='bg'
            height="400px"
            width="1400px"
            style={{ marginTop: "30px" }}
          /></div>}
</Spring>
         
             
        </div>
        <div className='ShopButtons'>
        
        </div>
      </div>
     
      
    );
  }
}

export default Main;
