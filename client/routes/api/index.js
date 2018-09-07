const express = require('express');
const router = express.Router();

const privateRoute = require('./private');
const publicRoute = require('./public')
const adminRoute = require('./admin')
const userRoute = require('./user');

router.use('/user', userRoute);
router.use('/public', publicRoute);
router.use('/private', privateRoute);
router.use('/admin', adminRoute);

module.exports = router;