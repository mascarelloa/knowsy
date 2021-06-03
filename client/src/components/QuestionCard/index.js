import React from "react";
import {FaListUl} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./QuestionCard.css";

// This component is for displaying the quizzes and allowing the user to take them. Still needs quite a bit of logic to it.
// This component is currently only used by the Quiz.js page. 
const QuestionCard = (props) => {

  return (
<div> 
  <div className="quiz-container">
    
        <div className="card">
            <div className="card-title"><h1>{props.quiz.title}</h1>
            <h2>by: {props.quiz.author}</h2>
            {/* First map to get all of the questions out of the props */}
            {/* Without the ternery on the below line, the site breaks due to react trying to */}
            {/* render the page before getting the data back from the API call */}
            <div>{props.quiz.questions? props.quiz.questions.map(question => (
            <div>{question.title}
            {/* Second map to get all of the choices available to each of the questions */}
            <div>{question.choices.map(choice => (
              <p>{choice}</p>
            ))}</div>
            
            </div>
            

            // End of ternery started on line 16
            )): "loading your data"}</div>
            </div>
            
            <div className="card-body">
                {/* Links back to the home page. */}
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