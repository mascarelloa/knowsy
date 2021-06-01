import React from "react";
import "./CategoryCards.css"
import math from "../../3.png"
import arts from "../../4.png"
import geography from "../../2.png"
import history from "../../5.png"
import science from "../../1.png"
import sports from "../../6.png"


const CategoryCards = () => {
  return (
    <div>
        <div className="cat-wrapper">
            <h2>Get Started!</h2>
        <div className="cat-container">
            <div className="cat-card">
                <img src={math} id="math"/>
                <h1>Math</h1>
            </div>


            <div className="cat-card">
                <img src={arts} id="entertainment"/>
                <h1>Arts</h1>
            </div>

            <div className="cat-card">
                <img src={geography} id="geography"/>
                <h1>Geography</h1>
            </div>

            <div className="cat-card">
                <img src={history} id="history"/>
                <h1>History</h1>
            </div>

            <div className="cat-card">
                <img src={science} id="science"/>
                <h1>Science</h1>
            </div>

            <div className="cat-card">
                <img src={sports} id="sports"/>
                <h1>Sports</h1>
            </div>
        </div>
    </div>
    </div>
  );
};

export default CategoryCards;
