const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knowsy");

const quizSeed = [
    {
        title: "Sample Quiz 1",
        author: "admin",
        description: "This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. ",
        questions: [
            {
                "title": "1and1",
                "choices": ["1", "2", "3", "4"],
                "answer": "2"
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": "4"
            }
            
        ],
        version: "1",
        public: true,
        adult: true,
        quizStats: [],
        tags: ['math']
    },
    {
        title: "Sample Quiz 2",
        author: "kevin",
        description: "This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. This is a sample description. ",
        questions: [
            {
                "title": "What is 1+1?",
                "choices": ["1", "2", "3", "4"],
                "answer": "2"
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": "4"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['math']
    },
    {
        title: "Sample Quiz 3",
        author: "Cash",
        questions: [
            {
                "title": "What is 1+1?",
                "choices": ["1", "2", "3", "4"],
                "answer": "2"
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": "4"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['math']
    },
    {
        title: "Sample Quiz 4",
        author: "Annie",
        questions: [
            {
                "title": "What is 1+1?",
                "choices": ["1", "2", "3", "4"],
                "answer": "2"
            },
            {
                "title": "What is 2+2?",
                "choices": ["1", "2", "3", "4"],
                "answer": "4"
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