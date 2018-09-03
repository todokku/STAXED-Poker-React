const bcrypt = require('bcrypt-as-promised');
const router = require('express').Router();
const knex = require('../db/knex');
const session = require('express-session');

router.get('/', (req, res) => {
  console.log('Welcome to Signup Page');
  res.render('signup', { message: req.session.message});
})