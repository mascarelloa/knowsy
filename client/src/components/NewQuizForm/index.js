import React, { useContext, useRef, useState } from "react";
import { UserContext } from "../../utils/UserContext";
import "./NewQuizForm.css";
import { FaPlus, FaCheck } from "react-icons/fa";
import { GiSaveArrow } from 'react-icons/gi'


const NewQuizForm = () => {
  // Allows us to access the current user.
  const [user, dispatch] = useContext(UserContext);

  const formRef = useRef();
  const titleRef = useRef();
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
    title: "",
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
    // id is radio button 'value' and value is choice input 'value'
    const copiedAnswer = document.getElementById(e.target.value).value;
    // id is radio button 'name' which is connected to the 'value' of answer
    // EQUALS, id is radio button 'value' and value is 'value' of connected choice
    document.getElementById(e.target.name).value = document.getElementById(
      e.target.value
    ).value;
    const updatedQuestions = [...questions];
    updatedQuestions[e.target.dataset.idx].answer = copiedAnswer;
    setQuestions(updatedQuestions);
  };

  // Uses state to keep track of the current array of tags.
  const [tags, setTags] = useState([]);

  // Will add or remove a tag based on whether or not the checkbox is checked.
  const handleTagChange = (e) => {
    const updatedTags = [...tags];
    if (e.target.checked) {
      let newTag = e.target.id;
      let tagToSend = newTag.toLowerCase();
      updatedTags.push(tagToSend);
      setTags(updatedTags);
    } else {
      setTags(updatedTags.filter(tag => tag !== e.target.id))
    }
  };

  // Will set the state of "questions" every time the user changes a character inside one of the inputs.
  const handleInputChange = (e) => {
    const updatedQuestions = [...questions];
    if (e.target.className === "choices") {
      updatedQuestions[e.target.dataset.idx].choices[e.target.name] =
        e.target.value;
      setQuestions(updatedQuestions);
    } else if (e.target.className === "question") {
      // [index] and [name]
      console.log(e.target.value);
      updatedQuestions[e.target.dataset.idx].title =
        e.target.value;
      setQuestions(updatedQuestions);
    } else {
      updatedQuestions[e.target.dataset.idx].answer =
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
      updatedQuestions.filter((question) => question.title !== questionName)
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
          console.log(tags);
          return create({
            title: titleRef.current.value,
            author: user.username,
            description: descRef.current.value,
            questions: questions,
            version: "1",
            public: visibility,
            adult: ageRestrict,
            tags: tags,
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
       <div className="cats-container">
        <div className="right-cats">

          <input type="checkbox" id="Entertainment" name="Entertainment" onChange={handleTagChange}></input>
          <label htmlFor="Entertainment">Entertainment</label><br/>
          <input type="checkbox" id="History" name="History" onChange={handleTagChange}></input>
          <label htmlFor="History">History</label><br/>
          <input type="checkbox" id="Math" name="Math" onChange={handleTagChange}></input>
          <label htmlFor="Math">Math</label><br/>
          <input type="checkbox" id="Science" name="Science" onChange={handleTagChange}></input>
          <label htmlFor="Science">Science</label><br/>
          </div>

          <div className="right-cats">
          <input type="checkbox" id="Geography" name="Geography" onChange={handleTagChange}></input>
          <label htmlFor="Geography">Geography</label><br/>
          <input type="checkbox" id="Sports" name="Sports" onChange={handleTagChange}></input>
          <label htmlFor="Sports">Sports</label><br/>
          <input type="checkbox" id="JustForFun" name="JustForFun" onChange={handleTagChange}></input>
          <label htmlFor="JustForFun">Just For Fun</label><br/>
        </div>
        </div>
        
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

          <div className="age-range">
            {/* Adult/Everyone Radio Buttons */}
            <h4>Set Age Range:</h4>
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
            <div key={index} className="question-card">
              <div>
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
                  name={question}
                  data-idx={index}
                  placeholder="Question Here"
                  value={questions[index].question}
                  onChange={handleInputChange}
                />
                <br />
                <div className="choice-container">
                {quest.choices.map((cho, idx) => {
                  let options = `option-${idx}`;
                  return (
                    <div key={idx}>
                      {/* Choices */}
                      <input
                        className="choice-radio"
                        id={choice}
                        type="radio"
                        name={answer}
                        data-idx={index}
                        value={choice + options}
                        onClick={selectChoice}
                      />
            
                      <textarea
                        id={choice + options}
                        className="choices"
                        type="text"
                        name={idx}
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
          <div className="button-wrapper">
          <button className="add" type="button" onClick={handleAddQuestion} value="Add Question +">Add question <FaPlus id="plus-icon"/></button>

        <button className="save" type="submit">
          Save quiz <FaCheck id="save-icon"/>
        </button></div>
      </div>
      </div>
    </form>
  );
};

export default NewQuizForm;
