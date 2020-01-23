var express = require('express');
var router = express.Router();

//code by ji
//champion main page
router.get('/', function(req, res, next) {
    if(req.session.user){ 
      res.render('Champion/champion', {session:req.session.user});
    }else{
      res.render('Champion/champion',{session:false});
    }
  });
//admin champion wrte
router.get('/write',function(req, res, next){
    if(req.session.isAdmin){
        res.render('Champion/write', {session:req.session.user});
    }else{
        res.render('Champion/write', {session:false});
    }
})

  module.exports = router;