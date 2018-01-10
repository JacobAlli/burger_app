var express = require('express');

var bodyParser = require('body-parser');

var router = express.Router();

var orm = require('../models/orm');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res) {
    orm.selectAll('burgers', function(err, result){
        if (err) throw err;
        res.render('index', {burgers: result});
    });
});

router.post('/eat', function(req, res) {
    var burger = req.body.id;
    console.log(burger);
    orm.updateEaten('burgers', burger, function(err, result){
        if (err) throw err;
        res.redirect('/');
    });
});

router.post('/add', function(req, res) {
    var burger = req.body.name;
    console.log(burger);
    orm.addBurgerToList('burgers', burger, function(err, result) {
        if (err) throw err;
        res.redirect('/');
    });
});


module.exports = router;