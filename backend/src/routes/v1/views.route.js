const express = require('express');
const viewsControler = require('../../controllers/views.controller')

const router = express.Router();

router.route('/').get(viewsControler.home);

module.exports = router;
