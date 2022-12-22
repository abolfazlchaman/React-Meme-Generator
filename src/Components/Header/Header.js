import React, { Component } from "react";
import trollfaceImage from "./../../Images/Troll Face.png";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <header >
        <img className="logo" src={trollfaceImage} />
        <h1 className="heading">Meme Generator</h1>
      </header>
    );
  }
}
