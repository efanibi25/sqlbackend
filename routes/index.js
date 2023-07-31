var express = require('express');
const { sqlconvert } = require('../controllers/sqlcontroller');
var router = express.Router();
require("../controllers/sqlcontroller")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/generate', async(req, res)=> {
  let data=await sqlconvert()
  // let data=await sqlconvert("test input")
  res.send("d");
});


module.exports = router;
