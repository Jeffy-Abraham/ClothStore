import React, { Component } from "react";



class DisplayGrid extends Component {
  render() {
    const { displaypic } = this.props
    return (
      <section>
        <div className='ProductCard'>
          <div className='ProductImage'>
            
            <img src={displaypic.ImageLink} width='320' height='480' alt='j' />
            <div class="ProductInfo" >
              <h5 style={{fontFamily:'Raleway', fontSize:'16px',letterSpacing:'0.1rem'}}>{(displaypic.Title).toUpperCase()}</h5>
              <h6 style={{fontFamily:'Roboto', fontSize:'17px' ,marginTop:'-6px'}}>{displaypic.Price} EUR</h6>
                    </div>

                  </div>





        </div>




      </section>



    );
  }
}

export default DisplayGrid;
