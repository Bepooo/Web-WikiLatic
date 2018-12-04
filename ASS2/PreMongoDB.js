
var fs = require("fs")
var mongoose = require('mongoose');
var ad=0;
var reg=0;
var bo=0;
var anon =0;
mongoose.connect('mongodb://localhost/wikipedia',function () {
    console.log('mongodb connected')
});

var revSchema = new mongoose.Schema(
		{
			revid: Number, 
			parentid: Number,
			user:String,
			anon:String,
			timestamp:String, 
			size:Number,
			sha1:String,
			parsedcomment:String,
			title:String,
			type:String},
			 {
			 	versionKey: false
			})

var Revision=require("./app/model/revision")
var bot = fs.readFileSync('bot.txt').toString();
var bots = bot.split("\n");
var admin = fs.readFileSync('admin.txt').toString();
var admins = admin.split("\n");

function isBot(doc) {
    var count = 0;
    for(var i = 0; i< bots.length;i++){
        if(bots[i] == doc.user)
            count++;
    }
    if(count>0)
        return true;
    else
        return false;
}

function isAdmin(doc) {
    var count = 0;
    for(var i = 0; i< admins.length;i++){
        if(admins[i]==(doc.user))
            count++;
    }
    if(count>0)
        return true;
    else
        return false;
}

function isAnon(doc) {
    if(doc.anon==(""))
        return true;
    else
        return false;
}
var step =1;
Revision.find({}).skip(0).limit(56947*2).exec(function (err,result) {
    if(err){
        console.log(err);
    }
    console.log('getin');
    result.forEach(function(doc){
        if(isAdmin(doc)){
        	doc.set({type: 'admin' });

        }else if(isBot(doc)){
        	doc.set({type: 'bot' });
        }else if (isAnon(doc)) {
        	doc.set({type: 'anon' });
        }
        else{
        	doc.set({type: 'reg' });   
        }
        doc.save(function (err) {
            if(err){
                console.log(err);
                return;
            }
        });

    })
    console.log("finish");
});

