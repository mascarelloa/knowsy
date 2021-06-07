const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/knowsy");

const quizSeed = [
    {
        title: "U.S. State Capitols",
        author: "Annie",
        description: "Can you guess the capitol cities of these popular U.S. states?",
        questions: [
            {
                "title": "What is the capitol of Florida?",
                "choices": ["Tallahassee", "Orlando", "Tampa", "Jacksonville"],
                "answer": "Tallahassee"
            },
            {
                "title": "What is the Capitol of Texas?",
                "choices": ["San Antonio", "Austin", "Dallas", "Houston"],
                "answer": "Austin"
            },
            {
                "title": "What is the Capitol of California?",
                "choices": ["Sacramento", "Los Angeles", "San Diego", "Irvine"],
                "answer": "Sacramento"
            },
            {
                "title": "What is the Capitol of Massachusetts?",
                "choices": ["Salem", "Boston", "Provincetown", "Cambridge"],
                "answer": "Boston"
            },
            {
                "title": "What is the Capitol of New York?",
                "choices": ["New York City", "Buffalo", "Albany", "Rochester"],
                "answer": "Albany"
            }
            
        ],
        version: "1",
        public: true,
        adult: true,
        quizStats: [],
        tags: ['geography']
    },
    {
        title: "Basic Geography",
        author: "Annie",
        description: "Here are some basic geogrpahy question!",
        questions: [
            {
                "title": "What is the tallest mountain on earth?",
                "choices": ["Mount Washington", "Mount Whitney", "Mount Everest", "Mount St. Helens"],
                "answer": "Mount Everest"
            },
            {
                "title": "Where is the Sahara desert located?",
                "choices": ["Africa", "North America", "Asia", "South America"],
                "answer": "Africa"
            },
            {
                "title": "What do you call a piece of land surrounded by water on three sides?",
                "choices": ["Island", "Cape", "Bay", "Peninsula"],
                "answer": "Peninsula"
            },
            {
                "title": "How many continents are there?",
                "choices": ["4", "6", "7", "9"],
                "answer": "7"
            },
            {
                "title": "What country has the largest population in the world?",
                "choices": ["China", "India", "United States", "Australia"],
                "answer": "China"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['geography']
    },
    {
        title: "Basic U.S. History",
        author: "Annie",
        description: "Let's see how much you know about the United States!",
        questions: [
            {
                "title": "What is the name of the ship that brought the Pilgrims to America?",
                "choices": ["Discovery", "Speedwell", "Jolly Roger", "Mayflower"],
                "answer": "Mayflower"
            },
            {
                "title": "Who was the first president of the United States?",
                "choices": ["John Adams", "Thomas Jefferson", "George Washington", "James Madison"],
                "answer": "George Washington"
            },
            {
                "title": "When did the United States gain independence?",
                "choices": ["July 7, 1776", "July 4, 1776", "March 15, 1876", "January 1, 1777"],
                "answer": "July 4, 1776"
            },
            {
                "title": "What do we call the first 10 amendments to the Constitution?",
                "choices": ["Bill of Rights", "Articles of Confederation", "Magna Carta", "Mayflower Compact"],
                "answer": "Bill of Rights"
            },
            {
                "title": "Which former U.S. president is credited with abolishing slavery?",
                "choices": ["James Buchanan", "James Madison", "Andrew Johnson", "Abraham Lincoln"],
                "answer": "Abraham Lincoln"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['history']
    },
    {
        title: "Sports Trivia",
        author: "Kevin",
        description: "Test your knowledge of major sports facts!",
        questions: [
            {
                "title": "Which NFL team is known for having the only undefeated season in history?",
                "choices": ["New England Patriots", "Chicago Bears", "Miami Dolphins", "Indianapolis Colts"],
                "answer": "Miami Dolphins"
            },
            {
                "title": "Who is the all-time leading scorer in the NBA?",
                "choices": ["Michael Jordan", "Kareem Abdul-Jabbar", "Wilt Chamberlain", "LeBron James"],
                "answer": "Kareem Abdul-Jabbar"
            },
            {
                "title": "Which NBA team has the most wins in a single season?",
                "choices": ["Los Angeles Lakers", "Golden State Warriors", "Chicago Bulls", "Boston Celtics"],
                "answer": "Golden State Warriors"
            },
            {
                "title": "Which athlete has the most gold medals in Olympic history?",
                "choices": ["Simone Biles", "Michael Phelps", "Usain Bolt", "Larisa Latynina"],
                "answer": "Michael Phelps"
            },
            {
                "title": "Which NASCAR driver has the most cup wins of all time?",
                "choices": ["Dale Earnhardt", "Jeff Gordon", "Joe Nemechek", "Richard Petty"],
                "answer": "Richard Petty"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['sports']
    },
    {
        title: "Whose Album is it Anyway?",
        author: "Kevin",
        description: "Can you match the artist with the album?",
        questions: [
            {
                "title": "Thriller, by: ...",
                "choices": ["Prince", "Kanye West", "Michael Jackson", "Britney Spears"],
                "answer": "Michael Jackson"
            },
            {
                "title": "Nevermind, by: ...",
                "choices": ["The All-American Rejects", "Destiny's Child", "Bee Gees", "Nirvana"],
                "answer": "Nirvana"
            },
            {
                "title": "Abbey Road, by: ...",
                "choices": ["Jethro Tull", "The Beatles", "Elton John", "David Bowie"],
                "answer": "The Beatles"
            },
            {
                "title": "Born to Run, by: ...",
                "choices": ["Bruce Springsteen", "Billy Idol", "Billy Joel", "Bob Ross"],
                "answer": "Bruce Springsteen"
            },
            {
                "title": "Back in Black, by: ...",
                "choices": ["REM", "AC/DC", "Metallica", "The Rolling Stones"],
                "answer": "AC/DC"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['entertainment']
    },
    {
        title: "Super Science!",
        author: "Kevin",
        description: "How much do you know about sciencey stuff?",
        questions: [
            {
                "title": "Who came up with the three laws of motion?",
                "choices": ["Isaac Newton", "Benjamin Franklin", "Galileo", "Leonardo DaVinci"],
                "answer": "Isaac Newton"
            },
            {
                "title": "What type of scientist studies motion?",
                "choices": ["Geologist", "Chemist", "Biologist", "Physicist"],
                "answer": "Physicist"
            },
            {
                "title": "If you hit a golf ball, a cotton ball, and a baseball with an equal amount of force, which will accelerate the most?",
                "choices": ["Cotton Ball", "Baseball", "Golf Ball", "All Will Be The Same"],
                "answer": "Cotton Ball"
            },
            {
                "title": "What is a force?",
                "choices": ["Tendency for an object to resist a change in motion", "A Push or a Pull", "Weight", "Mass"],
                "answer": "A Push or a Pull"
            },
            {
                "title": "What force resists motion between two objects?",
                "choices": ["Inertia", "Gravity", "Mass", "Friction"],
                "answer": "Friction"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['science']
    },
    {
        title: "Math is Fun?",
        author: "Kevin",
        description: "No... I don't think it is.",
        questions: [
            {
                "title": "5 + 7 + 10 + 6 - 2 = ?",
                "choices": ["13", "12", "39", "26"],
                "answer": "26"
            },
            {
                "title": "How many minutes are in six hours?",
                "choices": ["600", "30", "360", "10,000"],
                "answer": "360"
            },
            {
                "title": "What's the next number in this sequence? 3,8,13,18...",
                "choices": ["23", "25", "12", "33"],
                "answer": "23"
            },
            {
                "title": "On a number line, which number is closest to zero?",
                "choices": ["-77", "988", "-2", "10"],
                "answer": "-2"
            },
            {
                "title": "How many pennies are in $23.25?",
                "choices": ["93", "465", "1,555", "2,325"],
                "answer": "2,325"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['math']
    },
    {
        title: "EZ Anime Trivia",
        author: "Kevin",
        description: "If you know what anime is, you should score 100!",
        questions: [
            {
                "title": "Naruto Uzumaki's best friend is...",
                "choices": ["Kakashi", "Shikamaru", "Sasuke", "Zabuza"],
                "answer": "Sasuke"
            },
            {
                "title": "What was Ash Ketchum's first Pokemon?",
                "choices": ["Charmander", "Squirtle", "Bulbasaur", "Pikachu"],
                "answer": "Pikachu"
            },
            {
                "title": "Goku and Vegeta are a race of aliens known as...",
                "choices": ["Namekian", "Majin", "Saiyan", "Demon"],
                "answer": "Saiyan"
            },
            {
                "title": "Monkey D. Luffy is the leader of...",
                "choices": ["Red-Haired Shanks", "Straw Hat Pirates", "Heart Pirates", "Fire Tank Pirates"],
                "answer": "Straw Hat Pirates"
            }
        ],
        version: "1",
        public: true,
        adult: false,
        quizStats: [],
        tags: ['fun']
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
