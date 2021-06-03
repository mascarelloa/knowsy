import React from "react";
import {FaListUl} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./QuestionCard.css";


const QuestionCard = (props) => {

  return (
<div> 
  <div className="quiz-container">
    
        <div className="card">
            <div className="card-title"><h1>{props.quiz.title}</h1>
            <h2>by: {props.quiz.author}</h2>
            <div>{props.quiz.questions? props.quiz.questions.map(question => (
            <div>{question.title}
            <div>{question.choices.map(choice => (
              <p>{choice}</p>
            ))}</div>
            
            </div>
            

            // End of ternery started on line 16
            )): "loading your data"}</div>
            </div>
            
            <div className="card-body">
                
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