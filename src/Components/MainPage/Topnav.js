import React, { Component } from "react";
import Title from "./Title";
import "./Css/HomePage.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import flower from './Images/flower.png'
function sideMenu()
{

  document.getElementsByClassName('MainHamburgerMenu')[0].style.width='70%'
 


}
function closesideMenu()
{
  document.getElementsByClassName('MainHamburgerMenu')[0].style.width='0%'
}
class Topnav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  
  render() {
    return (
      
      <div>


           
             <div className="MainContainer">
        <div className="HamburgerMenu">
          <div className="SubHamburger">
          
          <div className="Hamburger" onClick={sideMenu}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <div>
            <div className='MainHamburgerMenu'>
              <div className='fexi'>
            <div className="Title2">ARARA</div>  
            <div style={{fontSize:'17px',color:'white',fontWeight:'lighter',marginRight:'30px'}}onClick={closesideMenu}>X</div>
            </div>
            <div className='ham'><Link style={{color:'white'}} to='/' onClick={closesideMenu}>HOME</Link></div>
             <div className='ham'><Link to='/Men'style={{color:'white'}} onClick={closesideMenu}>MEN</Link></div>
             <div className='ham'><Link to='/Women'style={{color:'white'}} onClick={closesideMenu}>WOMEN</Link></div>
             <div><img src={flower} width='300px' height='360px'/></div>
             </div>
          
            </div>
            <div className="Title2">ARARA</div>

          </div>
          <div className="Cart2"> 
           <Cart
           
            clothCart={this.props.clothCart}
            RemoveFromCart={this.props.RemoveFromCart}
          /></div>
        
          </div>
     
        
      
        </div>

        <header >
          <nav>
            <ul>
              <li style={{ marginTop: "-20px" }}>
                <Link to="/">
                  <Title />
                </Link>
              </li>
              <li>
                <Link to="/Men">MEN</Link>
              </li>
              <li>
                <Link to="/Women">WOMEN</Link>
              </li>
            </ul>
            <Cart
            className="Cart"
            clothCart={this.props.clothCart}
            RemoveFromCart={this.props.RemoveFromCart}
          />
          </nav>
        
        </header>
      </div>
    );
  }
}

export default Topnav;
