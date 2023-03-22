var express = require('express');
var router = express.Router();

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT product_id, jersey, scarf, hat, bobblehead, posters, homepage FROM ProductType";
    
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
    res.render('ProductType/allrecords', {allrecs: result });
    });
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT product_id, jersey, scarf, hat, bobblehead, posters, homepage FROM ProductType WHERE product_id = " + req.params.recordid;

    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
             }
     else {
        res.render('ProductType/onerec', {onerec: result[0] });
         }
      });
    });

// ==================================================
// Route to show empty form to obtain input form end-user.
// ==================================================
router.get('/addrecord', function(req, res, next) {
    res.render('ProductType/addrec');
    });

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {
    let insertquery = "INSERT INTO ProductType (product_id, jersey, scarf, hat, bobblehead, posters, homepage) VALUES (?, ?, ?, ?, ?, ?, ?)";

    var homepage_value=0;
    if (req.body.homepage)
    {
        homepage_value = 1;
    }

     db.query(insertquery,[req.body.product_id, req.body.jersey, req.body.scarf,
    req.body.hat, req.body.bobblehead, req.body.posters, homepage_value],(err, result) => {
    if (err) {
         console.log(err);
         res.render('error');
    } 
    else {
         res.redirect('/ProductType');
     }
      });
 });

// ==================================================
// Route to edit one specific record.
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT product_id, jersey, scarf, hat, bobblehead, postser, homepage FROM ProductType WHERE product_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
        } 
    else {
        res.render('ProductType/editrec', {onerec: result[0] });
     }
       });
 });

// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
    let updatequery = "UPDATE ProductType SET product_id = ?, jersey = ?, scarf = ?, hat = ?, bobblehead = ?, posters = ?, homepage = ? WHERE product_id = " + req.body.product_id;
        
    var homepage_value=0;
    if (req.body.homepage)
        {
            homepage_value = 1;
        }


    db.query(updatequery,[req.body.product_id, req.body.jersey, req.body.scarf,
         req.body.hat, req.body.bobblehead, req.body.posters, homepage_value],(err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    } 
        else {
        res.redirect('/ProductType');
        }
         });
 });

// ==================================================
// Route to delete one specific record.
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM ProductType WHERE product_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
      if (err) {
            console.log(err);
            res.render('error');
    } 
        else {
             res.redirect('/ProductType');
         }
     });
 });


module.exports = router; 