const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz/categories/:tags"
router.route("/categories/:tags")
  .get(quizController.filterAll);

  // matches with /api/quiz
router.route("/")
  .get(quizController.getAll);

// Matches with /api/quiz/search
router.route('/search')
  .get(quizController.searchAll);

// Matches with "/api/quiz/:id"
router.route("/:id")
  .get(quizController.findOne)
  .put(quizController.update)
  .delete(quizController.remove);

// Matches with /api/quiz/new
router.route('/new')
  .post(quizController.create);

// Matches with api/quiz/user
router.route('/user')
  .get(quizController.findUserQuizzes);
  
// Matches with api/quiz/user/search
router.route('/user/search')
  .get(quizController.searchUserQuizzes);
module.exports = router;