import React, { useState, useEffect } from "react";
import QuizCard from "../components/QuizCard";
import "../components/QuizCard/QuizCard.css";
import API from "../utils/API";

const Categories = (props) => {
  const [quizzes, setQuizzes] = useState([]);
  
  useEffect(() => {
    
    loadQuizzes(props.location.state);

  }, []);
  console.log(props.location.state);

  function loadQuizzes(data) {
    console.log(data);
    API.filterQuizzesPublic(data)
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }
console.log(quizzes)
  return (
    <div>
      <QuizCard quizzes={quizzes} />
    </div>
  );
};

export default Categories;
