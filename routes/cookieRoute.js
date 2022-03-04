const jwt = require('jsonwebtoken');
const express = require('express');

const router = express.Router();
const { msToDaysParser } = require('../utils/msToDaysParser');



router.get('/set', (req, res) => {
    
    res.cookie("isInSession", true, {
        maxAge: msToDaysParser(1),
    });
    
    res.send("Cookie seteado");
});

router.get('/get', (req, res) => {
    jwt.verify(req.cookies.session, 'hola');
    res.send("Cookie seteado");
});

module.exports = router;