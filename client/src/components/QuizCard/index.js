import React from "react";
import "./style.css"



const QuizCards = (props) => {
  return (
    <div>
    {props.quizzes.map(quiz => (
        
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <div className="card-title"><h1>{props.quizzes.title}</h1></div>
            <div className="card-body">
              <div className="card-tags"></div>
              <button>
            <FaListUl id="take-qotd" /> Take Quiz
          </button>
            </div>
          </div>
        </div>
      </div>
    
      ))}
      </div>
  );
};

export default CategoryCards;
