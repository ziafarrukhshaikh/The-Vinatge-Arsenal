var express = require('express');
var router = express.Router();

// ==================================================
// Route to list all records. Display view to list all records
// ==================================================

router.get('/', function(req, res, next) {
    let query = "SELECT sale_id, firstname, lastname, email, salePrice, deliveryFee, deliveryDate status FROM Sale";
    
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    }
    res.render('Sale/allrecords', {allrecs: result });
    });
});

module.exports = router; 