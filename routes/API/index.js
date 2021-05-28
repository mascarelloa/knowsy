const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const quizRoutes = require("./quiz");

// Between here we are going to import any routes we need and initialize the router.
router.use("/users", userRoutes);
router.use("/quiz", quizRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

module.exports = router;
