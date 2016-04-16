/*!
 * maoxu-runner - lib/mail.js
 * Copyright(c) 2014 ju.taobao.com
 * Author: jianhui.fjh <jianhui.fjh@alibaba-inc.com>
 */

'use strict';

/**
 * Module dependencies.
 */
var debug = require('debug')('lib:mail');
var midway = require('midway');
var config = midway.getConfig();
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var transportJu = nodemailer.createTransport(smtpTransport(config.mail));

exports.send = function (cfg) {
  return function (callback) {
    var param = {
      to: cfg.to,
      subject: cfg.subject,
      text: '',
      html: cfg.html
    };
    param.from = config.mail.auth.user;
    transportJu.sendMail(param, function (err, response) {
      debug(err, response);
      callback && callback(err, response);
    });
  };
};
