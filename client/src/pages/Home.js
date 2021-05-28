import React from "react";
import CategoryCards from "../components/CategoryCards";
import QuizOfTheDay from "../components/QuizOfTheDay";


const Home = () => {
  return (
    <div>
      <QuizOfTheDay />
      <CategoryCards />
    </div>
  );
};

export default Home;
