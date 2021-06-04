import React from "react";
import { Link } from "react-router-dom";

const UserQuizzes = (props) => {

    return (
        <div>
            <h1>My Quizzes</h1>
            <ul>
                {props.quizzes.map(quiz => (
                    <li>
                        <h1>{quiz.title}</h1>
                        <Link to={"/quiz/" + quiz._id}>
                            <button>Take Quiz</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );


};

export default UserQuizzes;
