import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import UserResults from "../UserResults";
import API from "../../utils/API";
import './UserPage.css'
import linebreak from "../../bar.png"

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
        <div className="main">
            <center><h5>Welcome {user.username}!</h5></center>

            <div className="user-stats">
            <div className="myquiz-container">
            <center><h1>My Quizzes</h1></center>
                
                <div className="myquiz-card-container">
                    {userQuizzes.map(quiz => (<div className="myquiz-card">
                        <div>
                            <h4>{quiz.title}</h4>
                            <h2>Quiz Activity:</h2>
                            <div className="stats">
            
                                {/* Displays stats of each person who took quiz */}
                                {
                                    quiz.quizStats.map((stat, index) => {
                                        return (
                                            <>
                                            <div id="stats" key={index}>
                                                <p><b>User:</b> {stat.takenBy}</p>
                                                <p><b>Score:</b> {Math.round(stat.results)}</p>
                                                <p><b>Date:</b> {stat.dateTaken.slice(0,10)}</p>
                                            </div>
                                            <br/>
                                            </>
                                        )
                                    })
                                }
                                </div>
                                <center><button id={quiz._id} onClick={removeQuiz}>Delete</button>
                                <button name={quiz._id} onClick={clearStats}>Clear</button></center>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


            
            <UserResults quizzes={userResults} />
           

            </div>
        </div>
    )

}

export default UserPage;