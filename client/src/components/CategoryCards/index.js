import React from "react";
import "./style.css"

const CategoryCards = () => {
  return (
    <div>
        <div className="cat-wrapper">
            <h2>Get Started!</h2>
        <div className="cat-container">
            <div className="cat-card">
                <img src="https://tinyurl.com/33fb2ewa" id="math"/>
                <h1>Math</h1>
            </div>


            <div className="cat-card">
                <img src="https://tinyurl.com/2p6y5w72" id="entertainment"/>
                <h1>Arts</h1>
            </div>

            <div className="cat-card">
                <img src="https://tinyurl.com/7tmazuvt" id="geography"/>
                <h1>Geography</h1>
            </div>

            <div className="cat-card">
                <img src="https://tinyurl.com/9f43hbwa" id="history"/>
                <h1>History</h1>
            </div>

            <div className="cat-card">
                <img src="https://tinyurl.com/3pwvjtbp" id="science"/>
                <h1>Science</h1>
            </div>

            <div className="cat-card">
                <img src="https://tinyurl.com/kys77p4e" id="sports"/>
                <h1>Sports</h1>
            </div>
        </div>
    </div>
    </div>
  );
};

export default CategoryCards;
