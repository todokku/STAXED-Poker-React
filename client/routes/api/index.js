const express = require('express');
const router = express.Router();

const privateRoute = require('./private');
const publicRoute = require('./public')
const adminRoute = require('./admin')
const userRoute = require('./user');

// Eventually need to decide which route to drop off the user payload at. exp) '/api/admin/user' ==> gives the admin route access to the USERS object from database. Then I will have to move the /user middleware below appropriately.
router.use('/user', userRoute);
router.use('/public', publicRoute);
router.use('/private', privateRoute);
router.use('/admin', adminRoute);

module.exports = router;