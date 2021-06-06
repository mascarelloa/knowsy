import React from "react";
import "./QuizCard.css";
import { FaListUl, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const QuizCard = (props) => {
  console.log(props)

  return (
<> 
  <div className="quiz-card-container">
    {/* Maps over all of the quizzes that are sent to it from either the Categories.js page */}
    {/* or the AllQuizzes.js page */}
    {props.quizzes? props.quizzes.map(quiz => (
     
        <div className="quiz-card">
            <h1>{quiz.title}</h1>
            <h2>by: {quiz.author}</h2>
           
              {/* Maps over all of the quiz's tags to display them dynamically. */}
              <div className="quiz-card-tags">{quiz.tags.map(tag => (<p>#{tag}</p>))}</div>
                
                 <br/>

              <div className="quiz-card-desc">
                <p>{quiz.description}</p>
              </div>

             
            
            {/* This link passes the ID params to the Quiz.js page to render the specific quiz mapped */}
            <Link to={"/quiz/" + quiz._id}>
              <button id="quiz-card-btn">
                Take Quiz <FaArrowRight id="take-quiz" />
              </button>
            </Link>
          </div>
  
    )): "loading your data"}
    </div>
    </>
  );
};

export default QuizCard;
