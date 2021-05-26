const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  questions: { type: Array, required: true },
  version: { type: String, required: true },
  takenBy: { type: Array },
  public: {type: Boolean, required: true},
  tags: { type: Array, required: true }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
