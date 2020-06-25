const express = require('express');
const router = express.Router();
const layout = require("../views/layout");

router.get("/", async (req, res, next) => {
  try {
    // res.send(layout(""));
    res.redirect('/wiki');
  } catch (error) { next(error) }
});

module.exports = router
