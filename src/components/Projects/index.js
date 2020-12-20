import React, { Component } from "react";
require("./script.css");

export default class Projects extends Component {
  render() {
    return (
      <div className="project-section">
        <div className="container">
          <h1 className="section-head" data-aos="fade-up">
          
            My Projects
          </h1>
          <div className="row projectContainer" data-aos="fade-left">
            <div className="col-md-8">
              <img
                className="verdant"
                src="https://user-images.githubusercontent.com/69770137/99292540-5758f400-280f-11eb-93f7-c3299670bd29.png"
                alt="project1"
              />
            </div>
            <div className="col-md-4">
              <h1>Verdant-Green Thumbs</h1>
              <br />
              Full MERN Stack project designed for plant enthusiasts to explore
              the world of plants! Users can create a profile, research plant
              articles, and connect with other enthusiasts through our web
              application.
              <br/>
              <button className="site-button"> <a href="https://github.com/icecicle04/verdant" target="blank"> GitHub Repo  </a>  </button>
              <button className="site-button"> <a href="https://verdant-thumbs.herokuapp.com/" target="blank">  Deployed Site </a>  </button>
            </div>
          </div>
          <div className="row" data-aos="fade-right">
            <div className="col-md-4">
              <h1> The Wedding Pot </h1>
              <br />
              FullStack web application designed for wedding events. A easy to
              use platform for wedding planners to plan their event and connect
              with vendors that they could potentially hire!
              <br/>
              <button className="site-button"> <a href="https://github.com/awebb8/project-2" target="blank"> GitHub Repo  </a>  </button>
              <button className="site-button"> <a href="https://still-plains-42987.herokuapp.com/" target="blank"> Deployed Site </a>  </button>
            </div>
            <div className="col-md-8">
              <img
                className="verdant"
                src="https://github.com/Longhuynh741/project-2/blob/main/images/Home%20Page.png?raw=true"
                alt="project2"
              />
            </div>
          </div>
          <div className="row" data-aos="fade-left">
            <div className="col-md-8">
              <img
                className="verdant"
                src="https://github.com/Napica/Toned-Tribe/raw/master/asset/images/HomePage2.png"
                alt="project3"
              />
            </div>
            <div className="col-md-4">
              <h1> Toned Tribe </h1>
              <br />
              API-based web application designed for users to search and locate
              gyms and marketplaces in their desired area.
              <br/>
              <button className="site-button"> <a href="https://github.com/Napica/Toned-Tribe" target="blank"> GitHub Repo  </a>  </button>
              <button className="site-button"> <a href="https://longhuynh741.github.io/Project-1/" target="blank"> Deployed Site </a>  </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
