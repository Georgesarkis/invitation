var path = require('path');
var express = require('express');
var router = express.Router()

// Insert routes below
router.use('/api/rsvp', require('./RSVP.controller'));

router.route('/*').get(function (req, res) {
    var relativeAppPath = req.app.get('appPath');
    var absoluteAppPath = path.resolve(relativeAppPath);
    res.sendFile(absoluteAppPath + '/index.html');
});

module.exports = router
