import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import UserQuizzes from "../UserQuizzes";
import UserResults from "../UserResults";
import API from "../../utils/API";

const UserPage = () => {

    const [user, dispatch] = useContext(UserContext);
    const [userQuizzes, setUserQuizzes] = useState([]);
    const [userResults, setUserResults] = useState([]);
    const { username } = useParams();


    const getUserQuizzes = (username) => {
        API.getUserQuiz(username)
            .then((res) => setUserQuizzes(res.data))
            .catch((err) => console.log(err));
    }

    const getUserResults = (username) => {
        API.getUserStats(username)
            .then((res) => setUserResults(res.data))
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getUserQuizzes(username);
        getUserResults(username);
    }, [username])

    return (
        <div>
            <h1>Welcome {user.username}!</h1>
            <UserQuizzes quizzes={userQuizzes} />
            <UserResults quizzes={userResults} />
        </div>
    )

}

export default UserPage;