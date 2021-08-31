const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const viewsRoute = require('./views.route')

const router = express.Router();


router.use('/v1/auth', authRoute);
router.use('/v1/users', userRoute);

router.use('/', viewsRoute)

module.exports = router;
