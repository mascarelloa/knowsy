import {FaListUl} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
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
  // Handles keeping track of the # of questions the user has gotten correct.
  const [score, setScore] = useState();

  const {id} = useParams()
  // This just allows for easier access to questions when writing logic for this code
  const questions = props.quiz.questions;
  //sets the date for use in the put method.
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
   

  // This handles restarting the quiz when the page is first loaded.
  useEffect(() => {
    startQuiz();
  }, []);

// Resets the quiz when a user loads up the page
  function startQuiz() {
    setCurrentQuestion(0);
    setScore(0);
  
  }

  // This function fires when the user submits an answer. It handles the tracking of score, and updating the current question on the page
  function submitQuestion(answer) {
    
    // This checks if the user's answer was correct and increases score, then moves to the next question if there if one. 
    if (answer == questions[currentQuestion].answer) {
      setScore(score + 1);
      setQuestion();
    
    } else {
      // Figure out how to store which questions they got wrong.
      setQuestion();
    }

    
  }

  // Checks to see if there are any additional questions in the array and renders them.
  // invoked in submitQuestion. 
  function setQuestion() {
     // Then we check to see if there are any more questions to display, and if not end the quiz.
     if (currentQuestion != questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      
    } else {

      // This should only be used to pass all of the final results to the quiz
      // This function might need to be called in the conditional rendering since that is where we had to define the final score
      // and im not sure that this would have access to that variable. 
     
    }

  }

  // Updates the quiz db with stats.
  function endQuiz(data) { 
    console.log("invoked");
    console.log(data);
    console.log(id);

    API.updateQuiz(id, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  
   }

// This If statement makes sure the page has props before trying to render anything. The whole app breaks if you remove it. 
if (questions) {

  // This is where we determine final score of the test. It has to be declared in here because otherwise the page doesn't believe there is such thing as questions.length
  let finalScore = score / questions.length

  // This if statement is the ACTUAL conditional render. This will change based on whether or not there are questions left in the array to render.
  if (currentQuestion != questions.length) { 
    
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

  // This else is in reference to the IF statement that deals with the conditional rendering
  } else {
    console.log(score);
    endQuiz(
      {quizStats: [{
         takenBy: user.username,
         results: score / questions.length * 100,
         dateTaken: date
        }]
      });
    return(
    <div>{finalScore? finalScore * 100 : "loading your score"}</div>
   )

//THIS else statement is in reference to the IF statement that ensure that react has the props before trying to do anything else. 
}} else{
  return <div>Loading your data</div>
}
  
};

export default QuestionCard;