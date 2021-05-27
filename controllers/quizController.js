const Quiz = require("../models/Quiz");

// Defining methods for the booksController
module.exports = {
// All of our query methods go in here. findAll, create, ect.
// All of the find methods in this export only display quizes that are currently viewable to the public. 

// Still need to write either validation, or new finds for if the user is less than 18.
// This will likely take the shape of different API calls since the validation has to be through the User Model.

// Finds all of our quizes to be displayed
// checks to see whether the params include tags and filters all of the quizes found.
// The two functions below only show publically available quizzes.
filterAll: function(req, res) {

    try{
        if (!req.body.tags) {
            Quiz
            .find({ })
            .where('public').equals(true)
            .sort({ title: 1 })
            .then(Quiz => res.json(Quiz))
            .catch(err => res.status(422).json(err));
            
        } else {
            Quiz
            .find({ })
            .where('tags').in(req.body.tags)
            .where('public').equals(true)
            .sort({ title: 1 })
            .then(Quiz => res.json(Quiz))
            .catch(err => res.status(422).json(err));
           
        }
    }catch (err){
        throw err;
    }

      
  },
//   Finds all Quizes written by a specific creator. Can be passes an author, title or both.
  searchAll: function(req, res) {
      try{
          if (req.body.title && !req.body.author) {
            Quiz
            .find({ })
            .where('title').equals(req.body.title)
            .where('public').equals(true)
            .sort({ title: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

          } else if (!req.body.title && req.body.author){
            Quiz
            .find({ })
            .where('author').equals(req.body.author)
            .where('public').equals(true)
            .sort({ title: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

          } else if(req.body.title && req.body.author){
            Quiz
            .find({ })
            .where('author').equals(req.body.author)
            .where('title').equals(req.body.title)
            .where('public').equals(true)
            .sort({ title: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));

          }else {
            return res.status(400).json({ message: "Please either a title, author or both to search for."});
          }
      } catch (err){
          throw err;
      }
  },

// All of the requests below do not take into account the public availability of quizzes.

//   Finds one Quiz
findOne: function(req, res) {
    Quiz
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
//   Creates a new quiz. This can be called for when a new version of a quiz is made as well.
  create: function(req, res) {
    Quiz
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//   Delets a Quiz. Ensure that a message pops up warning it can be undone. By using this, we can allow users to older versions, but not every version at once.
  remove: function(req, res) {
    Quiz
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//   Removes every version of a specific quiz, written by a specific author, from the db.
  removeAll: function(req, res) {
      Quiz
      .deleteMany({ })
      .where('title').equals(req.params.title)
      .where('author').equals(req.params.author)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

// Updates a quiz. This will not create a new version of the quiz. Do not allow users to change the version if they are updating.
  update: function(req, res) {
    Quiz
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
};
