
var mongoose = require('./analytics-db')

var RevisionSchema = new mongoose.Schema(
		{
		revid: Number, 
		parentid: Number,
		user:String,
		anon:String,
		timestamp:String, 
		size:Number,
		sha1:String,
		type:String,
		parsedcomment:String,
		title:String},
		 {
		 	versionKey: false
		})
RevisionSchema.statics.findHighestRevid3 = function(callback){

    return this.aggregate([
        {$match:{title:{$exists:true}}},
        {$group:{_id:"$title",numOfRevid:{$sum:1}}},
        {$sort:{numOfRevid:-1}},
        {$limit:parseInt(3)}
    ])
        .exec(callback)
}

RevisionSchema.statics.findLowestRevid3 = function(callback){

    return this.aggregate([
        {$match:{title:{$exists:true}}},
        {$group:{_id:"$title",numOfRevid:{$sum:1}}},
        {$sort:{numOfRevid:1}},
        {$limit:parseInt(3)}
    ])
        .exec(callback)
}


RevisionSchema.statics.findHighestRevid = function(inputNumber,callback){
	
	return this.aggregate([
        {$match:{title:{$exists:true}}},
        {$group:{_id:"$title",numOfRevid:{$sum:1}}},
        {$sort:{numOfRevid:-1}},
        {$limit:parseInt(inputNumber)}
	])
	.exec(callback)
}

RevisionSchema.statics.findLowestRevid = function(inputNumber,callback){

    return this.aggregate([
        {$match:{title:{$exists:true}}},
        {$group:{_id:"$title",numOfRevid:{$sum:1}}},
        {$sort:{numOfRevid:1}},
        {$limit:parseInt(inputNumber)}
    ])
        .exec(callback)
}




RevisionSchema.statics.findLargestGroupOfUsers = function(callback){//unuique!
	
	return this.aggregate([
		{$group:{_id:{title:"$title",user:"$user"}, num: {$sum:1}}},
		{$group:{_id:"$_id.title", number: {$sum:1}}},
        {$sort:{number:-1}},
        {$limit:1}
		]).exec(callback)
}

RevisionSchema.statics.findSmallestGroupOfUsers = function(callback){
	return this.aggregate([
		{$group:{_id:{title:"$title",user:"$user"}, num: {$sum:1}}},
		{$group:{_id:"$_id.title", number: {$sum:1}}},
		{$sort:{number:1}},
		{$limit:1}
	]).exec(callback)
}


RevisionSchema.statics.findLongestHistory = function(callback){
	return this.aggregate([
		{$sort:{timestamp:1}},
		{$limit:3}
	]).exec(callback)
}

RevisionSchema.statics.findShortestHistory = function(callback){
	return this.aggregate([
		{$sort:{timestamp:-1}},
		{$limit:3}
	]).exec(callback)
}

/*RevisionSchema.statics.findRevisionNumberDistribution = function(anoresult,callback){ Still need doing
	for(var i=2001;i<=2018;i++)
	{return this.aggregate([
	{$match:{anon: {$exists: true}}},
	{$match:{timestamp: i}},
	
	])
	anoresult
	.exec(callback)
	}
}*/

RevisionSchema.statics.findUsersByYear = function(callback){
	return this.aggregate([
		{$match:{timestamp:{$exists:true}}},
		{$group: {_id: { $substr: [ "$timestamp", 0, 4 ] }, numofUsers: {$sum: 1}}},
		{$sort: {_id: 1}}
	]).exec(callback)
}

RevisionSchema.statics.findAdminsByYear = function(callback){
	return this.aggregate([
		{$match:{type:"admin"}},
		{$match:{timestamp:{$exists:true}}},
		{$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofAdmins: {$sum: 1}}},
		{$sort: {_id: 1}}
	]).exec(callback)
}

RevisionSchema.statics.findBotsByYear = function(callback){
	return this.aggregate([
		{$match:{type:"bot"}},
		{$match:{timestamp:{$exists:true}}},
		{$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofBots: {$sum: 1}}},
		{$sort: {_id: 1}}
	]).exec(callback)
}

RevisionSchema.statics.findRegsByYear = function(callback){
	return this.aggregate([
		{$match:{type:"reg"}},
		{$match:{timestamp:{$exists:true}}},
		{$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofRegs: {$sum: 1}}},
		{$sort: {_id: 1}}
	]).exec(callback)
}

RevisionSchema.statics.findAnonsByYear = function(callback){
	return this.aggregate([
		{$match:{type:"anon"}},
		{$match:{timestamp:{$exists:true}}},
		{$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofAnons: {$sum: 1}}},
		{$sort: {_id: 1}}
	]).exec(callback)
}

RevisionSchema.statics.findAllAnons = function(callback){
	return this.aggregate([
		{$match:{anon:""}},
		{ $group: { _id: "anon user", count: { $sum: 1 } } }
	]).exec(callback)
}

RevisionSchema.statics.findAllAdmins = function(callback){
	return this.aggregate([
		{$match:{type:"admin"}},
		{ $group: { _id: "admin user", count: { $sum: 1 } } }
	]).exec(callback)
}

RevisionSchema.statics.findAllBots = function(callback){
	return this.aggregate([
		{$match:{type:"bot"}},
		{ $group: { _id: "bot user", count: { $sum: 1 } } }
	]).exec(callback)
}

RevisionSchema.statics.findAllRegs = function(callback){
	return this.aggregate([
		{$match:{type:"reg"}},
		{ $group: { _id: "reg user", count: { $sum: 1 } } }
	]).exec(callback)
}

RevisionSchema.statics.findAuthorRevisions = function(inputAuthor, callback){
	return this.aggregate([
	{$match:{'user':inputAuthor}},
		{$group:{_id:inputAuthor,count:{$sum:1}},}
	])
	.exec(callback)
}

RevisionSchema.statics.findAuthorAnalysis = function(inputAuthor, callback){
    return this.aggregate([
        {$match:{user:"Ian Rose"}},
        {$group:{_id:{title:"$title"},count:{$sum:1}}},
        {$sort:{count:-1}}
    ])
        .exec(callback)
}


RevisionSchema.statics.findIndividualTitle= function(inputTitle, callback){
    console.log("12345")
    console.log(inputTitle)
    return this.aggregate([
    	{$match:{title:inputTitle}},
    	{$group:{_id:inputTitle,numofrevisions:{$sum:1}}}
    ])
        .exec(callback)
}

RevisionSchema.statics.findIndividualTitleTop = function(inputTitleTop, callback){
    console.log("12345")
    console.log(inputTitleTop)
    return this.aggregate([
    	{$match:{title:inputTitleTop}},
    	{$match:{type:"reg"}},
    	{$group:{_id:{user:"$user"}, num: {$sum:1}}},
		{$sort:{num:-1}},
    	{$limit:5}
    ])
        .exec(callback)
}

RevisionSchema.statics.findIndividualTitleAnonByYear = function(inputTitleAnonByYear, callback){
    return this.aggregate([
        {$match:{title:inputTitleAnonByYear}},
        {$match:{anon:''}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofAnons: {$sum: 1}}},
        {$sort: {_id: 1}}
    ]).exec(callback)
}

RevisionSchema.statics.findIndividualTitleAdminByYear = function(inputTitleAdminByYear, callback){
    return this.aggregate([
        {$match:{title:inputTitleAdminByYear}},
        {$match:{type:'admin'}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofAdmins: {$sum: 1}}},
        {$sort: {_id: 1}}
    ]).exec(callback)
}

RevisionSchema.statics.findIndividualTitleBotByYear = function(inputTitleBotByYear, callback){
    return this.aggregate([
        {$match:{title:inputTitleBotByYear}},
        {$match:{type:'bot'}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofBots: {$sum: 1}}},
        {$sort: {_id: 1}}
    ]).exec(callback)
}

RevisionSchema.statics.findIndividualTitleRegByYear = function(inputTitleRegByYear, callback){
    return this.aggregate([
        {$match:{title:inputTitleRegByYear}},
        {$match:{type:'reg'}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: { $substr: ["$timestamp", 0, 4 ] }, numofRegs: {$sum: 1}}},
        {$sort: {_id: 1}}
    ]).exec(callback)
}

RevisionSchema.statics.findIndividualTitleAnon = function(inputTitleAnon, callback){
    return this.aggregate([
        {$match:{title:inputTitleAnon}},
        {$match:{anon:''}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: 'anon', numofAnons: {$sum: 1}}},
    ]).exec(callback)
}

RevisionSchema.statics.findIndividualTitleAdmin = function(inputTitleAdmin, callback){
    return this.aggregate([
        {$match:{title:inputTitleAdmin}},
        {$match:{type:'admin'}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: 'admin', numofAdmins: {$sum: 1}}},
    ]).exec(callback)
}

RevisionSchema.statics.findIndividualTitleBot = function(inputTitleBot, callback){
    return this.aggregate([
        {$match:{title:inputTitleBot}},
        {$match:{type:'bot'}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: 'bot', numofBots: {$sum: 1}}},
    ]).exec(callback)
}

RevisionSchema.statics.findIndividualTitleReg = function(inputTitleReg, callback){
    return this.aggregate([
        {$match:{title:inputTitleReg}},
        {$match:{type:'reg'}},
        {$match:{timestamp:{$exists:true}}},
        {$group: {_id: 'reg', numofRegs: {$sum: 1}}},
    ]).exec(callback)
}

RevisionSchema.statics.findTitleLatestRev = function (title, callback) {
    return this.findOne({'title': title})
        .sort({'timestamp': -1})
        .limit(1)
        .exec(callback)
}

RevisionSchema.statics.getNumOfRevision = function (title, callback) {
    return this.count({'title': title}).exec(callback)
}

RevisionSchema.statics.findTopFiveRegularUsers = function (title, callback) {
    // users = function (title,callback) {
    return this.aggregate([
        {$match: {'title': title, 'anon': undefined}},
        {$group: {_id: "$user", revisionNumber: {$sum: 1}}},
        {$sort: {revisionNumber: -1}},
        // {$limit:5}
    ])
        .exec(callback)
}

var Revision = mongoose.model('Revision', RevisionSchema, 'revisions')

module.exports = Revision