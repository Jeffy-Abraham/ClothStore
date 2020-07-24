import React from "react";
import ReactDOM from "react-dom";
import 'font-awesome/css/font-awesome.min.css';
import App from './App'
import Bag from './Components/Checkout/Bag'
import { BrowserRouter,Route } from "react-router-dom";





ReactDOM.render(<BrowserRouter><Route component={App} /></BrowserRouter>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//

