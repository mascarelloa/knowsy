import React, { useContext, useRef, useState } from 'react';
import { UserContext } from "../../utils/UserContext";


const NewQuizForm = () => {

    // Allows us to access the current user.
    const [user, dispatch] = useContext(UserContext);

    const formRef = useRef();
    const titleRef = useRef();
    const tagsRef = useRef();
    const descRef = useRef();

    // Uses state to save a boolean value for public/private.
    const [visibility, setPublic] = useState(true);
    const handleVisChange = e => {
        setPublic(e.target.value);
    }

    // Uses state to save a boolean value for everyone/adult.
    const [ageRestrict, setAgeRestrict] = useState(false);
    const handleAgeChange = e => {
        setAgeRestrict(e.target.value);
    }

    // The base for our array of questions.
    const blankQuestion = {
        question: "",
        choices: ["", "", "", ""],
        answer: ""
    }

    // Uses state and initially contains one blank question to start.
    const [questions, setQuestions] = useState([
        { ...blankQuestion }
    ]);

    // Adds another blank question that the user can fill out.
    const handleAddQuestion = () => {
        setQuestions([...questions, { ...blankQuestion }]);
        console.log(questions);
    }

    // Allows the radio buttons next to each choice to be clicked and then populates the answer input with the same value.
    const selectChoice = e => {
        const copiedAnswer = document.getElementById(e.target.value).value;
        document.getElementById(e.target.name).value = document.getElementById(e.target.value).value;
        const updatedQuestions = [...questions];
        updatedQuestions[e.target.dataset.idx].answer = copiedAnswer;
        setQuestions(updatedQuestions);

    }

    // Will set the state of "questions" every time the user changes a character inside one of the inputs.
    const handleInputChange = e => {
        const updatedQuestions = [...questions];
        if (e.target.className === "choices") {
            updatedQuestions[e.target.dataset.idx].choices[e.target.id] = e.target.value;
            setQuestions(updatedQuestions);
        } else {
            // [index] and [name]
            updatedQuestions[e.target.dataset.idx][e.target.className] = e.target.value;
            setQuestions(updatedQuestions);
        }
    }

    // Allows a user to remove the clicked question from the quiz.
    const removeQuestion = e => {
        const questionName = e.target.name;
        console.log(questionName);
        const updatedQuestions = [...questions];
        setQuestions(updatedQuestions.filter(question => question.question !== questionName));
    }

    // API call to post the new quiz to the database.
    const create = (data) => {
        fetch('api/quiz/new', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log('Error creating quiz.', err);
            });
    }

    return (
        <form
            ref={formRef}
            onSubmit={(e) => {
                e.preventDefault();
                if (titleRef.current.value == "") {
                    alert("Your quiz must have a title!");
                } else {
                    return create({
                        title: titleRef.current.value,
                        author: user.username,
                        description: descRef.current.value,
                        questions: questions,
                        version: "1",
                        public: visibility,
                        adult: ageRestrict,
                        tags: tagsRef.current.value,
                    });
                }

            }}
        >
            <div className="form-group">
                {/* Title of Quiz */}
                <input className="form-control" ref={titleRef} type='text' name="title" placeholder="Enter Title" /><br />
                {/* Description of Quiz */}
                <label for="description">Description:</label>
                <textarea id="description" ref={descRef} name="description" rows="4" cols="50" placeholder="This is my quiz. There are many like it, but this one is mine!">
                </textarea><br />
                {/* Tag Selector */}
                <select ref={tagsRef}>
                    <option value="none">Select Category:</option>
                    <option value="History">History</option>
                    <option value="Math">Math</option>
                    <option value="Science">Science</option>
                    <option value="Geography">Geography</option>
                    <option value="Sports">Sports</option>
                </select>
                <br></br>
                {/* Public/Private Radio Buttons */}
                <input id="public" type="radio" name="type" value="true" defaultChecked onClick={handleVisChange} />
                <label htmlFor="public">Public</label><br />
                <input id="private" type="radio" name="type" value="false" onClick={handleVisChange} />
                <label htmlFor="private">Private</label><br />
                {/* Adult/Everyone Radio Buttons */}
                <input id="everyone" type="radio" name="age" value="false" defaultChecked onClick={handleAgeChange} />
                <label htmlFor="everyone">Everyone</label><br />
                <input id="adult" type="radio" name="age" value="true" onClick={handleAgeChange} />
                <label htmlFor="adult">Adults Over 18</label><br />
                {/* Add Question Button - is input to prevent form submission on click */}
                <input type="button" onClick={handleAddQuestion} value="Add Question" />
                {/* Question Section */}
                {
                    questions.map((quest, index) => {
                        let question = `question-${index}`;
                        let choice = `choice-${index}`;
                        let answer = `answer-${index}`;

                        return (
                            <div key={index}>
                                {/* Question */}
                                <button name={questions[index].question} onClick={removeQuestion}>Remove</button>
                                <label htmlFor={question}>{`Question ${index + 1}`}</label>
                                <input className="question" type="text" name="question" data-idx={index} placeholder="Question Here" value={questions[index].question} onChange={handleInputChange} />
                                <br />

                                {
                                    quest.choices.map((cho, idx) => {
                                        return (
                                            <div key={idx}>
                                                {/* Choices */}
                                                <label>{`Choice ${idx + 1}: `}</label>
                                                <input id={idx} className="choices" type="text" placeholder="Choice Here" data-idx={index} value={questions[index].choices[idx]} onChange={handleInputChange} />
                                                <input id={choice + 'abox'} type="radio" name={answer} data-idx={index} value={idx} onClick={selectChoice} />
                                                <br />
                                            </div>
                                        )
                                    })
                                }
                                {/* Answer */}
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