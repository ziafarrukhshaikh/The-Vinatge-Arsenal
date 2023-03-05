var express = require('express');
var router = express.Router();

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT review_id, product_id, customer_id, submitdate, description, rating FROM Review";
    
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
    res.render('Review/allrecords', {allrecs: result });
    });
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT review_id, product_id, customer_id, submitdate, description, rating FROM Review WHERE review_id = " + req.params.recordid;

    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
             }
     else {
        res.render('Review/onerec', {onerec: result[0] });
         }
      });
    });


// ==================================================
// Route to show empty form to obtain input form end-user.
// ==================================================
router.get('/addrecord', function(req, res, next) {
    res.render('Review/addrec');
    });

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {
    let insertquery = "INSERT INTO Review (review_id, product_id, customer_id, submitdate, description, rating) VALUES (?, ?, ?, ?, ?, ?)";

     db.query(insertquery,[req.body.review_id, req.body.product_id, req.body.customer_id,
    req.body.submitdate, req.body.description, req.body.rating],(err, result) => {
    if (err) {
         console.log(err);
         res.render('error');
    } 
    else {
         res.redirect('/Review');
     }
      });
 });

 // ==================================================
// Route to edit one specific record.
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT review_id, product_id, customer_id, submitdate, description, rating FROM Review WHERE review_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
        } 
    else {
        res.render('Review/editrec', {onerec: result[0] });
     }
       });
 });

// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
    let updatequery = "UPDATE Review SET review_id = ?, product_id = ?, customer_id = ?, submitdate = ?, description = ?, rating = ? WHERE review_id = " + req.body.review_id;
        db.query(updatequery,[req.body.review_id, req.body.product_id, req.body.customer_id,
         req.body.submitdate, req.body.description, req.body.rating],(err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    } 
        else {
        res.redirect('/Review');
        }
         });
 });

// ==================================================
// Route to delete one specific record.
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM Review WHERE review_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
      if (err) {
            console.log(err);
            res.render('error');
    } 
        else {
             res.redirect('/Review');
         }
     });
 });
 

module.exports = router; 