var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var date_in = Date(Date.now()).toString();
  res.render('index', { date_value: date_in });
});

router.post('/', function(req, res, next) {
  var date_in = Date(Date.now()).toString();
  var username_in = req.body.username;
  res.render('index', { date_value: date_in, username : username_in})
 });

module.exports = router;
