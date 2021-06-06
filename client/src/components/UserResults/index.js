import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import { linebreak } from "../../bar.png"
import '../UserPage/UserPage.css'

const UserResults = (props) => {

    const [user, dispatch] = useContext(UserContext);

    return (
        <>
            
            
            <div className="mytaken-container">
<center><h1>My Scores</h1></center>
            <div className="myquiz-card-container">
                {props.quizzes.map((quiz, index) => (
                    <div className="myquiz-card"key={index}>
                        <h4>{quiz.title}</h4>
                        <div className="scores">
                        {quiz.quizStats.map((stat, idx) => {
                            if (stat.takenBy === user.username) {
                                return (
                                    <>
                                    <div key={idx}>
                                        <p><b>Score:</b> {Math.round(stat.results)}</p>
                                        <p><b>Date:</b> {stat.dateTaken.slice(0,10)}</p>
                                    </div>
                                    <br />
                                    </>
                                )
                            }
                        })}</div>
                </div>))}
            </div>
        </div>

            </>
    );


};

export default UserResults;
