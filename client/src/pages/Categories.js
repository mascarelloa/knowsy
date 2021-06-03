import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import "../components/QuizCard/QuizCard.css";
import API from "../utils/API";

const Categories = () => {
  const [quizzes, setQuizzes] = useState([]);
  
  const {tags} = useParams()
  console.log(tags);
  useEffect(() => {
    loadQuizzes(tags);
  }, [])

  function loadQuizzes(tags) {
    API.filterQuizzesPublic(tags)
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
