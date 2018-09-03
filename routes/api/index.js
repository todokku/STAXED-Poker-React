const express = require('express');
const router = express.Router();
const userRoute = require('./user');
// const adminRoute = require('./admin');

router.use('/user', userRoute);
// router.user('/admin', adminRoute);

module.exports = router;