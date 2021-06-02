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
    }

    const blankQuestion = {
        question: "",
        choices: ["", "", "", ""],
        answer: ""
    }

    const [questions, setQuestions] = useState([
        { ...blankQuestion }
    ]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { ...blankQuestion }]);
        console.log(questions);
    }

    const selectChoice = e => {
        const copiedAnswer = document.getElementById(e.target.value).value;
        document.getElementById(e.target.name).value = document.getElementById(e.target.value).value;
        const updatedQuestions = [...questions];
        updatedQuestions[e.target.dataset.idx].answer = copiedAnswer;
        setQuestions(updatedQuestions);

    }

    const handleInputChange = e => {
        const updatedQuestions = [...questions];
        if (e.target.className === "choices") {
            updatedQuestions[e.target.dataset.idx].choices[e.target.id] = e.target.value;
            // console.log(updatedQuestions);
            setQuestions(updatedQuestions);
        } else {
            // [index] and [name]
            updatedQuestions[e.target.dataset.idx][e.target.className] = e.target.value;
            // console.log(updatedQuestions);
            setQuestions(updatedQuestions);
        }
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
                <button onClick={handleAddQuestion}>Add Question</button>

                {
                    questions.map((quest, index) => {
                        let question = `question-${index}`;
                        let choice = `choice-${index}`;
                        let answer = `answer-${index}`;

                        return (
                            <div key={index}>
                                <label htmlFor={question}>{`Question ${index + 1}`}</label>
                                <input className="question" type="text" name="question" data-idx={index} placeholder="Question Here" value={questions[index].question} onChange={handleInputChange} />
                                <br />

                                {
                                    quest.choices.map((cho, idx) => {
                                        return (
                                            <div key={idx}>
                                                <label>{`Choice ${idx + 1}: `}</label>
                                                <input id={idx} className="choices" type="text" placeholder="Choice Here" data-idx={index} value={questions[index].choices[idx]} onChange={handleInputChange} />
                                                <input id={choice + 'abox'} type="radio" name={answer} data-idx={index} value={idx} onClick={selectChoice} />
                                                <br />
                                            </div>
                                        )
                                    })
                                }

                                <label htmlFor={answer}>Answer: </label>
                                <input id={answer} className="answer" type="text" name={answer} data-idx={index} value={questions[index].answer} onChange={handleInputChange} />
                            </div>
                        )
                    })
                }

                <button className="btn btn btn-primary" type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default NewQuizForm;