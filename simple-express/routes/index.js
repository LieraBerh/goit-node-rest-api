var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  res.render("response", { title: "Simple express app", email, password });
});
