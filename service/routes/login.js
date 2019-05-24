var express = require('express');
var router = express.Router();

router.route('/login')
  .get(function(req, res) {
    console.log('login GET');
    res.json({
      status: 200,
      info: 'GET ok'
    });
  })
  .post(function(req, res) {
    console.log('login POST', req.body, req.cookies);
    if (!req.cookies.test) {
      res.cookie('test', {
        username: 'lzj'
      }, {
        // httpOnly: true,
        // maxAge: 1 * 24 * 60 * 60 * 1000,
      });
    } else {
      console.log('cookie已存在')
    }
    res.json({
      status: 200,
      info: 'POST ok',
    });
  });

module.exports = router;