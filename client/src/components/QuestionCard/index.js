import React from "react";
import {FaListUl} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./QuestionCard.css";


const QuestionCard = (props) => {

  return (
<div> 
  <div className="quiz-container">
    
        <div className="quiz">
            <div className="quiz-title"><h1>{props.quiz.title}</h1>
            <h2>by: {props.quiz.author}</h2></div>
            <div className="quiz-body">
              <Link to={"/"}>
              <button>
            Back
          </button>
          </Link>
            </div>
          </div>
    </div>
    </div>
  );

  
};

export default QuestionCard;