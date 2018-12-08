var express = require('express');
var router = express.Router();
var RSVPSchema = require('../models/RSVP');

// Create a new camel
router.post('/', function(req, res, next) {
    var RSVP = new RSVPSchema(req.body);
    RSVP.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(RSVP);
    });
});

module.exports = router