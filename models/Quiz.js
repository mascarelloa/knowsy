const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true },
  creator: { type: String, required: true },
  questions: { type: Array, required: true },
  version: { type: String, required: true },
  takenBy: { type: Array }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
