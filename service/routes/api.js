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
    console.log('submitForm POST', req.body);
    res.json({
      status: 200,
      info: 'POST ok',
    });
  });

module.exports = router;