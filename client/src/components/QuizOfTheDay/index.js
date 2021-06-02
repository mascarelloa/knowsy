import React from "react";
import "./QuizOfTheDay.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const QuizOfTheDay = () => {
  return (
    <div>
      <div className="qotd-wrapper">
        <div className="qotd-container">
          <div className="qotd-content">
          <h1>Randomizer!</h1>
            <h2>Try a random quiz...</h2>
          <Link to=""><button>
            Take Quiz <FaArrowRight id="take-qotd" />
          </button></Link>
        </div>
        </div>

        <div className="qotd-container">
        <div className="qotd-content">
          <h1>Quiz Bank!</h1>
            <h2>Browse all quizzes...</h2>
          <Link to="/allquizzes"><button>
             View All <FaArrowRight id="take-qotd" />
          </button></Link>
        </div>
        </div>

        <div className="qotd-container">
        <div className="qotd-content">
          <h1>Create!</h1>
            <h2>Make your own quiz...</h2>
          <Link to="/create"><button>
             Quiz Maker <FaArrowRight id="take-qotd" />
          </button></Link>
        </div>
        </div>



      </div>
    </div>
  );
};

export default QuizOfTheDay;
