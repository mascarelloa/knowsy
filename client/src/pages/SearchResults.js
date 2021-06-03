import React from "react";
import QuizCard from "../components/QuizCard";

const SearchResults = () => {
  const [quizzes, setQuizzes] = useState([]);
  useEffect(() => {
    loadQuizzes();
  }, []);

  function loadQuizzes() {
    API.searchQuizzesPublic()
      .then((res) => setQuizzes(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
        <h1></h1>
      <QuizCard quizzez={quizzes} />
    </div>
  );
};

export default SearchResults;
