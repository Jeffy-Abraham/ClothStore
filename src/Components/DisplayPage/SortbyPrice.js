import React from "react";
import './Css/FilterButton.css'
function setVisiblityofRadio(e)
{
 document.getElementsByClassName('RadioOptionSet')[0].style.display='inline'
 

}

function SortbyPrice(props) {

 
 

  return ( 
    
   <div>

        <div className='FilterBox'>
          <div className ='FilterTitle' >
        <button onClick={setVisiblityofRadio} style={{opacity:'2px'}}> <span style={{marginLeft:'10px',color:'#E72744',fontSize:'15px',letterSpacing:'0.2rem',fontWeight:'bolder',fontFamily:'Raleway'}}>{props.title} +</span> 
        </button>
          </div>
        <div className='RadioOptionSet' onChange={props.filterClothesbyPrice.bind(this)}>
          <div className='Options'>
          <label for='LowtoHigh' style={{fontSize:'15px',fontWeight:'600'}}>Price high to low</label>
            <input className='Hide' type='radio'id='LowtoHigh'name='Price'value='1'/>
          
            </div>
            <div className='Options'>
            
            <label for='HightoLow' style={{fontSize:'15px' ,fontWeight:'600'}}>Price low to high</label>
            <input className='Hide' type='radio'id='HightoLow'name='Price'value='2'/>
            </div>


        </div>
        </div>




      
   </div>
)
}

export default SortbyPrice;
