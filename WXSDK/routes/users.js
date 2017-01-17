"use strict";

const express = require('express');
const router = express.Router();
const wxAPI = require('../api/wxSDK/WXSDKAPI');


/* GET users listing. */
router.get('/userInfo', function(req, res, next) {

  let code = req.query['code'];

  wxAPI.requestWXOpenID(code).then(wxAPI.requestUserInfo).then(function (userInfo)
  {
      res.send('userInfo:'+JSON.stringify(userInfo));

  }).catch(function (error) {

    res.send('failed'+JSON.stringify(userInfo));
  });

});

module.exports = router;
