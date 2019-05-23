var express = require('express');
var router = express.Router();

router.route('/submitForm')
  .get(function(req, res) {
    console.log('submitForm GET');
    res.json({
      status: 200,
      info: 'GET ok'
    });
  })
  .post(function(req, res) {
    console.log('submitForm POST', req.body, req.cookies);
    if (!req.cookies.test) {
      res.cookie('test', {
        username: 'lzj'
      }, {
        httpOnly: true,
        maxAge: 999999,
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