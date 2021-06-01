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
        question: '',
        choices: [,,,,],
        answer: ''
    }

    const [questions, setQuestions] = useState([
        { ...blankQuestion }
    ]);

    const handleAddQuestion = () => {
        setQuestions([...questions, { ...blankQuestion }]);
        console.log(questions);
    }

    const selectChoice = e => {
        document.getElementById(e.target.name).value = document.getElementById(e.target.value).value;
    }

    const handleInputChange = e => {
        const updatedQuestions = [...questions];
        updatedQuestions[e.target.dataset.idx][e.target.className] = e.target.value;
        setQuestions(updatedQuestions);
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
                    questions.map((value, index) => {
                        let question = `question-${index}`;
                        let choice = `choice-${index}`;
                        let answer = `answer-${index}`;

                        return (
                            <div key={index} id={index}>
                                <label htmlFor={question}>{`Question #${index + 1}`}</label>
                                <input className="question" type="text" name="question" data-idx={index} placeholder="Question Here" value={questions[index].question} onChange={handleInputChange} />

                                {/* ToDo: Find a solution to get the choices into the state. Current code does not work (possibly the syntax of the value on line 92?) Once working, will convert to additional component. */}

                                <div>
                                    <label>Choice #1: </label>
                                    <input className="choices" type="text" placeholder="Choice Here" data-idx={index} value={questions[index].choices[0]} onChange={handleInputChange}/>
                                    <input id={choice + 'abox'} type="radio" name={answer} data-idx={index} value={`${choice}a`} onClick={selectChoice} />
                                    <br />

                                    <label>Choice #2: </label>
                                    <input className="choices" type="text" placeholder="Choice Here" data-idx={index} value={questions[index].choices[1]} />
                                    <input id={choice + 'bbox'} type="radio" name={answer} data-idx={index} value={`${choice}b`} onClick={selectChoice} />
                                    <br />

                                    <label>Choice #3: </label>
                                    <input className="choices" type="text" placeholder="Choice Here" data-idx={index} value={questions[index].choices[2]} />
                                    <input id={choice + 'cbox'} type="radio" name={answer} data-idx={index} value={`${choice}c`} onClick={selectChoice} />
                                    <br />

                                    <label>Choice #4: </label>
                                    <input className="choices" type="text" placeholder="Choice Here" data-idx={index} value={questions[index].choices[3]} />
                                    <input id={choice + 'dbox'} type="radio" name={answer} data-idx={index} value={`${choice}d`} onClick={selectChoice} />

                                </div>


                                <label htmlFor={answer}>Answer: </label>
                                <input className="answer" type="text" name={answer} data-idx={index} value={questions[index].answer} onChange={handleInputChange} />
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