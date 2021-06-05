import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
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

    const removeQuiz = (e) => {
        const updatedQuizzes = [...userQuizzes];
        API.deleteQuiz(e.target.id)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setUserQuizzes(updatedQuizzes.filter((quiz) => quiz._id !== e.target.id));
    }

    const clearStats = (e) => {
        let updatedQuiz = userQuizzes.filter((quiz) => quiz._id === e.target.name);
        // console.log(updatedQuiz);
        // console.log(updatedQuiz[0].quizStats);
        // console.log(userQuizzes);
        updatedQuiz[0].quizStats = [];
        console.log(updatedQuiz);
        API.updateQuiz(e.target.name, updatedQuiz[0])
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        // console.log(updatedQuizzes[0].quizStats);
        loadQuizzes();
    }

    function loadQuizzes() {
        getUserQuizzes(username);
        getUserResults(username);
    }

    useEffect(() => {
        loadQuizzes();
    }, [])

    return (
        <div>
            <h1>Welcome {user.username}!</h1>
            <div>
                <h1>My Quizzes</h1>
                <ul>
                    {userQuizzes.map(quiz => (
                        <li>
                            <h1>{quiz.title}</h1>
                            <p>{quiz.description}</p>
                            <button id={quiz._id} onClick={removeQuiz}>Delete</button>
                            <button name={quiz._id} onClick={clearStats}>Clear Stats</button>
                            <Link to={"/quiz/" + quiz._id}>
                                <button>Take Quiz</button>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <UserResults quizzes={userResults} />
        </div>
    )

}

export default UserPage;