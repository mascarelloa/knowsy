const router = require("express").Router();
const quizController = require("../../controllers/quizController");

// Matches with "/api/quiz"
router.route("/")
  .get(quizController.filterAll)


// Matches with /api/quiz/search
router.route('/search')
  .get(quizController.searchAll);

// Matches with "/api/quiz/:id"
router
  .route("/:id")
  .get(quizController.findOne)
  .put(quizController.update)
  .delete(quizController.remove);

// Matches with /api/quiz/new
router.route('/new')
  .post(quizController.create);

module.exports = router;