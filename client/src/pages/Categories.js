import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import QuizCard from "../components/QuizCard";
import "../components/QuizCard/QuizCard.css";
import API from "../utils/API";

// This is currently an issue where switching between pages, i.e. categories/math, /science, ect
// doesn't fire a second API call and thus doesn't update the data or set the state.
// That will need to be fixed. Delete this once it's fixed.

const Categories = () => {
  const [quizzes, setQuizzes] = useState([]);
  
  // Tags is pulled off of the parameters in the URL and passed to the API call to filter
  // properly. This needs to be passed in when linking to this page or it breaks.
  const {tags} = useParams()
  useEffect(() => {
    loadQuizzes(tags);
  }, [tags])

  function loadQuizzes(tags) {
    API.filterQuizzesPublic(tags)
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }

  
console.log(quizzes)
  return (
    <div className="main-body">
        <h5>{tags}</h5>
      <QuizCard quizzes={quizzes} />
    </div>
  );
};

export default Categories;
