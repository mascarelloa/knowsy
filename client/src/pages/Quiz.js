import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import "../components/QuestionCard/QuestionCard.css";
import QuestionCard from "../components/QuestionCard";


const TakeQuiz = () => {
  const [quiz, setQuiz] = useState([]);

// Pulls the ID of the quiz from the URL to pass to the function to ensure that 
// the specific quiz that is needed is fetched. 
// Again, this needs to be included in the link or it wont display any data.
  const {id} = useParams()
    useEffect(() => {
      API.getQuiz(id)
        .then(res => setQuiz(res.data))
        .catch(err => console.log(err));
    }, [])



  return (
    <QuestionCard quiz={quiz} />

  );
};

export default TakeQuiz;
