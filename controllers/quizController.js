const db = require("../models");

// Defining methods for the booksController
module.exports = {
// All of our query methods go in here. findAll, create, ect.
// All of the find methods in this export only display quizes that are currently viewable to the public. 

// Still need to write either validation, or new finds for if the user is less than 18.
// This will likely take the shape of different API calls since the validation has to be through the User Model.

// Finds all of our quizes to be displayed
findAll: function(req, res) {
    db.Quiz
      .find({})
      .where('public').equal(true)
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   Used to sort through the data to search for specific quizes based on the tags available. This should work with a checkbox format to allow us to filter by multiple tags at the same time. 
  findByTags: function(req, res) {
      db.Quiz
      .find({ })
      .where('tags').in([req.params.tags])
      .where('public').equal(true)
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   Finds all Quizes written by a specific creator. 
  findByAuthor: function(req, res) {
      db.Quiz
      .find({ })
      .where('author').equals(req.params.author)
      .where('public').equal(true)
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//   This function should return all versions of the Quiz. We should be able to map the data to display it based on the state selected. Shouldn't have to do a specific query for each different version.
  findTitle: function(req, res) {
      db.Quiz
      .find({ })
      .where('title').equals(req.params.title)
      .where('public').equal(true)
      .sort({ title: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   Creates a new quiz. This can be called for when a new version of a quiz is made as well.
  create: function(req, res) {
    db.Quiz
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   Delets a Quiz. Ensure that a message pops up warning it can be undone. By using this, we can allow users to older versions, but not every version at once.
  remove: function(req, res) {
    db.Quiz
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   Removes every version of a specific quiz, written by a specific author, from the db.
  removeAll: function(req, res) {
      db.Quiz
      .deleteMany({ })
      .where('title').equals(req.params.title)
      .where('author').equals(req.params.author)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
// Updates a quiz. This will not create a new version of the quiz. Do not allow users to change the version if they are updating.
  update: function(req, res) {
    db.Quiz
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
