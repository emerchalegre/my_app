var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    models.User.findAll().then(function(users) {
        res.render('index', {
            title: 'MakersBnB',
            users: users
        });
    });
});

module.exports = router;