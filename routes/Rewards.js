var express = require('express');
var router = express.Router();

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT rewards_id, customer_id status FROM Rewards";
    
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
    res.render('Rewards/allrecords', {allrecs: result });
    });
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT rewards_id, customer_id FROM Rewards WHERE rewards_id = " + req.params.recordid;

    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
             }
     else {
        res.render('Rewards/onerec', {onerec: result[0] });
         }
      });
    });

// ==================================================
// Route to show empty form to obtain input form end-user.
// ==================================================
router.get('/addrecord', function(req, res, next) {
    res.render('Rewards/addrec');
    });   


// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {
    let insertquery = "INSERT INTO Rewards (customer_id) VALUES (?, ?)";

     db.query(insertquery,[req.body.sale_id,req.body.customer_id],(err, result) => {
    if (err) {
         console.log(err);
         res.render('error');
    } 
    else {
         res.redirect('/Rewards');
     }
      });
 });

// ==================================================
// Route to edit one specific record.
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT rewards_id, customer_id FROM Rewards WHERE rewards_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
        } 
    else {
        res.render('Rewards/editrec', {onerec: result[0] });
     }
       });
 });
 // ==================================================
 // Route to save edited data in database.
 // ==================================================
 router.post('/save', function(req, res, next) {
     let updatequery = "UPDATE Rewards SET rewards_id = ?, customer_id = ? WHERE rewards_id = " + req.body.rewards_id;
         db.query(updatequery,[req.body.rewards_id,req.body.customer_id],(err, result) => {
     if (err) {
         console.log(err);
         res.render('error');
     } 
         else {
         res.redirect('/Rewards');
         }
          });
  });

// ==================================================
// Route to delete one specific record.
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM Rewards WHERE rewards_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
      if (err) {
            console.log(err);
            res.render('error');
    } 
        else {
             res.redirect('/Rewards');
         }
     });
 });

module.exports = router; 