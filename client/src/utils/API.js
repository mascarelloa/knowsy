import axios from "axios";

export default {
//  This is where we will be writing all of our API calls for the client side.

//   Gets all of the quizes in the db, uses findAll in controller.
  getQuizzes: function(data) {
    return axios.get("/api/quiz", data);
  },
  // Gets a specific quiz by its id
  getQuiz: function(id) {
    return axios.get("/api/quiz/" + id);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
