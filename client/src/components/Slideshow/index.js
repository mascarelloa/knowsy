import React from "react";
import "./style.css"
import { BsListCheck } from "react-icons/bs"

const Slideshow = () => {
  return (
    <div>
      <div id="slideshow">
        <div className="slide-wrapper">
          <div className="slide">
            <h1 className="slide-content">Quiz of the day!</h1>
            <button><BsListCheck /> Take</button>
          </div>
          <div className="slide">
            <h1 className="slide-content" id="dark">ciao</h1>
          </div>
          <div className="slide">
            <h1 className="slide-content" >hola</h1>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
