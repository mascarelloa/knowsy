import React, { useEffect, useState } from "react";
import QuizCard from "../components/QuizCard";
import API from "../utils/API";
import { useParams } from "react-router-dom";

const Search = () => {
  const [quizzes, setQuizzes] = useState([]);

  const {title} = useParams();
  console.log(title);
  useEffect(() => {
    API.searchQuizzesPublic(title)
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }, []);

  // function loadQuizzes(title) {
  //   API.searchQuizzesPublic(title)
  //     .then(console.log(title))
  //     .then(console.log("API call fired"))
  //     .then((res) => setQuizzes(res.data))
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }
  

  return (
    <div>
      <QuizCard quizzes={quizzes} />
    </div>
  );
};

export default Search;
