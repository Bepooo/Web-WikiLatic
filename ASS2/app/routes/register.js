var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

/* GET register page*/
router.get('/', function (req, res, next) {
    res.render("register");
});

router.post('/', function (req, res, next) {
    // get POST form data
    var username = req.body.username;
    var password = req.body.password;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var emailadd = req.body.emailadd;
    var passwordConfirm = req.body['password-confirm'];
    var userData = {firstname: firstname, lastname: lastname, emailadd: emailadd, username: username, password: password};

    //validate the information exit
    if(username == '' || password == ''){
        res.json({
            'message': 'Password or Account can not be null'
        });
        return;
    }

    //validate if the password same
    if(password !== passwordConfirm){
        res.json({
            'message': 'Password can not match, incorrect!'
        });
        return;
    }

    //connect DB
    var db = mongoose.createConnection('mongodb://localhost:27017/Assignment2');
    var Schema = new mongoose.Schema({
        firstname: String,
        lastname: String,
        emailadd: String,
        username: String,
        password: String
    });
    var User = db.model('user', Schema);

    //validate in DB, if account exit, register fail
    User.findOne({username: username}, function (err, data) {
        if(err){
            res.send(err);
        }
        if(data){
            res.send('<p>Account already exists!</p>');
            return;
        }
        //Correct, store new account in DB
        User.create(userData, function (err, data, affactNums) {
            if(err){
                res.json({
                    message: err
                });
                return;
            }
            if(affactNums == 0 ){
                res.send('<p>Register Error!</p>');
                return;
            }
            req.session.user = {username: username};
            res.redirect('/');
        });
    })
});

module.exports = router;