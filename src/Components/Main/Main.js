import React, { Component } from "react";

//components
import Header from "../Header/Header";
import MemeGenerator from "../MemeGenerator/MemeGenerator";

//styles
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <section className="Main">
        <Header />
        <MemeGenerator/>
      </section>
    );
  }
}
