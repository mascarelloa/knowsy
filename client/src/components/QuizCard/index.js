import React from "react";
import "./style.css";
import {FaListUl} from "react-icons/fa"




const QuizCard = (props) => {

  return (
<div>
    {props.quizzes.map(quiz => (

<div>
      <div className="card-container">
        <div className="card">
          <div className="card-content">
            <div className="card-title"><h1>{quiz.title}</h1></div>
            <div className="card-body">
              <div className="card-tags">{quiz.tags.map(tag => (<p>{tag},  </p>))}</div>
              <button>
            <FaListUl id="take-qotd" /> Take Quiz
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    ))}
    
    </div>
  );

  
};

export default QuizCard;
