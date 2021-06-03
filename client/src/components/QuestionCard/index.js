import {FaListUl} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./QuestionCard.css";
import { UserContext } from "../../utils/UserContext";
import React, { useContext, useRef, useState, useEffect } from 'react';

// This component is for displaying the quizzes and allowing the user to take them. Still needs quite a bit of logic to it.
// This component is currently only used by the Quiz.js page. 
const QuestionCard = (props) => {
  // All of our needed states for this page
  // This state solely allows us to access the current user for quizStats
  const [user, dispatch] = useContext(UserContext);
  // This state deals with the current question being displayed.
  const [currentQuestion, setCurrentQuestion] = useState();
  // Deals with getting the users' answer for every question
  const [answer, setAnswer] = useState();
  const handleAnswerChange = e => {
    setAnswer(e.target.value);
    
  }

   // This just allows for easier access to questions when writing logic for this code
   const questions = props.quiz.questions;
   

  // This handles restarting the quiz when the page is first loaded.
  useEffect(() => {
    startQuiz();
  }, []);


  function startQuiz() {
    setCurrentQuestion(0);
  
  }

  function submitQuestion(answer) {
    setCurrentQuestion(currentQuestion + 1);
    console.log(answer);
  }

  
  return (
<div> 
  <div className="quiz-container">
    
        <div className="card">
            <div className="card-title"><h1>{props.quiz.title}</h1>
            <h2>by: {props.quiz.author}</h2>
            {/* First map to get all of the questions out of the props */}
            {/* Without the ternery on the below line, the site breaks due to react trying to */}
            {/* render the page before getting the data back from the API call */}
            <div>{questions? questions[currentQuestion].title : "loading your data"}</div>
            <form
            // Handles the question submission and moves to the next question.
            onSubmit={(e) => {
              
              e.preventDefault();
              submitQuestion(answer);

          }}>
              <div className="form-group">
                {/* Maps over the current question's choices and turns them all into radio buttons with corresponding values and names. */}
               {questions? questions[currentQuestion].choices.map(choice =>(
                <div>
                 <input type="radio" id={choice} name={"quizQuestion"} value={choice} onClick={handleAnswerChange} required />
                 <label for={choice}>{choice}</label>
                </div>
               )) : "loading your data"}
               <br></br>
               <button className="btn btn btn-primary" type='submit'>Submit</button>
              </div>
            </form>
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