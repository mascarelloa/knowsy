import React, { useState, useEffect } from "react";
import QuizCard from "../components/QuizCard";
import "../components/QuizCard/QuizCard.css";
import API from "../utils/API";

const AllQuizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    loadQuizzes();
  }, []);

  function loadQuizzes() {
    API.getAll()
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="main-body">
      <h5>All quizzes</h5><br />
      <QuizCard quizzes={quizzes} />
    </div>
  );
};

export default AllQuizzes;
