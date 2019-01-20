var express = require('express');
var router = express.Router();
var WishesSchema = require('../models/Wishes');

router.post('/', function(req, res, next) {
    var Wishes = new WishesSchema(req.body);
    Wishes.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(Wishes);
    });
});

module.exports = router