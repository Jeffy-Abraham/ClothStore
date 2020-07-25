import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./Components/MainPage/Main";
import DisplayPage from "./Components/DisplayPage/DisplayPage";
import Topnav from "./Components/MainPage/Topnav";
import "./Components/MainPage/Css/HomePage.css";
import ShoppingPage from "./Components/ShoppingPage/ShoppingPage";
import Login from "./Components/Login/Login";
import Delivery from "./Components/Login/Delivery";
import './app.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ModelPicGalTitle: "DRESS COLLECTION",
      ModelPicGuyTitle: "SHIRTS",
      ModelPicGuy:
        "https://static.zara.net/photos///2020/I/0/2/p/5516/441/250/2/w/1140/5516441250_1_1_1.jpg?ts=1594061432291",
      ModelPicGal:
        "https://static.zara.net/photos///rw-center/2020/I/0/1/p/1660/309/612/82/w/1884/1660309612_1_1_1.jpg?ts=1592909355999",
      clothCart: [],

      clothTypes: [
        {
          id: 1,
          Price: "30.00",
          Title: "Floral Pattern Shirt",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://static.zara.net/photos///2020/V/0/2/p/8574/499/802/2/w/460/8574499802_1_1_1.jpg?ts=1578653152075",
          Color: "Red",
        },
        {
          id: 2,
          Price: "19.00",
          Title: "Easy Care Textured Shirt",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://static.zara.net/photos///2019/V/0/2/p/7545/405/250/2/w/385/7545405250_2_1_1.jpg?ts=1550134242494",
          Color: "Red",
        },
        {
          id: 3,
          Price: "23.00",
          Title: "Coloured Texture Shirt",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/W/0/2/p/4454/401/250/2/w/460/4454401250_2_1_1.jpg?ts=1582012564600",
          Color: "white",
        },
        {
          id: 4,
          Price: "26.60",
          Title: "Coloured check Shirt",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/V/0/2/p/7545/424/401/2/w/385/7545424401_2_1_1.jpg?ts=1580405364792",
          Color: "white",
        },
        {
          id: 5,
          Price: "39.40",
          Title: "Nylon Beige Shirt",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://images.topman.com/i/TopMan/TM83D76UBLK_M_1.jpg?$w1000$&fmt=webp&qlt=80",
        },
        {
          id: 6,
          Price: "25.89",
          Title: "Polka Dot",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://static.zara.net/photos///2020/V/0/2/p/7545/323/401/2/w/460/7545323401_2_1_1.jpg?ts=1580736549709",
        },
        {
          id: 7,
          Price: "23.00",
          Title: "Coloured Texture Shirt",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/W/0/2/p/4454/401/250/2/w/460/4454401250_2_1_1.jpg?ts=1582012564600",
        },
        {
          id: 8,
          Price: "26.60",
          Title: "Coloured check Shirt by ZA",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/V/0/2/p/7545/424/401/2/w/385/7545424401_2_1_1.jpg?ts=1580405364792",
        },
      ],

      clothTypes2: [
        {
          id: 1,
          Price: "40.00",
          Title: "oversized denim jacket in black",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://static.zara.net/photos///2020/I/0/1/p/0014/020/093/2/w/560/0014020093_1_1_1.jpg?ts=1593513952933",
          Color: "Red",
        },
        {
          id: 2,
          Price: "19.00",
          Title: "Easy Care Textured Shirt",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://static.zara.net/photos///rw-center/2020/I/0/1/p/1856/065/015/3/w/1896/1856065015_2_10_1.jpg?ts=1593504275656",
          Color: "Red",
        },
        {
          id: 3,
          Price: "23.00",
          Title: "Coloured Texture Shirt",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/I/0/1/p/7878/544/420/2/w/560/7878544420_1_1_1.jpg?ts=1593761410723",
          Color: "white",
        },
        {
          id: 4,
          Price: "26.60",
          Title: "Coloured check Shirt",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/I/0/1/p/0264/120/800/2/w/560/0264120800_1_1_1.jpg?ts=1592917452397",
          Color: "white",
        },
        {
          id: 5,
          Price: "39.40",
          Title: "Nylon Beige Shirt",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://static.zara.net/photos///2020/I/0/1/p/4424/327/612/2/w/560/4424327612_1_1_1.jpg?ts=1593777470922",
        },
        {
          id: 6,
          Price: "25.89",
          Title: "Polka Dot",
          Description:
            "Relaxed fit shirt made of a linen blend. Featuring a stand-up collar, long sleeves and front button",
          ImageLink:
            "https://static.zara.net/photos///2020/I/0/1/p/6147/151/406/2/w/560/6147151406_1_1_1.jpg?ts=1593779058758",
        },
        {
          id: 7,
          Price: "23.00",
          Title: "Coloured Texture Shirt",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/W/0/2/p/4454/401/250/2/w/460/4454401250_2_1_1.jpg?ts=1582012564600",
        },
        {
          id: 8,
          Price: "26.60",
          Title: "Coloured check Shirt by ZA",
          Description:
            "Slim fit collared shirt featuring long sleeves with buttoned cuffs and a button-up front.",
          ImageLink:
            "https://static.zara.net/photos///2020/I/0/1/p/1058/452/406/2/w/560/1058452406_1_1_1.jpg?ts=1593526259723",
        },
      ],
    };
    this.filterClothesbyId = this.filterClothesbyId.bind(this);
    this.filterClothesbyPrice = this.filterClothesbyPrice.bind(this);
    this.filterClothesbyPrice2 = this.filterClothesbyPrice2.bind(this);
    this.AddToCart = this.AddToCart.bind(this);
    this.RemoveFromCart = this.RemoveFromCart.bind(this);
  }
  AddToCart(cloth) {
    document.getElementsByClassName("dropdown-content")[0].style.display =
      "block";
    document.getElementsByClassName("dropdown-content")[0].style.animation =
      " dropanime 0.5s";

    this.setState({ clothCart: [cloth.addedItem, ...this.state.clothCart] });
  }
  RemoveFromCart(id) {
    var removeCloth = this.state.clothCart.filter((cloth) => cloth.id != id);
    this.setState({ clothCart: removeCloth });
  }

  filterClothesbyId() {
    alert("Clicked");
  }
  filterClothesbyPrice(price) {
    document.getElementsByClassName("RadioOptionSet")[0].style.display = "none";

    let id = price.target.value;
    if (id == 1) {
      let filterClothes = this.state.clothTypes.sort(
        (a, b) => parseFloat(a.Price) - parseFloat(b.Price)
      );
      this.setState({ clothTypes: filterClothes });
    }
    if (id == 2) {
      let filterClothes = this.state.clothTypes.sort(
        (a, b) => parseFloat(b.Price) - parseFloat(a.Price)
      );
      this.setState({ clothTypes: filterClothes });
    }
  }
  filterClothesbyPrice2(price) {
    document.getElementsByClassName("RadioOptionSet")[0].style.display = "none";

    let id = price.target.value;
    if (id == 1) {
      let filterClothes = this.state.clothTypes2.sort(
        (a, b) => parseFloat(a.Price) - parseFloat(b.Price)
      );
      this.setState({ clothTypes2: filterClothes });
    }
    if (id == 2) {
      let filterClothes = this.state.clothTypes2.sort(
        (a, b) => parseFloat(b.Price) - parseFloat(a.Price)
      );
      this.setState({ clothTypes2: filterClothes });
    }
  }
  render() {
    return (
      <BrowserRouter>
      <div className='Mainwrapper'>
        <Topnav
          clothCart={this.state.clothCart}
          RemoveFromCart={this.RemoveFromCart}
        />
        <div className="line"></div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route
            path="/Men"
            render={(props) => (
              <DisplayPage
                clothTypes={this.state.clothTypes}
                filterClothesbyId={this.filterClothesbyId}
                filterClothesbyPrice={this.filterClothesbyPrice}
                ModelPicGuy={this.state.ModelPicGuy}
                ModelTitle={this.state.ModelPicGuyTitle}
                Gender="Men"
              />
            )}
          />{" "}
          <Route
            path="/Women"
            render={(props) => (
              <DisplayPage
                clothTypes={this.state.clothTypes2}
                filterClothesbyId={this.filterClothesbyId}
                filterClothesbyPrice={this.filterClothesbyPrice2}
                ModelPicGuy={this.state.ModelPicGal}
                ModelTitle={this.state.ModelPicGalTitle}
                Gender="Women"
              />
            )}
          />
          <Route
            exact
            path="/AddtoBag/:Gender/:id"
            render={(params) =>
              params.match.params.Gender == "Men" ? (
                <ShoppingPage
                  clothTypes={this.state.clothTypes}
                  {...params}
                  AddToCart={this.AddToCart}
                />
              ) : (
                <ShoppingPage
                  clothTypes={this.state.clothTypes2}
                  {...params}
                  AddToCart={this.AddToCart}
                />
              )
            }
          />
          <Route exact path="/Login" render={(params) => <Login />} />
          <Route
            exact
            path="/Delivery"
            render={(params) => (
              <Delivery
                clothCart={this.state.clothCart}
                RemoveFromCart={this.RemoveFromCart}
              />
            )}
          />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
