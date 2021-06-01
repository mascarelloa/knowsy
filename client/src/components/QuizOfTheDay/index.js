import React from "react";
import "./QuizOfTheDay.css";
import { FaListUl } from "react-icons/fa";

const QuizOfTheDay = () => {
  return (
    <div>
      <div className="qotd-wrapper">
        <div className="qotd-container">
          <h1>Quiz of the day!</h1>
            <h2>Quiz Title Here</h2>
          <button>
            <FaListUl id="take-qotd" /> Take Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizOfTheDay;
