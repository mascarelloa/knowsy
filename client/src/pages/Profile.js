import React from "react";
import UserPage from "../components/UserPage";
import CategoryCards from "../components/CategoryCards"
import QuizOfTheDay from "../components/QuizOfTheDay"
import {Link} from "react-router-dom"

const Profile = () => {

  return (
    <div className="main-body">
      <UserPage />
    </div>
  );

};

export default Profile;