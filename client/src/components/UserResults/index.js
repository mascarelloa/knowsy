import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";


const UserResults = (props) => {

    const [user, dispatch] = useContext(UserContext);

    return (
        <div>
            <h1>My Scores</h1>
            <ul>
                {props.quizzes.map((quiz, index) => (
                    <li key={index}>
                        <h1>{quiz.title}</h1>
                        {quiz.quizStats.map((stat, idx) => {
                            if (stat.takenBy === user.username) {
                                return (
                                    <div key={idx}>
                                        <p>Score: {stat.results}</p>
                                        <p>Date Taken: {stat.dateTaken}</p>
                                    </div>
                                )
                            }
                        })}
                    </li>
                ))}
            </ul>
        </div>
    );


};

export default UserResults;
