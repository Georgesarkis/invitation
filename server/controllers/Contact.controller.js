var express = require('express');
var router = express.Router();
var ContactSchema = require('../models/Contact');

router.post('/', function(req, res, next) {
    var Contact = new ContactSchema(req.body);
    Contact.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(Contact);
    });
});

module.exports = router