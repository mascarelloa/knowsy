import React from "react";
import "./style.css"
import { BsListCheck } from "react-icons/bs"

const Slideshow = () => {
  return (
    <div>
      <div id="slideshow">
        <div class="slide-wrapper">
          <div class="slide">
            <h1 class="slide-content">Test your knowledge!</h1>
          
          </div>
          <div class="slide">
            <h1 class="slide-content" id="dark">Quiz your friends!</h1>
          </div>
          <div class="slide">
            <h1 class="slide-content" >Create study guides!</h1>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
