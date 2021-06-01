const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  questions: [{
    title: String, 
    choices: [String],
    answer: Number
  }],
  version: { type: String, required: true },
  quizStats: [{
    takenBy: String, 
    score: Number, 
    dateTaken: Date
  }],
  public: {type: Boolean, required: true},
  adult: {type: Boolean, required: true},
  tags: { type: [String], required: true }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
