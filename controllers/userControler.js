'use strict';

const User = require('../models/User.js');

exports.login = function (req, res) {
  let user = new User(req.body);
  user
    .login()
    .then(function (result) {
      res.send(result);
    })
    .catch(function (e) {
      res.send('e');
    });
};

exports.logout = function () {};

exports.register = function (req, res) {
  let user = new User(req.body);
  user.register();
  if (user.errors.length) {
    res.send(user.errors);
  } else {
    res.send('Congrats, there is no errors.');
  }
};

exports.home = function (req, res) {
  res.render('home-guest');
};
