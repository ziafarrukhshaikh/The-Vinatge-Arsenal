var express = require('express');
var router = express.Router();

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT sale_id,product_id,customer_id, firstname, lastname, email, salePrice, deliveryFee, deliveryDate FROM Sale";
    
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
    res.render('Sale/allrecords', {allrecs: result });
    });
});

// ==================================================
// Route to view one specific record. Notice the view is one record
// ==================================================
router.get('/:recordid/show', function(req, res, next) {
    let query = "SELECT sale_id, firstname, lastname, email, salePrice, deliveryFee, deliveryDate FROM Sale WHERE sale_id = " + req.params.recordid;

    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
             }
     else {
        res.render('Sale/onerec', {onerec: result[0] });
         }
      });
    });

// ==================================================
// Route to show empty form to obtain input form end-user.
// ==================================================
router.get('/addrecord', function(req, res, next) {
    res.render('Sale/addrec');
    });

// ==================================================
// Route to obtain user input and save in database.
// ==================================================
router.post('/', function(req, res, next) {
    let insertquery = "INSERT INTO Sale (sale_id, firstname, lastname, email, salePrice, deliveryFee, deliveryDate) VALUES (?, ?, ?, ?, ?, ?, ?)";

     db.query(insertquery,[req.body.sale_id, req.body.firstname, req.body.lastname,
    req.body.email, req.body.salePrice, req.body.deliveryFee, req.body.deliveryDate],(err, result) => {
    if (err) {
         console.log(err);
         res.render('error');
    } 
    else {
         res.redirect('/Sale');
     }
      });
 });  

// ==================================================
// Route to edit one specific record.
// ==================================================
router.get('/:recordid/edit', function(req, res, next) {
    let query = "SELECT sale_id, firstname, lastname, email, salePrice, deliveryFee, deliveryDate FROM Sale WHERE sale_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
        } 
    else {
        res.render('Sale/editrec', {onerec: result[0] });
     }
       });
 });

// ==================================================
// Route to save edited data in database.
// ==================================================
router.post('/save', function(req, res, next) {
    let updatequery = "UPDATE Sale SET sale_id = ?, firstname = ?, lastname = ?, email = ?, salePrice = ?, deliveryFee = ?, deliveryDate = ? WHERE sale_id = " + req.body.sale_id;
        db.query(updatequery,[req.body.sale_id, req.body.firstname, req.body.lastname,
         req.body.email, req.body.salePrice, req.body.deliveryFee, req.body.deliveryDate],(err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    } 
        else {
        res.redirect('/Sale');
        }
         });
 });

// ==================================================
// Route to delete one specific record.
// ==================================================
router.get('/:recordid/delete', function(req, res, next) {
    let query = "DELETE FROM Sale WHERE sale_id = " + req.params.recordid;
    // execute query
    db.query(query, (err, result) => {
      if (err) {
            console.log(err);
            res.render('error');
    } 
        else {
             res.redirect('/Sale');
         }
     });
 });


module.exports = router; 
