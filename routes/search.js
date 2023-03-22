var express = require('express');
var router = express.Router();

// ==================================================
// Route to view one specific record. Notice the view is one record
// ==================================================
router.get('/', function(req, res, next) {
    let query = "SELECT product_id, jersey, scarf, hat, bobblehead, posters FROM ProductType WHERE jersey LIKE '%" + req.query.searchcriteria + "%'";
    console.log("Query: " + query );
// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log(err);
        res.render('error');
    } else {
        res.render('search', {allrecs: result});
    }
 });
});


module.exports = router;