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

    // Retrieves all quizzes created by the current user.
    const getUserQuizzes = (username) => {
        API.getUserQuiz(username)
            .then((res) => setUserQuizzes(res.data))
            .catch((err) => console.log(err));
    }

    // Retrieves all scores the user has achieved on various quizzes.
    const getUserResults = (username) => {
        API.getUserStats(username)
            .then((res) => setUserResults(res.data))
            .catch((err) => console.log(err));
    }

    // Allows user to delete quiz they have created from the database.
    const removeQuiz = (e) => {
        const updatedQuizzes = [...userQuizzes];
        API.deleteQuiz(e.target.id)
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
        setUserQuizzes(updatedQuizzes.filter((quiz) => quiz._id !== e.target.id));
    }

    // Clears all stats in the selected quiz.
    const clearStats = (e) => {
        let updatedQuiz = userQuizzes.filter((quiz) => quiz._id === e.target.name);
        updatedQuiz[0].quizStats = [];
        console.log(updatedQuiz);
        API.updateQuiz(e.target.name, updatedQuiz[0])
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
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
                <div>
                    {userQuizzes.map(quiz => (
                        <div>
                            <h2>{quiz.title}</h2>
                            <div>
                                <p>{quiz.description}</p>
                                {/* Displays stats of each person who took quiz */}
                                {
                                    quiz.quizStats.map((stat, index) => {
                                        return (
                                            <div key={index}>
                                                <p>User: {stat.takenBy}</p>
                                                <p>Score: {stat.results}</p>
                                                <p>Date Taken: {stat.dateTaken}</p>
                                            </div>
                                        )
                                    })
                                }
                                <button id={quiz._id} onClick={removeQuiz}>Delete</button>
                                <button name={quiz._id} onClick={clearStats}>Clear Stats</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <UserResults quizzes={userResults} />
        </div>
    )

}

export default UserPage;