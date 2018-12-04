var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

    var user = req.session.user;
    res.render('Homepage', {user:user});
    console.log(user);
});

module.exports = router;
