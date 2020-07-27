
import React, { Component } from "react";
import {gsap, TweenLite, CSSPlugin } from "gsap/all";


class ModelPicTitle extends Component {


	componentDidMount(){
    // create logo tween
    gsap.registerPlugin(CSSPlugin)
    this.logoTween =  TweenLite.to(this.myElement, 1, {y: 40,delay:0.5 });
    this.logoTween2=TweenLite.to(this.myElement2,1,{x:-30,delay:1.6})
 
    this.logoTween3=TweenLite.to(this.myElement3,1,{y:-50,delay:1})
			
	}





  render() {
   

    return (
      <div >
      <h1 ref={h1=>this.myElement=h1}
       
        style={{
          fontFamily: "Raleway",
          fontWeight: "600",
          marginTop: "30px",
          fontSize: "45px",
          letterSpacing: "0.1rem",
          borderBottom: "solid"
         
      
      
         
        }}
      >
        {this.props.title}
      </h1>
      <h1
        style={{
          fontFamily: "Raleway",
          fontWeight: "500",
          marginTop: "80px",
          fontSize: "34px",
          marginLeft:'30px'
          
       
        }}
        ref={h1=>this.myElement2=h1}
      >
        NEW SPRING COLLECTION
      </h1>
      <p ref={p=>this.myElement3=p}style={{  fontSize: "16px", fontWeight: "lighter",marginTop:'50px' }}>
        The new designer spring collection is here.Check out here for new and
        exciting offers.Floral loose fitting tshirts for all kinds of men
      </p>
    </div>
    
    );
  }
}



export default ModelPicTitle;
