const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knowsy");

const quizSeed = [
    {
        title: "Sample Quiz 1",
        author: "admin",
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
        public: true,
        takenBy: [],
        tags: ['educational', 'test', 'math', 'elementary']
    },
    {
        title: "Sample Quiz 2",
        author: "kevin",
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
        public: true,
        takenBy: [],
        tags: ['educational', 'elementary']
    },
    {
        title: "Sample Quiz 3",
        author: "Cash",
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
        public: true,
        takenBy: [],
        tags: ['educational', 'math']
    },
    {
        title: "Sample Quiz 4",
        author: "Annie",
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
        public: true,
        takenBy: [],
        tags: ['math', 'elementary']
    },
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