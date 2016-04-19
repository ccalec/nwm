/*!
 * maoxu-runner - lib/sms.js
 * Copyright(c) 2014 ju.taobao.com
 * Author: jianhui.fjh <jianhui.fjh@alibaba-inc.com>
 */

'use strict';

/**
 * Module dependencies.
 */
var https = require('https');
var querystring = require('querystring');

exports.send = function (key, postData) {
  console.log(key,postData);
  return function(cb){
    var content = querystring.stringify(postData);
    var options = {
      host:'sms-api.luosimao.com',
      path:'/v1/send.json',
      method:'POST',
      auth:'api:key-'+key,
      agent:false,
      rejectUnauthorized : false,
      headers:{
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Content-Length' :content.length
      }
    };
    var req = https.request(options,function(res){
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
          chunk = JSON.parse(chunk);
          cb && cb(null, chunk);
        });
        res.on('end',function(){
        });
    });
    req.write(content);
    req.end();
  }
};

