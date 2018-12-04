/*
* Create by Qian Yang
* */
var express = require("express");
var router = express.Router();

router.get('/', function (req, res, next) {
    if(req.session.user){
        delete req.session.user;
    }
    res.redirect('/');
    return;
});

module.exports = router;