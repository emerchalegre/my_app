var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', (req, res) => {
    models.User.create({ username: req.body.username }).then(() => {
        res.redirect('/');
    });
});

module.exports = router;