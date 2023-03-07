var express = require('express');
var router = express.Router();

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT customer_id, firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode FROM Customer";
    
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
    res.render('Customer/allrecords', {allrecs: result });
    });
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT customer_id, firstname, lastname, email, phone, rewardsNum, street, city, state, zipcode FROM Customer WHERE customer_id = " + req.params.recordid;

    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
             }
     else {
        res.render('Customer/onerec', {onerec: result[0] });
         }
      });
    });

// ==================================================
// Route to show empty form to obtain input form end-user.
// ==================================================
router.get('/addrecord', function(req, res, next) {
    res.render('Customer/addrec');
    });

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {
    let insertquery = "INSERT INTO Customer (customer_id, firstname, lastname, email, phone, street, city, state, zipcode) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

     db.query(insertquery,[req.body.customer_id, req.body.firstname, req.body.lastname,
    req.body.email, req.body.phone, req.body.street, req.body.city, req.body.state,
    req.body.zipcode],(err, result) => {
    if (err) {
         console.log(err);
         res.render('error');
    } 
    else {
         res.redirect('/Customer');
     }
      });
 });

// ==================================================
// Route to edit one specific record.
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT customer_id, firstname, lastname, email, phone, rewardsNum, street, city, zipcode, state, zipcode FROM Customer WHERE customer_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
        } 
    else {
        res.render('Customer/editrec', {onerec: result[0] });
     }
       });
 });

// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
    let updatequery = "UPDATE Customer SET customer_id = ?, firstname = ?, lastname = ?,email = ?, phone = ?, street = ?, city = ?, state = ?, zipcode = ? WHERE customer_id = " + req.body.customer_id;
        db.query(updatequery,[req.body.customer_id, req.body.firstname, req.body.lastname,
         req.body.email, req.body.phone, req.body.street, req.body.city, req.body.state,
         req.body.zipcode],(err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    } 
        else {
        res.redirect('/Customer');
        }
         });
 });

// ==================================================
// Route to delete one specific record.
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM Customer WHERE customer_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
      if (err) {
            console.log(err);
            res.render('error');
    } 
        else {
             res.redirect('/Customer');
         }
     });
 });


module.exports = router; 