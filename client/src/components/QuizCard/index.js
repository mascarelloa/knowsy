import React from "react";
import "./QuizCard.css";
import {FaListUl} from "react-icons/fa"
import { Link } from "react-router-dom";




const QuizCard = (props) => {

  return (
<div> 
  <div className="quiz-card-container">
    {/* Maps over all of the quizzes that are sent to it from either the Categories.js page */}
    {/* or the AllQuizzes.js page */}
    {props.quizzes.map(quiz => (
     
        <div className="quiz-card">
            <div className="quiz-card-title"><h1>{quiz.title}</h1>
            <h2>by: {quiz.author}</h2></div>
            <div className="quiz-card-body">
              {/* Maps over all of the quiz's tags to display them dynamically. */}
              <div className="quiz-card-tags">{quiz.tags.map(tag => (<p>#{tag}</p>))}</div>
             
            </div>
            {/* This link passes the ID params to the Quiz.js page to render the specific quiz mapped */}
            <Link to={"/quiz/" + quiz._id}>
              <button id="quiz-card-btn">
             Take Quiz
          </button>
          </Link>
          </div>
  
    ))}
    </div>
    </div>
  );

  
};

export default QuizCard;
