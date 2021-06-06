import React from "react";
import UserPage from "../components/UserPage";
import CategoryCards from "../components/CategoryCards"
import QuizOfTheDay from "../components/QuizOfTheDay"

const Profile = () => {

  return (
    <div className="main-body">
      <UserPage />
      <CategoryCards />
    </div>
  );

};

export default Profile;