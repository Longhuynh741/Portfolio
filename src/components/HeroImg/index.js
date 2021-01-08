import React from "react";
require("./script.css");


const HeroImg = () => {

 const handleScrollEvent = () => {
    window.scrollTo({
      top:1400,
      behavior: 'smooth'
    })
}

  return (
    <div className="heroSection">
      <div className="jumbotron hero">
        <h1 className="heroText">
          Hello my name is <a id="nameText">Long Huynh. </a> <br />
            Nice to meet you!
          </h1>
        <div className="button" onClick={ handleScrollEvent}>  <h3>About Me </h3> </div>
      </div>
    </div>
  );
}
export default HeroImg