import React, { Component } from "react";
require("./script.css");
export default class HeroImg extends Component {
  render() {
    return (
      <div className="heroSection">
        <div className="jumbotron hero">
          <h1 className="heroText">
            Hello my name is Long Huynh. <br />
            Nice to meet you
          </h1>
                <button> Get to know me</button>
        </div>
      </div>
    );
  }
}
