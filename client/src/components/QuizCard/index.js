import React from "react";
import "./QuizCard.css";
import {FaListUl} from "react-icons/fa"




const QuizCard = (props) => {

  return (
<div> <div className="card-container">
    {props.quizzes.map(quiz => (
     
        <div className="card">
            <div className="card-title"><h1>{quiz.title}</h1>
            <h2>by: {quiz.author}</h2></div>
            <div className="card-body">
              <div className="card-tags">{quiz.tags.map(tag => (<p>#{tag}</p>))}</div>
              <button>
            <FaListUl id="take-qotd" /> Take Quiz
          </button>
            </div>
          </div>
    

    ))}
    </div>
    </div>
  );

  
};

export default QuizCard;
