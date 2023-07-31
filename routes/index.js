var express = require('express');
const { sqlconvert } = require('../controllers/sqlcontroller');
var router = express.Router();
require("../controllers/sqlcontroller")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world")
});


router.post('/generate', async(req, res)=> {
  let data=await sqlconvert("example query to add a row to a sql table")
  res.send(data)
});


module.exports = router;
