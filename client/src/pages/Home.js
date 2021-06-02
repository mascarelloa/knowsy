import React from "react";
import CategoryCards from "../components/CategoryCards";
import QuizOfTheDay from "../components/QuizOfTheDay";
import Slider from "../components/Slider";


const Home = () => {
  return (
    <div>
      <Slider />
      <QuizOfTheDay />
      <CategoryCards />
      
    </div>
  );
};

export default Home;
