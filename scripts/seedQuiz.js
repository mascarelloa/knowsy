const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knowsy");

const quizSeed = [
    {
        title: "Sample Quiz",
        creator: "admin",
        questions: [
            {
                "type": "choices",
                "question": "What is 1+1?",
                "answers": ["1", "2", "3", "4"]
            },
            {
                "type": "input",
                "question": "What is 1+1",
                "answers": "2"
            }
        ],
        version: "1",
        takenBy: []
    }
];

db.Quiz.remove({})
  .then(() => db.Quiz.collection.insertMany(quizSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });