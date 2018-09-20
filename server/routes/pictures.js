var express = require('express');
var router = express.Router();
var Pictures = require('../models/config')

/* GET users listing. */
router.get('/', function(req, res, next) {
  Pictures.find({})
  .then((data)=>{
    res.header({'Access-Control-Allow-Origin': '*'})
    res.send(data);
  })
});


router.get(`/:id`, function(req, res){
  Pictures.find({id : req.params.id})
  .then((data)=>{
    res.header({'Access-Control-Allow-Origin': '*'})
    res.send(data);
    console.log(data);
  })
})

router.get('/author/:author', function(req, res, next) {
  console.log(req.params, '!!!!!!!!!!!!!!!!!!!')
  Pictures.find({author : req.params.author})
  .then((data)=>{
    res.header({'Access-Control-Allow-Origin': '*'})
    res.send(data);
    console.log(data);
  })
});


module.exports = router;
