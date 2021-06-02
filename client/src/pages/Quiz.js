import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";
import "../components/QuestionCard/QuestionCard.css";
import QuestionCard from "../components/QuestionCard";


const TakeQuiz = () => {
  const [quiz, setQuiz] = useState([]);


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
