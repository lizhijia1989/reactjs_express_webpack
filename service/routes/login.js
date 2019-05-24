var express = require('express');
var router = express.Router();

const json = {
  title: 'login',
  list: [
    {
      username: 'zhijiali',
      password: 'qwer'
    }
  ]
}

router.route('/login')
  .get(function(req, res) {
    console.log('login GET');
    res.cookie('loginTest', {
      isOK: true
    });
    res.json({
      status: 200,
      info: 'GET ok'
    });
  })
  .post(function(req, res) {
    console.log('login POST', req.body, req.cookies);
    // if (!req.cookies.test) {
    //   res.cookie('test', {
    //     username: 'lzj'
    //   }, {
    //     // httpOnly: true,
    //     // maxAge: 1 * 24 * 60 * 60 * 1000,
    //   });
    // } else {
    //   console.log('cookie已存在')
    // }
    const list = json.list;
    const { username, password } = req.body;
    const isRegisteredUser = list.some((item, i) => (item.username === username && item.password === password));
    if (isRegisteredUser) {
      res.json({
        status: 200,
        code: 1,
        info: 'POST ok，已注册用户',
      });
    } else {
      res.json({
        status: 200,
        code: 0,
        info: 'POST ok，未注册用户',
      });
    }
  });

module.exports = router;