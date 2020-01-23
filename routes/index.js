var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.user){ 
    res.render('index', {session:req.session.user});
  }else{
    res.render('index',{session:false});
  }
});



router.get('/skin', function(req, res, next) {
  if(req.session.user){ 
    res.render('skin', {session:req.session.user});
  }else{
    res.render('skin',{session:false});
  }
});

router.get('/wardSkin', function(req, res, next) {
  if(req.session.user){ 
    res.render('wardSkin', {session:req.session.user});
  }else{
    res.render('wardSkin',{session:false});
  }
});

router.get('/serviceCenter', function(req, res, next) {
  if(req.session.user){ 
    res.render('serviceCenter', {session:req.session.user});
  }else{
    res.render('serviceCenter',{session:false});
  }
});

module.exports = router;
