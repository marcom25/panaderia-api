const express = require('express');
const router = express.Router();

const {recoverPasswordController} = require('../controllers/userController');

router.patch('/', recoverPasswordController);

module.exports = router;


