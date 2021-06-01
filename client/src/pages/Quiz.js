import React, { useState, useEffect } from "react";
import API from "../utils/API";
import QuestionCard from "../components/QuestionCard";
import { Link, useParams } from "react-router-dom";


const TakeQuiz = (props) => {
  const [quiz, setQuiz] = useState([]);


  const {id} = useParams()
    useEffect(() => {
      API.getQuiz(id)
        .then(res => setQuiz(res.data))
        .catch(err => console.log(err));
    }, [])

  

  return (
    <div>
      <QuestionCard quiz={quiz} />
    </div>
  );
};

export default TakeQuiz;
