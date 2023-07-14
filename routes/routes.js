const express = require("express");
const { dirname } = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

router.get("/youtube", (req, res) => {
  res.redirect("https://www.youtube.com/");
});
router.get("/instagram", (req, res) => {
  res.redirect("https://www.instagram.com/");
});
router.get("/twitter", (req, res) => {
  res.redirect("https://twitter.com/");
});
module.exports = router;
