var express = require('express');
var controller = require('../controllers/analytics.server.controller');
var router = express.Router();


router.get('/',controller.showAnalyticsPage)
//var user = aaa;
router.get('/getHighestRevid3', controller.getHighestRevid3)
router.get('/getLowestRevid3', controller.getLowestRevid3)
router.get('/getHighestRevid', controller.getHighestRevid)
router.get('/getLowestRevid', controller.getLowestRevid)
router.get('/getLongestHistory', controller.getLongestHistory)
router.get('/getShortestHistory', controller.getShortestHistory)
router.get('/getAdminsByYear', controller.getAdminsByYear)
router.get('/getBotsByYear', controller.getBotsByYear)
router.get('/getRegsByYear', controller.getRegsByYear)
router.get('/getAnonsByYear', controller.getAnonsByYear)
router.get('/getAllAnons', controller.getAllAnons)
router.get('/getAllAdmins', controller.getAllAdmins)
router.get('/getAllBots', controller.getAllBots)
router.get('/getAllRegs', controller.getAllRegs)
router.get('/getLargestGroupOfUsers', controller.getLargestGroupOfUsers)
router.get('/getSmallestGroupOfUsers', controller.getSmallestGroupOfUsers)
//individual
router.get('/getIndividualTitle', controller.getIndividualTitle)
router.get('/getIndividualTitleTop', controller.getIndividualTitleTop)
router.get('/getIndividualTitleAnonByYear', controller.getIndividualTitleAnonByYear)
router.get('/getIndividualTitleAdminByYear', controller.getIndividualTitleAdminByYear)
router.get('/getIndividualTitleBotByYear', controller.getIndividualTitleBotByYear)
router.get('/getIndividualTitleRegByYear', controller.getIndividualTitleRegByYear)
router.get('/getIndividualTitleAnon', controller.getIndividualTitleAnon)
router.get('/getIndividualTitleAdmin', controller.getIndividualTitleAdmin)
router.get('/getIndividualTitleBot', controller.getIndividualTitleBot)
router.get('/getIndividualTitleReg', controller.getIndividualTitleReg)
//Author
router.get('/getAuthorRevisions', controller.getAuthorRevisions)
router.get('/getAuthorAnalysis', controller.getAuthorAnalysis)



module.exports = router;