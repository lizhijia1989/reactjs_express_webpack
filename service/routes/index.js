var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log('req.body', req.body);
  // res.send({
  //   status: 1,
  //   info: "读取文件成功",
  //   data: {a:1,b:2}
  // });
  res.json({
    status: 200,
    info: "读取文件成功",
    data: {a:1,b:2}
  });
});

module.exports = router;
