import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../utils/UserContext";
import "./NewQuizForm.css";
import { TiDelete } from "react-icons/ti";

const NewQuizForm = () => {
  // Allows us to access the current user.
  const [user, dispatch] = useContext(UserContext);

  const formRef = useRef();
  const titleRef = useRef();
  const tagsRef = useRef();
  const descRef = useRef();

  // Uses state to save a boolean value for public/private.
  const [visibility, setPublic] = useState(true);
  const handleVisChange = (e) => {
    setPublic(e.target.value);
  };

  // Uses state to save a boolean value for everyone/adult.
  const [ageRestrict, setAgeRestrict] = useState(false);
  const handleAgeChange = (e) => {
    setAgeRestrict(e.target.value);
  };

  // The base for our array of questions.
  const blankQuestion = {
    question: "",
    choices: ["", "", "", ""],
    answer: "",
  };

  // Uses state and initially contains one blank question to start.
  const [questions, setQuestions] = useState([{ ...blankQuestion }]);

  // Adds another blank question that the user can fill out.
  const handleAddQuestion = () => {
    setQuestions([...questions, { ...blankQuestion }]);
    console.log(questions);
  };

  // Allows the radio buttons next to each choice to be clicked and then populates the answer input with the same value.
  const selectChoice = (e) => {
    const copiedAnswer = document.getElementById(e.target.value).value;
    document.getElementById(e.target.name).value = document.getElementById(
      e.target.value
    ).value;
    const updatedQuestions = [...questions];
    updatedQuestions[e.target.dataset.idx].answer = copiedAnswer;
    setQuestions(updatedQuestions);
  };

  // Will set the state of "questions" every time the user changes a character inside one of the inputs.
  const handleInputChange = (e) => {
    const updatedQuestions = [...questions];
    if (e.target.className === "choices") {
      updatedQuestions[e.target.dataset.idx].choices[e.target.id] =
        e.target.value;
      setQuestions(updatedQuestions);
    } else {
      // [index] and [name]
      updatedQuestions[e.target.dataset.idx][e.target.className] =
        e.target.value;
      setQuestions(updatedQuestions);
    }
  };

  // Allows a user to remove the clicked question from the quiz.
  const removeQuestion = (e) => {
    console.log("clicked")
    const questionName = e.target.name;
    console.log(questionName);
    const updatedQuestions = [...questions];
    setQuestions(
      updatedQuestions.filter((question) => question.question !== questionName)
    );
  };

  // API call to post the new quiz to the database.
  const create = (data) => {
    fetch("api/quiz/new", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("Error creating quiz.", err);
      });
  };



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
      <div className="quizmaker-container">
        {/* Title of Quiz */}
        <div className="quiz-info">
        <h4>Quiz Title:</h4>
        <input
          className="new-quiz-title"
          ref={titleRef}
          type="text"
          name="title"
          placeholder="Enter your quiz's title."
        />
        <br />
        {/* Description of Quiz */}
        <h4>Description:</h4>
        <textarea
          id="description"
          ref={descRef}
          name="description"
          rows="4"
          cols="50"
          placeholder="Enter your quiz's description."
        ></textarea>
        <br />
        {/* Tag Selector */}
        <h4>Category:</h4>
       
        <select ref={tagsRef}>
          <option value="none">Select Category:</option>
          <option value="Entertainment">Entertainment</option>
          <option value="History">History</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="Geography">Geography</option>
          <option value="Sports">Sports</option>
          <option value="History">Just For Fun</option>
        </select>
        
        <br></br>
        <div className="wrapper">
          <div className="privacy">
            {/* Public/Private Radio Buttons */}
            <h4>Set Privacy:</h4>
            <div className="public">
              <input
                className="radio-button"
                id="public"
                type="radio"
                name="type"
                value="true"
                defaultChecked
                onClick={handleVisChange}
              />
              <label htmlFor="public">Public</label>
              <br />
            </div>

            <div className="private">
              <input
                className="radio-button"
                id="private"
                type="radio"
                name="type"
                value="false"
                onClick={handleVisChange}
              />
              <label htmlFor="private">Private</label>
              <br />
            </div>
          </div>

          <div className="age-rating">
            {/* Adult/Everyone Radio Buttons */}
            <h4>Set Age Rrange:</h4>
            <input
              className="radio-button"
              id="everyone"
              type="radio"
              name="age"
              value="false"
              defaultChecked
              onClick={handleAgeChange}
            />
            <label htmlFor="everyone">Everyone</label>
            <br />
            <input
              className="radio-button"
              id="adult"
              type="radio"
              name="age"
              value="true"
              onClick={handleAgeChange}
            />
            <label htmlFor="adult">18+</label>
            <br />
          </div>
        </div>
        </div>
        <div className="quiz-questions">
      
        {/* Question Section */}
        {questions.map((quest, index) => {
          let question = `question-${index}`;
          let choice = `choice-${index}`;
          let answer = `answer-${index}`;

          return (
            <div className="question-card">
              <div key={index}>
                {/* Question */}
                <button type="button" className="delete"
                  name={questions[index].question}
                  onClick={removeQuestion}>
                  ✖
                 </button><br/>
                <h4>{`Question ${index +  1}`}</h4> 
                <br/>

                <textarea
                  className="question"
                  type="text"
                  name="question"
                  data-idx={index}
                  placeholder="Question Here"
                  value={questions[index].question}
                  onChange={handleInputChange}
                />
                <br />
                <div className="choice-container">
                {quest.choices.map((cho, idx) => {
                  return (
                    <div key={idx}>
                      {/* Choices */}
                      <input
                        className="choice-radio"
                        id={choice + "abox"}
                        type="radio"
                        name={answer}
                        data-idx={index}
                        value={idx}
                        onClick={selectChoice}
                      />
            
                      <textarea
                        id={idx}
                        className="choices"
                        type="text"
                        placeholder="Choice Here"
                        data-idx={index}
                        value={questions[index].choices[idx]}
                        onChange={handleInputChange}
                      />

                      <br />
                    </div>
                    
                  );
                })}</div>


                {/* Answer */}
                <div className="answer-container">
                <h4>Answer </h4><br/>
                <textarea
                  id={answer}
                  className="answer"
                  type="text"
                  name={answer}
                  data-idx={index}
                  value={questions[index].answer}
                  onChange={handleInputChange}
                  readOnly
                />
                </div>
              </div>
            </div>
          );
        })}

          {/* Add Question Button - is input to prevent form submission on click */}
          <input type="button" onClick={handleAddQuestion} value="Add Question" />

        <button className="btn btn btn-primary" type="submit">
          Submit
        </button>
      </div>
      </div>
    </form>
  );
};

export default NewQuizForm;
