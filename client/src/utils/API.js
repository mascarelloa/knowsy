import axios from "axios";

export default {
//  This is where we will be writing all of our API calls for the client side.

// These functions are specifically to be used for finding publically available quizzes.

//   Gets all of the quizes in the db, uses filterAll in controller.
  filterQuizzesPublic: function(tags) {
    return axios.get("/api/quiz/categories/" + tags);
  },
// Gets all of the quizzes for the allQuizzes page.
  getAll: function(){
    return axios.get("/api/quiz");
  },
   // Searches for quizzes based on title uses searchAll in controller
   searchQuizzesPublic: function(title) {
    return axios.get("/api/quiz/search/" + title);
  },

// The functions below do not check is a quiz is made public or not, should only be used 
// in user profile or something of the like except for getQuiz which can be used to get
// the page for a single quiz based on results returned from an above method.

  searchUserQuiz: function(data){
    return axios.get("/api/quiz/user/search", data);
  },
  
  getUserQuiz: function(author){
    return axios.get("/api/quiz/user/" + author);
  },

  getUserStats: function(author){
    return axios.get("/api/quiz/stats/user/" + author);
  },

  // Gets a specific quiz by its id
  getQuiz: function(id) {
    return axios.get("/api/quiz/" + id);
  },

  // Deletes the quiz with the given id
  deleteQuiz: function(id) {
    return axios.delete("/api/quiz/" + id);
  },
  // Saves a quiz to the database
  saveQuiz: function(data) {
    return axios.post("/api/quiz/new", data);
  },
  // Updates a single quiz. should be used for minor changes that dont institute a new version of the quiz.
  // This may not work. If not the issue is likely the difference between req.params.id vs req.body
  updateQuiz: function(id, data) {
    return axios.put("/api/quiz/" + id, data);
  }
};
