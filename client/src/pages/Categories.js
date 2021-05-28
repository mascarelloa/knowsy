import React, { useState, useEffect } from "react";
import QuizCard from "../components/QuizCard";
import "../components/QuizCard/style.css";
import API from "../utils/API";

const Categories = () => {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    loadQuizzes();
  }, []);

  function loadQuizzes() {
    API.filterQuizzesPublic()
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <QuizCard quizzes={quizzes} />
    </div>
  );
};

export default Categories;
