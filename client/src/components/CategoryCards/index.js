import React from "react";
import "./CategoryCards.css"
import math from "../../3.png"
import arts from "../../4.png"
import geography from "../../2.png"
import history from "../../5.png"
import science from "../../1.png"
import sports from "../../6.png"
import categories from "../../categories.png"
import { Link } from "react-router-dom"


const CategoryCards = () => {
  return (
    <div>
        <div className="cat-wrapper">
            <img src={categories}/>
        <div className="cat-container">
            <div className="cat-card">
                {/* Currently all of the Links below are hardcoded based on the image name. */}
                {/* Not sure how to make them dynamic but they work for now. */}
                <Link to={"/categories/math"}>
                    <img src={math} id="math"/> </Link>
                <h1>Math</h1>
            </div>

            <div className="cat-card">
            <Link to={"/categories/science"}>
                <img src={science} id="science"/></Link>
                <h1>Science</h1>
            </div>


            <div className="cat-card">
            <Link to={"/categories/geography"}>
                <img src={geography} id="geography"/></Link>
                <h1>Geography</h1>
            </div>

            <div className="cat-card">
            <Link to={"/categories/history"}>
                <img src={history} id="history"/></Link>
                <h1>History</h1>
            </div>

            <div className="cat-card">
            <Link to={"/categories/entertainment"}>
                <img src={arts} id="entertainment"/></Link>
                <h1>Entertainment</h1>
            </div>

            <div className="cat-card">
            <Link to={"/categories/sports"}>
                <img src={sports} id="sports"/></Link>
                <h1>Sports</h1>
            </div>
        </div>
    </div>
    </div>
  );
};

export default CategoryCards;
