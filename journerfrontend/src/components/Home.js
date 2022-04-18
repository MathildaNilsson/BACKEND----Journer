import React, { Component } from "react";
import "../App.css";
import Startscreen from "./Startscreen";
import logo from "../images/Logo.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="div1"><img className="logo" src={logo} /></div>
        <div className="div5"><Startscreen /></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
      </div>
    );
  }
}
export default Home;
