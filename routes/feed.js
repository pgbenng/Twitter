const express = require("express");
const router = express.Router();
const models = require("../models");

router.get("/currentuser", (req, res, next) => {
  models.User.findOne({
    where: {
      username: req.user.username
    }
  }).then(result => {
    res.send(result);
  });
});

router.post("/tweet", (req, res, next) => {
  models.Post.create({
    caption: req.body.tweet,
    user_id: req.user.id
  }).then(result => {
      res.send(result)
  })
});

router.get("/tweet", (req, res, next) => {
  models.Post.findAll({
    where: {
      user_id: req.user.id
    }
  })
  .then(result => {
      res.send(result)
  })
});
module.exports = router;
