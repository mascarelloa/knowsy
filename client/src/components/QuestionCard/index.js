import React from "react";
import {FaListUl} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./QuestionCard.css";


const QuestionCard = (props) => {

  return (
<div> 
  <div className="card-container">
    
        <div className="card">
            <div className="card-title"><h1>{props.quiz.title}</h1>
            <h2>by: {props.quiz.author}</h2></div>
            <div className="card-body">
              <Link to={"/"}>
              <button>
            <FaListUl id="take-qotd" /> Return Home
          </button>
          </Link>
            </div>
          </div>
    </div>
    </div>
  );

  
};

export default QuestionCard;