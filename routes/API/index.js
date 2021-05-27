const path = require("path");
const router = require("express").Router();
const quizRoutes = require("./quiz");

// Between here we are going to import any routes we need and initialize the router.
router.use("/quiz", quizRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
