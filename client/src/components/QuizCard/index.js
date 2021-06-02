import React from "react";
import "./QuizCard.css";
import {FaListUl} from "react-icons/fa"
import { Link } from "react-router-dom";




const QuizCard = (props) => {

  return (
<div> 
  <div className="quiz-card-container">
    {props.quizzes.map(quiz => (
     
        <div className="quiz-card">
            <div className="quiz-card-title"><h1>{quiz.title}</h1>
            <h2>by: {quiz.author}</h2></div>
            <div className="quiz-card-body">
              <div className="quiz-card-tags">{quiz.tags.map(tag => (<p>#{tag}</p>))}</div>
             
            </div>
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
