var Revision = require("../model/revision")

module.exports.getHighestRevid3=function(req,res){
    Revision.findHighestRevid3(function(err,result){
        res.json(result);
    })
}
module.exports.getLowestRevid3=function(req,res){
    Revision.findLowestRevid3(function(err,result){
        res.json(result);
    })
}


module.exports.getHighestRevid=function(req,res){
    inputNumber = req.query.inputNumber;
    Revision.findHighestRevid(inputNumber,function(err,result){
            res.json(result);
    })
}
module.exports.getLowestRevid=function(req,res){
    inputNumber = req.query.inputNumber;
    Revision.findLowestRevid(inputNumber,function(err,result){
            res.json(result);
    })
}

    module.exports.getLongestHistory=function(req,res){
    Revision.findLongestHistory(function(err,result){
        // console.log(result)
        revision0 = result[0];
        revision1 = result[1];
        revision2 = result[2];
        res.json(result);
        //res.render('revision.pug',{title: title, revision:revision})
    })}
module.exports.getShortestHistory=function(req,res){
    Revision.findShortestHistory(function(err,result){
        // console.log(result)
        revision0 = result[0];
        revision1 = result[1];
        revision2 = result[2];
        res.json(result);
        //res.render('revision.pug',{title: title, revision:revision})
    })
}
module.exports.getAdminsByYear=function(req,res){
    Revision.findAdminsByYear(function(err,result){
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
    })
}

module.exports.getAllRegs=function(req,res){
    Revision.findAllRegs(function(err,result){
        res.json(result);
    })
}

module.exports.getLargestGroupOfUsers=function(req,res){
    Revision.findLargestGroupOfUsers(function(err,result){
        res.json(result);
        //res.render('OverallAnalysis.pug',{title: title, revision:revision0})
    })

}

module.exports.getSmallestGroupOfUsers=function(req,res) {
    Revision.findSmallestGroupOfUsers(function (err, result) {
        res.json(result);
        //res.render('revision.pug',{title: title, revision:revision})
    })
}
//indivdual
module.exports.getIndividualTitle=function(req,res){
    inputTitle = req.query.inputTitle;
    //console(inputTitle)
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
    inputTitle = req.query.inputTitle;
    Revision.findIndividualTitleTop(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitleTop + ",s latest revision!")
        }
        else{
            res.json(revision);
        }
    })
}


module.exports.getIndividualTitleAnonByYear=function(req,res){
    inputTitle = req.query.inputTitle;
    Revision.findIndividualTitleAnonByYear(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
        }
        else{
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleAdminByYear=function(req,res){
    inputTitle = req.query.inputTitle;
    Revision.findIndividualTitleAdminByYear(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
        }
        else{
            console.log(revision);
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleBotByYear=function(req,res){
    inputTitle = req.query.inputTitle;
    console.log(inputTitle);
    Revision.findIndividualTitleBotByYear(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
        }
        else{

            console.log(revision);
            res.json(revision);
        }
    })
}

module.exports.getIndividualTitleRegByYear=function(req,res){
    inputTitle = req.query.inputTitle;
    Revision.findIndividualTitleRegByYear(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
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
    inputTitle = req.query.inputTitle;
    console.log(inputTitle);
    Revision.findIndividualTitleAnon(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
        }
        else{
            console.log(revision);
            res.json(revision);
            //res.render('revision.pug',{user: user, revision:revision});
        }
    })
}

module.exports.getIndividualTitleAdmin=function(req,res){
    inputTitle = req.query.inputTitle;
    console.log(inputTitle);
    Revision.findIndividualTitleAdmin(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
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
    inputTitle = req.query.inputTitle;
    console.log(inputTitle);
    Revision.findIndividualTitleBot(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
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
    inputTitle = req.query.inputTitle;
    console.log(inputTitle);
    Revision.findIndividualTitleReg(inputTitle, function(err,revision){
        if (err){
            console.log("Cannot find " + inputTitle + ",s latest revision!")
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
module.exports.getAuthorRevisions=function(req,res){
    inputAuthor = req.query.inputAuthor;
    console.log(inputAuthor);
    Revision.findAuthorRevisions(inputAuthor, function(err,result){
        if (err){
            console.log("Cannot find " + Author + ",s latest revision!")
        }
        else{
            console.log(result);
            res.json(result);
        }
    })
}

module.exports.getAuthorAnalysis=function(req,res){
    inputAuthor = req.query.inputAuthor;
    console.log(inputAuthor);
    Revision.findAuthorAnalysis(inputAuthor, function(err,result){
        if (err){
            console.log("Cannot find " + Author + ",s latest revision!")
        }
        else{
            console.log(result);
            res.json(result);
        }
    })
}

//sessions
module.exports.showAnalyticsPage=function(req, res, next){
	//set User, if not session, the user not exit
    var user = req.session.user;
    if(req.session.user){
        res.render('analytics.ejs', {user:user});
    }else{
        res.render('login.ejs');
    }
    //console.log(user);
}
