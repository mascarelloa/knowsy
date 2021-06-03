import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
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
        // ToDo: Must create route that searches the quizzes based on "TakenBy"
    }

    useEffect(() => {
        getUserQuizzes(username);
    }, [username])

    return (
        <div>
            <h1>Welcome {user.username}!</h1>
        </div>
    )

}

export default UserPage;