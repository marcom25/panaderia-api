const express = require('express');
const router = express.Router();

const {loginController} = require('../controllers/userController');

router.post('/', loginController);

module.exports = router;