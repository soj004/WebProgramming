var express = require('express');
var room = require('../models/Rooms');
var guests = require('../models/Guests');

var router = express.Router();
module.exports = router;

router.get('/', function(req, res, next) {
  Post.find({}, function(err, docs) {
    //에러가 발생할 때를 위한 구문
    if (err) {
      return next(err);
    }
    //삭제 후 이동할 url 주소
    res.render('posts/index', {posts: docs});
  });
});
