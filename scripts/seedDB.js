const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knowsy");

const quizSeed = [
    {
        title: "Sample Quiz 1",
        author: "admin",
        questions: [
            {
                "title": "What is 1+1?",
                "choices": ["1", "2", "3", "4"],
                "answer": 1
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": 3
            }
            
        ],
        version: "1",
        public: true,
        adult: true,
        quizStats: [],
        tags: ['educational', 'test', 'math', 'elementary']
    },
    {
        title: "Sample Quiz 2",
        author: "kevin",
        questions: [
            {
                "title": "What is 1+1?",
                "choices": ["1", "2", "3", "4"],
                "answer": 1
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": 3
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['educational', 'elementary']
    },
    {
        title: "Sample Quiz 3",
        author: "Cash",
        questions: [
            {
                "title": "What is 1+1?",
                "choices": ["1", "2", "3", "4"],
                "answer": 1
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": 3
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['educational', 'math']
    },
    {
        title: "Sample Quiz 4",
        author: "Annie",
        questions: [
            {
                "title": "What is 1+1?",
                "choices": ["1", "2", "3", "4"],
                "answer": 1
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": 3
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
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