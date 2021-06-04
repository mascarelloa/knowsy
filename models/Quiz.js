const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  questions: [{
    title: String,
    choices: [String],
    answer: String
  }],
  version: { type: String, required: true },
  quizStats: [{
    takenBy: String, 
    results: Number, 
    dateTaken: Date
  }],
  public: { type: Boolean, required: true },
  adult: { type: Boolean, required: true },
  tags: { type: [String], required: true }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
