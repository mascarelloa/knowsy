import React from "react";
import "./QuizOfTheDay.css";
import { FaArrowRight } from "react-icons/fa";

const QuizOfTheDay = () => {
  return (
    <div>
      <div className="qotd-wrapper">
        <div className="qotd-container">
          <div className="qotd-content">
          <h1>Randomizer!</h1>
            <h2>Try a random quiz...</h2>
          <button>
            Take Quiz <FaArrowRight id="take-qotd" />
          </button>
        </div>
        </div>

        <div className="qotd-container">
        <div className="qotd-content">
          <h1>Quiz Bank!</h1>
            <h2>Browse all quizzes...</h2>
          <button>
             View All <FaArrowRight id="take-qotd" />
          </button>
        </div>
        </div>

        <div className="qotd-container">
        <div className="qotd-content">
          <h1>Create!</h1>
            <h2>Make your own quiz...</h2>
          <button>
             Quiz Maker <FaArrowRight id="take-qotd" />
          </button>
        </div>
        </div>



      </div>
    </div>
  );
};

export default QuizOfTheDay;
