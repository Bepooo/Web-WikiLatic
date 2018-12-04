
var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');

/* GET login page*/
router.get('/', function (req, res, next) {
    var user = req.session.user;
    res.render('login', {user:user});
    //res.render("login");
});

/* Receive data of username and password */
router.post('/', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    if(!username || !password){
        res.send('<p>Please Input Username and Password</p>');
        //console.log("Error!");
        return;
    }
/* Connect with DB, and validate information */
    var db = mongoose.createConnection('mongodb://localhost:27017/Assignment2');
    var User = db.model('user', new mongoose.Schema({
        username: String,
        password: String
    }));

    User.findOne({username: username}, 'password', function (err,data,affectNums) {
        if(!data){
            res.send('<p>The User not exit, please register.</p>');
            return;
        }
        if(data.password == password){
            req.session.user = {username: username};
            res.redirect('/');
            return;
        }
        res.send('<p>Non-Correct Username or password</p>');
    })
});

module.exports = router;