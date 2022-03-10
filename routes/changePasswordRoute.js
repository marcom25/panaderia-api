const express = require('express');
const router = express.Router();

const {recoverPasswordController} = require('../controllers/userController');

router.put('/', recoverPasswordController);

module.exports = router;


