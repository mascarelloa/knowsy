import React from "react";
import "./style.css"
import { BsListCheck } from "react-icons/bs"

const Slideshow = () => {
  return (
    <div>
      <div id="slideshow">
        <div class="slide-wrapper">
          <div class="slide">
            <h1 class="slide-content">Quiz of the day!</h1>
            <button><BsListCheck /> Take</button>
          </div>
          <div class="slide">
            <h1 class="slide-content" id="dark">ciao</h1>
          </div>
          <div class="slide">
            <h1 class="slide-content" >hola</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
