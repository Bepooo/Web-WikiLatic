var Revision = require("../models/revision")
var dataBase = require("../../public/js/AdminAndBot");
var title = ''
var user =''
		
module.exports.showTitleForm=function(req,res){
	res.render("titleForm.pug")
}

module.exports.getLatest=function(req,res){
	title = req.query.title;
    console.log(title);

	Revision.findTitleLatestRev(title, function(err,result){
		
		if (err){
			console.log("Cannot find " + title + ",s latest revision!")
		}else{
			// console.log(result)
			revision = result[0];
			console.log(revision);
			res.render('revision.pug',{title: title, revision:revision})
		}	
	})	

}
module.exports.getHighestRevid=function(req,res){

//module.exports.getHighestRevid=function(req,res){
	Revision.findHighestRevid(function(err,result){	
			// console.log(result)
			revision0 = result[0];
			revision1 = result[1];
			revision2 = result[2];
			console.log(revision0);
			console.log(revision1);
			console.log(revision2);
			res.render('revision.pug',{title: title, revision:revision})
	})	

}


module.exports.getLowestRevid=function(req,res){
	Revision.findLowestRevid(function(err,result){	
			// console.log(result)
			revision0 = result[0];
			revision1 = result[1];
			revision2 = result[2];
			console.log(revision0);
			console.log(revision1);
			console.log(revision2);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	

}

module.exports.getLargestGroupOfUsers=function(req,res){
	Revision.findLargestGroupOfUsers(function(err,result){	
			res.json(result);
			//res.render('OverallAnalysis.pug',{title: title, revision:revision0})	
	})	

}

module.exports.getSmallestGroupOfUsers=function(req,res){
	Revision.findSmallestGroupOfUsers(function(err,result){	
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	

}

module.exports.getLongestHistory=function(req,res){
	Revision.findLongestHistory(function(err,result){	
			// console.log(result)
			revision0 = result[0];
			revision1 = result[1];
			revision2 = result[2];
			console.log(revision0);
			console.log(revision1);
			console.log(revision2);
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	

}

module.exports.getShortestHistory=function(req,res){
	Revision.findShortestHistory(function(err,result){	
			// console.log(result)
			revision0 = result[0];
			revision1 = result[1];
			revision2 = result[2];
			console.log(revision0);
			console.log(revision1);
			console.log(revision2);
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getRevisionNumberDistribution=function(req,res){//still need doing
	Revision.findRevisionNumberDistribution(function(err,resultadm,resultano,resultbot,resultreg){	
			// console.log(result)
			for(var i=0;i<=18;i++)
			{
			/*adm = resultadm[i];
			console.log(adm);*/
			ano = resultano[i];
			console.log(ano);
			res.json(ano);
			/*bot = resultbot[i];
			console.log(bot);
			reg = resultreg[i];
			console.log(reg);*/
			}

	})	

}




module.exports.getUsersByYear=function(req,res){
	Revision.findUsersByYear(function(err,result){	
			res.json(revision0);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	

}
module.exports.getAdminsByYear=function(req,res){
	Revision.findAdminsByYear(function(err,result){	
			// console.log(result)
			console.log(result);
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}
module.exports.getBotsByYear=function(req,res){
	Revision.findBotsByYear(function(err,result){	
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getRegsByYear=function(req,res){
	Revision.findRegsByYear(function(err,result){	
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getAnonsByYear=function(req,res){
	Revision.findAnonsByYear(function(err,result){	
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getAllAnons=function(req,res){
	Revision.findAllAnons(function(err,result){	
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getAllAdmins=function(req,res){
	Revision.findAllAdmins(function(err,result){	
			// console.log(result)
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getAllBots=function(req,res){
	Revision.findAllBots(function(err,result){	
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getAllRegs=function(req,res){
	Revision.findAllRegs(function(err,result){	
			res.json(result);
			//res.render('revision.pug',{title: title, revision:revision})	
	})	
}

module.exports.getAuthorAnalytics=function(req,res){
	inputuser = req.query.inputuser;
    console.log(inputuser);
	Revision.findAuthorAnalytics(inputuser, function(err,result){
	if (err){
		console.log("Cannot find " + Author + ",s latest revision!")
	}
	else{
		console.log(revision);
		res.json(revision);
	}	
	})
}

module.exports.getIndividualTitle=function(req,res){
    inputTitle = req.query.inputTitle;
    Revision.findIndividualTitle(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
        }
        else{
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleTop=function(req,res){
    inputTitleTop = req.query.inputTitleTop;
    Revision.findIndividualTitleTop(inputTitleTop, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleTop + ",s latest revision!")
        }
        else{
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleAnonByYear=function(req,res){
    inputTitleAnonByYear = req.query.inputTitleAnonByYear;
    Revision.findIndividualTitleAnonByYear(inputTitleAnonByYear, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleAnonByYear + ",s latest revision!")
        }
        else{
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleAdminByYear=function(req,res){
    inputTitleAdminByYear = req.query.inputTitleAdminByYear;
    Revision.findIndividualTitleAdminByYear(inputTitleAdminByYear, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleAdminByYear + ",s latest revision!")
        }
        else{
            console.log(revision);
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleBotByYear=function(req,res){
    inputTitleBotByYear = req.query.inputTitleBotByYear;
    console.log(inputTitleBotByYear);
    Revision.findIndividualTitleBotByYear(inputTitleBotByYear, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleBotByYear + ",s latest revision!")
        }
        else{

            console.log(revision);
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleRegByYear=function(req,res){
    inputTitleRegByYear = req.query.inputTitleRegByYear;
    Revision.findIndividualTitleRegByYear(inputTitleRegByYear, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleRegByYear + ",s latest revision!")
        }
        else{
            // console.log(result)
            // revision = result[0];
            console.log(revision);
            res.json(revision);
            //res.render('revision.pug',{user: user, revision:revision});
        }
    })
}

module.exports.getIndividualTitleAnon=function(req,res){
    inputTitleAnon = req.query.inputTitleAnon;
    console.log(inputTitleAnon);
    Revision.findIndividualTitleAnon(inputTitleAnon, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleAnon + ",s latest revision!")
        }
        else{
            // console.log(result)
            // revision = result[0];
            console.log(revision);
            res.json(revision);
            //res.render('revision.pug',{user: user, revision:revision});
        }
    })
}

module.exports.getIndividualTitleAdmin=function(req,res){
    inputTitleAdmin = req.query.inputTitleAdmin;
    console.log(inputTitleAdmin);
    Revision.findIndividualTitleAdmin(inputTitleAdmin, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleAdmin + ",s latest revision!")
        }
        else{
            // console.log(result)
            // revision = result[0];
            console.log(revision);
            res.json(revision);
            //res.render('revision.pug',{user: user, revision:revision});
        }
    })
}

module.exports.getIndividualTitleBot=function(req,res){
    inputTitleBot = req.query.inputTitleBot;
    console.log(inputTitleBot);
    Revision.findIndividualTitleBot(inputTitleBot, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleBot + ",s latest revision!")
        }
        else{
            // console.log(result)
            // revision = result[0];
            console.log(revision);
            res.json(revision);
            //res.render('revision.pug',{user: user, revision:revision});
        }
    })
}

module.exports.getIndividualTitleReg=function(req,res){
    inputTitleReg = req.query.inputTitleReg;
    console.log(inputTitleReg);
    Revision.findIndividualTitleReg(inputTitleReg, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleReg + ",s latest revision!")
        }
        else{
            // console.log(result)
            // revision = result[0];
            console.log(revision);
            res.json(revision);
            //res.render('revision.pug',{user: user, revision:revision});
        }
    })
}

var getInfo = function (title, callback) {
    // TODO get title & # of revs
    Revision.getNumOfRevision(title, function (err, result) {
        if (err) {
            throw err;
        }

        callback(result);
    })
};

var updateDB = function (title, callback) {
    Revision.findTitleLatestRev(title, function (err, data) {
        if (!err) {
            var needUpdate,
                updateResult = 0;
            var latestTimestamp = data.timestamp;

            // fix timestamp
            latestTimestamp = data.timestamp.replace('T', ' ').replace('Z', ':000');
            latestTimestamp = new Date(latestTimestamp.replace(/-/g, '/')).getTime();
            var nowTimestamp = new Date().getTime();
            var timestampDiff = (nowTimestamp - latestTimestamp) / 1000 / 60 / 60 / 24;

            if (timestampDiff >= 1) {
                needUpdate = true;
                // TODO send request for newer revs
                var wikiEndpoint = "https://en.wikipedia.org/w/api.php",
                    parameters = ["action=query",
                        "format=json",
                        "prop=revisions",
                        "titles=" + title,
                        "rvstart=" + data.timestamp,
                        "rvdir=newer",
                        "rvlimit=max",
                        "rvprop=timestamp|userid|user|ids"];
                var url = wikiEndpoint + "?" + parameters.join("&");
                console.log("url: " + url)
                var options = {
                    url: url,
                    Accept: 'application/json', 'Accept-Charset': 'utf-8'
                };

                request(options, function (err, res, data) {
                    if (err) {
                        console.log('Error:', err);
                    } else if (res.statusCode !== 200) {
                        console.log('Status:', res.statusCode);
                    } else {
                        var json = JSON.parse(data),
                            pages = json.query.pages,
                            updateResult = pages[Object.keys(pages)[0]].revisions.length;
                        // updateResult = pages[Object.keys(pages)[0]].revisions;

                        // console.log("There are " + updateResult + " revisions.");
                        callback({
                            needUpdate: needUpdate,
                            updateResult: updateResult
                        });
                    }
                })
            }
        }
        else {
            needUpdate = false;
            callback({
                needUpdate: needUpdate,
                updateResult: updateResult
            });
        }
    })
};

var getTopFiveRegUsers = function (title, callback) {
    // title = req.query.title;
    // console.log(title);

    Revision.findTopFiveRegularUsers(title, function (err, result) {
        // console.log('234');
        var admins = dataBase.admin;
        var bots = dataBase.bot;
        var regular = [];
        var User;

        // User.forEach(function (user) {
        // if(admins.indexOf(user)===-1&&bot.indexOf(user)===-1){
        // 	regular.push({user: user})
        // }
        // })

        if (err) {
            console.log("Cannot find " + title + ",s latest revision!")
        } else {
            // revision = result[0];
            // console.log(revision);
            // console.log(result);
            var adminsAndBots = admins.concat(bots);

            result.forEach(function (data) {
                var user = data._id;
                var indicator = 0;
                adminsAndBots.forEach(function (editor) {
                    if (editor === user) {
                        // result.pop(data);
                        indicator = 1;
                    }
                });
                if (indicator === 0) {
                    regular.push(data)
                }
            });
            var topFive;
            if (regular.length >= 5) {
                topFive = regular.slice(0, 5);
                callback(topFive);
            } else {
                callback(regular);

            }
            //     revision = result[0];
            //     console.log(revision);
            //     res.render('revision.pug',{title: title, revision:revision})
        }
    })
};

module.exports.controller = function (title, callback) {
    updateDB(title, function (updateResult) {
        var updateResult = updateResult;
        getInfo(title, function (revCount) {
            var revCount = revCount;
            getTopFiveRegUsers(title, function (result) {
                var topFiveRegularUsers = result;
                callback({
                    updateResult: updateResult,
                    title: title,
                    revCount: revCount,
                    topFiveRegularUsers: topFiveRegularUsers
                })
            })
        })
    });
};