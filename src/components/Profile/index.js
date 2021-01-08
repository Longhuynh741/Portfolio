import React, { Component } from "react";
require("./script.css");

export default class Profile extends Component {
  render() {
    return (
      <div className ="profile-section">
        <div className="container IconText" ref={this.stateRef}>
          <div className="row">
            <div className="col-md-12">
              <h1 className="section-head" data-aos="fade-up"> About Me </h1>
              <div className="row IconContainer">
                <div className="col-md-3">
                  <i class="fab fa-js profileIcons" data-aos="flip-up"></i>
                  <br />
                  JavaScript
                </div>
                <div className="col-md-3">
                  <i class="fab fa-html5 profileIcons" data-aos="flip-down"></i>
                  <br />
                  HTML
                </div>
                <div className="col-md-3">
                  <i class="fab fa-css3-alt profileIcons" data-aos="flip-up"></i> <br />
                  CSS
                </div>
                <div className="col-md-3">
                  <i class="fab fa-react profileIcons" data-aos="flip-down"></i>
                  <br />
                  React
                </div>
              </div>
              <div className="row image-cell">
                  <img  className="cell-image"
                    src="https://avatars1.githubusercontent.com/u/69899325?s=400&u=97c1fc618c874cffee8ee3564aed5330d5858723&v=4"
                    alt=""
                  />
              </div>
              <div className="row">
                <div>
                  <section>
                    <div className="bioText" data-aos="fade-left">
                      Recent graduate from Georgia Tech's Full Stack Web
                      Development Bootcamp. Passionately pursuing a career as a
                      Software Engineer. I currently live in Atlanta, GA. My
                      goal is striving to learn as much as I can in order to
                      create meaningful projects! I am still new to the field so
                      I open to new experiences. Thanks for checking out my
                      page!
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
