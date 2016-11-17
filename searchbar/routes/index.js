var express = require('express');
var router = express.Router();
var School = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
    var newSchool = new School({
        instnm: "University at Buffalo"
    });
    newSchool.save(function(err) {
        if (err) throw err;
    });
    res.render('index', { title: 'Express' });
});

module.exports = router;
