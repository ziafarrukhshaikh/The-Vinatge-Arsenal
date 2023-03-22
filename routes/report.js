var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('report/reportsmenu');
});

//==================================================
// Route to list all records
// ==================================================

router.get('Customer', function(req, res, next) {
    let query = "SELECT customer_id, firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode FROM Customer";
    
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
    res.render('report/allcusts', {allrecs: result });
    });
});

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/ProductType', function(req, res, next) {
  let query = "SELECT product_id, jersey, scarf, hat, bobblehead, posters, homepage FROM ProductType";
  
// execute query
db.query(query, (err, result) => {
  if (err) {
      console.log(err);
      res.render('error');
  }
  res.render('report/allprods', {allrecs: result });
  });
});


// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/Sale', function(req, res, next) {
  let query = "SELECT sale_id, firstname, lastname, email, salePrice, deliveryFee, deliveryDate FROM Sale";
  
// execute query
db.query(query, (err, result) => {
  if (err) {
      console.log(err);
      res.render('error');
  }
  res.render('report/allsale', {allrecs: result });
  });
});







module.exports = router;
