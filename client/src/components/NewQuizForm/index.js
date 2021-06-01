import React, { useContext, useRef, useState } from 'react';
import NewQuestionForm from '../NewQuestionForm';
import { UserContext } from "../../utils/UserContext";


const NewQuizForm = (onCreate) => {

    // Allows us to access the current user
    const [user, dispatch] = useContext(UserContext);

    const formRef = useRef();
    const titleRef = useRef();
    const tagsRef = useRef();

    // Uses state to save a boolean value for public/private
    const [visibility, setPublic] = useState(true);
    const handleVisChange = e => {
        setPublic(e.target.value);
        console.log(visibility);
    }

    const [questions, setQuestions] = useState([{
        question: '',
        choices: [],
        answer: ''
    }]);

    const addQuestion = e => {
        setQuestions(questions => [...questions, e])
        // console.log(questions);
    }



    return (
        <form
            ref={formRef}
            onSubmit={(e) => {
                e.preventDefault();
                // return onCreate({
                //     title: titleRef.current.value,
                //     author: user.username,
                //     tags: tagsRef.current.value,
                //     public: visibility
                // });
            }}
        >
            <div className="form-group">
                <input className="form-control" ref={titleRef} type='text' name="title" placeholder="Enter Title" /><br />
                <select ref={tagsRef}>
                    <option value="none">Select Category:</option>
                    <option value="History">History</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="Geography">Geography</option>
                    <option value="Sports">Sports</option>
                </select>
                <br></br>
                <input id="public" type="radio" name="type" value="true" defaultChecked onClick={handleVisChange} />
                <label htmlFor="public">Public</label><br />
                <input id="private" type="radio" name="type" value="false" onClick={handleVisChange} />
                <label htmlFor="private">Private</label><br />
                <div id="questionSection">
                    <button onClick={addQuestion}>Add Question</button>

                    {
                        questions.map((value, index) => {
                            let question = `question-${index}`;
                            let choice = questions[index].choices;
                            let answer = `answer-${index}`;
                            // console.log(questions);
                            // console.log(questions[0].choices);

                            return (
                                <div key={index}>
                                    <label htmlFor={question}>{`Question #${index + 1}`}</label>
                                    <input type="text" name={question} placeholder="Question Here" />

                                    {/* // ToDo: Find a solution to loop over choices. Once working, will convert to additional component. */}

                                    <div>
                                        <label>{`Choice #1`}</label>
                                        <input type="text" name={choice} placeholder="Choice Here" />

                                        <label>{`Choice #2`}</label>
                                        <input type="text" name={choice} placeholder="Choice Here" />

                                        <label>{`Choice #3`}</label>
                                        <input type="text" name={choice} placeholder="Choice Here" />

                                        <label>{`Choice #4`}</label>
                                        <input type="text" name={choice} placeholder="Choice Here" />
                                    </div>


                                    <label htmlFor={answer}>Answer</label>
                                    <input type="text" name={answer} placeholder="Answer Here" />
                                </div>
                            )
                        })
                    }

                </div>
                <button className="btn btn btn-primary" type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default NewQuizForm;