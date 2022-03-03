const express = require('express');
const router = express.Router();

const {productsController, updatedProductController} = require('../controllers/productsController');

router.get('/', productsController);

router.get('/updateData', updatedProductController);

module.exports = router;