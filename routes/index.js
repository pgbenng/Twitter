const express = require('express');
const router = express.Router();

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

router.get('/', function(req, res, next) {
  return res.render('index');
});

router.get('/profile/:username', function(req, res, next) {
  res.render('index');
})

router.get('/feed/', function(req, res, next) {
  res.render('index')
})
router.get('/signup', (req, res, next) => {
  res.render('index');
});

router.get('/login', (req, res, next) => {
  res.render('index');
});


module.exports = router;
