google.charts.load('current', {packages: ['corechart']});


var Anons=0
var Admins=0
var Bots=0
var Regs=0

var Anons1=0
var Admins1=0
var Bots1=0
var Regs1=0
//var columndata;

var columnoptions = {'title':"Number of Distribution By Year",
    'width':1000,
    'height':650};

var columndata = ([
    ['timestamp', 'Anonymous','Administrator', 'Bot','Regular user'],
    ['2001',1,1,1,1], ['2002',1,1,1,1], ['2003',1,1,1,1], ['2004',1,1,1,1], ['2005',1,1,1,1], ['2006',1,1,1,1], ['2007',1,1,1,1], ['2008',1,1,1,1], ['2009',1,1,1,1],
    ['2010',1,1,1,1], ['2011',1,1,1,1], ['2012',1,1,1,1], ['2013',1,1,1,1], ['2014',1,1,1,1], ['2015',1,1,1,1], ['2016',1,1,1,1], ['2017',1,1,1,1], ['2018',1,1,1,1]
])

var columndataI = ([
    ['timestamp', 'Anonymous','Administrator', 'Bot','Regular user'],
    ['2001',1,1,1,1], ['2002',1,1,1,1], ['2003',1,1,1,1], ['2004',1,1,1,1], ['2005',1,1,1,1], ['2006',1,1,1,1], ['2007',1,1,1,1], ['2008',1,1,1,1], ['2009',1,1,1,1],
    ['2010',1,1,1,1], ['2011',1,1,1,1], ['2012',1,1,1,1], ['2013',1,1,1,1], ['2014',1,1,1,1], ['2015',1,1,1,1], ['2016',1,1,1,1], ['2017',1,1,1,1], ['2018',1,1,1,1]
])

var pieoptions = {
    'title': "Revision Numbers By Different User Type",
    'width': 900,
    'height': 800
};
function drawColumn(){


    var graphData = google.visualization.arrayToDataTable(columndata);
    var chart = new google.visualization.ColumnChart($("#columnOverall")[0]);
    chart.draw(graphData, columnoptions);
}
function drawIndividualColumn(){


    var graphDataI = google.visualization.arrayToDataTable(columndataI);
    var chartI = new google.visualization.ColumnChart($("#columnIndividual")[0]);
    chartI.draw(graphDataI, columnoptions);
}

function drawPie() {


    var piedata = [
        ['User Type', 'The number of users'],
        ['Anonymous', Anons],
        ['Administrator', Admins],
        ['Bot', Bots],
        ['Regular user', Regs]
    ]
    var graphData = google.visualization.arrayToDataTable(piedata);
    var chart = new google.visualization.PieChart($("#pieOverall")[0]);
    chart.draw(graphData, pieoptions);
}

    function drawIndividualPie() {

        var piedataI = [
            ['User Type', 'The number of users'],
            ['Anonymous', Anons1],
            ['Administrator', Admins1],
            ['Bot', Bots1],
            ['Regular user', Regs1]
        ]

        var graphDataI = google.visualization.arrayToDataTable(piedataI);
        var chartI = new google.visualization.PieChart($("#pieIndividual")[0]);
        chartI.draw(graphDataI, pieoptions);
    }


    $(document).ready(function () {

        $.get('/analytics/getHighestRevid3', null, function (rdata) {

            for (var i = 0; i < 3; i++) {
                $("#getHighestRevid").append("Title: " + rdata[i]._id + ", ")
                $("#getHighestRevid").append("Number Of Revisions: " + rdata[i].numOfRevid + "<br>")

            }
        });
        $.get('/analytics/getLowestRevid3', null, function (rdata) {
            //if (rdata.length == 1) {
            for (var i = 0; i < 3; i++) {
                $("#getLowestRevid").append("Title: " + rdata[i]._id + ", ")
                $("#getLowestRevid").append("Number Of Revisions: " + rdata[i].numOfRevid + "<br>")

            }
        });



        $("#getNumber").click(function (e) {
            $("#getHighestRevid3").empty()//reset while click
            $("#getLowestRevid3").empty()
            $("#getHighestRevid").empty()
            $("#getLowestRevid").empty()

            var parameters = {inputNumber: $('#inputNumber').val()};
            if ($('#inputNumber').val()<0){ alert("This number must be positive!")}
            //get highest revisions from controllers, using 'parameters' to transfer the input value
            $.get('/analytics/getHighestRevid', parameters, function (rdata) {

                for (var i = 0; i < rdata.length; i++) {
                    $("#getHighestRevid").append("Title: " + rdata[i]._id + ", ")
                    $("#getHighestRevid").append("Number Of Revisions: " + rdata[i].numOfRevid + "<br>")

                }
            });
            $.get('/analytics/getLowestRevid', parameters, function (rdata) {

                for (var i = 0; i < rdata.length; i++) {
                    $("#getLowestRevid").append("Title: " + rdata[i]._id + ", ")
                    $("#getLowestRevid").append("Number Of Revisions: " + rdata[i].numOfRevid + "<br>")

                }
            });
            
        });
        
        //get the largest group of users, query with the users amount. 
        $.getJSON('/analytics/getLargestGroupOfUsers', null, function (rdata) {
            if (rdata.length == 1) {
                for (var i = 0; i < rdata.length; i++) {
                    $("#getLargestGroupOfUsers").append("Title: " + rdata[i]._id + ", ")
                    $("#getLargestGroupOfUsers").append("Number " + rdata[i].number + "<br>")
                }
            }
        });
        $.getJSON('/analytics/getSmallestGroupOfUsers', null, function (rdata) {
            if (rdata.length == 1) {
                for (var i = 0; i < rdata.length; i++) {
                    $("#getSmallestGroupOfUsers").append("Title: " + rdata[i]._id + ", ")
                    $("#getSmallestGroupOfUsers").append("Number " + rdata[i].number + "<br>")
                }
            }
        });
        // get top 3 longest history title.
            $.getJSON('/analytics/getLongestHistory', null, function (rdata) {
                if (rdata.length == 3) {
                    for (var i = 0; i < rdata.length; i++) {
                        $("#tableLongestHistory").append("Title: " + rdata[i].title + ", ")
                        $("#tableLongestHistory").append("Create Time: " + rdata[i].timestamp + "<br>")

                    }
                }
            });

            $.getJSON('/analytics/getShortestHistory', null, function (rdata) {
                if (rdata.length == 3) {
                    for (var i = 0; i < rdata.length; i++) {
                        $("#tableShortestHistory").append("Title: " + rdata[i].title + ", ")
                        $("#tableShortestHistory").append("Create Time: " + rdata[i].timestamp + "<br>")
                    }
                }
            });

            //using the anonymous/admins/bots/regs user amount by year to form the column chart. Using "for" loop and "if" to keep the years are correct. 
            $.getJSON('/analytics/getAnonsByYear', null, function (rdata) {

                for (var i = 0; i < rdata.length; i++) {
                    $("#getAnonsByYear").append("Year: " + rdata[i]._id + ", ");
                    $("#getAnonsByYear").append("Num of Anons: " + rdata[i].numofAnons + "<br>");
                    for (var j = 0; j < columndata.length; j++) {
                        if (rdata[i]._id == columndata[j][0]) {
                            columndata[i + 1][1] = rdata[i].numofAnons
                        }
                    }
                }


                $.getJSON('/analytics/getAdminsByYear', null, function (rdata) {
                    for (var i = 0; i < rdata.length; i++) {
                        $("#getAdminsByYear").append("Year: " + rdata[i]._id + ", ")
                        $("#getAdminsByYear").append("Num of Admins: " + rdata[i].numofAdmins + "<br>")
                        for (var j = 0; j < columndata.length; j++) {
                            if (rdata[i]._id == columndata[j][0]) {
                                columndata[i + 1][2] = parseInt(rdata[i].numofAdmins)
                            }
                        }//columndata[i+1][2]=rdata[i].numofAdmins
                    }

                    $.getJSON('/analytics/getBotsByYear', null, function (rdata) {
                        for (var i = 0; i < rdata.length; i++) {
                            $("#getBotsByYear").append("Year: " + rdata[i]._id + ", ")
                            $("#getBotsByYear").append("Num of Bots: " + rdata[i].numofBots + "<br>")
                            console.log(rdata[i]._id)
                            console.log(columndata[i + 1][0])
                            for (var j = 0; j < columndata.length; j++) {
                                if (rdata[i]._id == columndata[j][0]) {
                                    columndata[j][3] = parseInt(rdata[i].numofBots)
                                }
                            }
                            //columndata[i+1][3]=rdata[i].numofBots
                        }

                        $.getJSON('/analytics/getRegsByYear', null, function (rdata) {
                            for (var i = 0; i < rdata.length; i++) {
                                $("#getRegsByYear").append("Year: " + rdata[i]._id + ", ")
                                $("#getRegsByYear").append("Num of Regs: " + rdata[i].numofRegs + "<br>")
                                for (var j = 0; j < columndata.length; j++) {
                                    if (rdata[i]._id == columndata[j][0]) {
                                        columndata[i + 1][4] = parseInt(rdata[i].numofRegs)
                                    }
                                }
                                //columndata[i+1][4]=rdata[i].numofRegs
                            }
                            google.charts.setOnLoadCallback(drawColumn);
                        });
                    });
                });

            });

            //get all anon/admin/bot/reg user amount to draw a pie chart
            $.getJSON('/analytics/getAllAnons', null, function (rdata) {//piechart
                for (var i = 0; i < rdata.length; i++) {
                    $("#getAllAnons").append("Num of Anons: " + rdata[i].count + "<br>")
                    Anons = rdata[i].count
                }


                $.getJSON('/analytics/getAllAdmins', null, function (rdata) {
                    for (var i = 0; i < rdata.length; i++) {
                        $("#getAllAdmins").append("Num of Admins: " + rdata[i].count + "<br>")
                        Admins = rdata[0].count
                    }


                    $.getJSON('/analytics/getAllBots', null, function (rdata) {
                        for (var i = 0; i < rdata.length; i++) {
                            $("#getAllBots").append("Num of Bots: " + rdata[i].count + "<br>")
                            Bots = rdata[0].count
                        }


                        $.getJSON('/analytics/getAllRegs', null, function (rdata) {
                            for (var i = 0; i < rdata.length; i++) {
                                $("#getAllRegs").append("Num of Regs: " + rdata[i].count + "<br>")
                                Regs = rdata[0].count
                            }
                            google.charts.setOnLoadCallback(drawPie);
                        });
                    });
                });
            });
            //input "title" to get individual analysis
            $("#getIndividualTitleSubmit").click(function (e) {
                $("#getIndividualTitle").empty()
                $("#getIndividualTitleTop").empty()
                //clean screen while clicking
                var parameters = {inputTitle: $('#inputTitle').val()};
                $.get('/analytics/getIndividualTitle', parameters, function (rdata) {

                    for (var i = 0; i < rdata.length; i++) {
                        $("#getIndividualTitle").append("Title: " + rdata[i]._id + ", ")
                        $("#getIndividualTitle").append("Number Of Revisions: " + rdata[i].numofrevisions + "<br>")
                    }
                });
                $.get('/analytics/getIndividualTitleTop', parameters, function (tdata) {
                    for (var i = 0; i < tdata.length; i++) {
                        $("#getIndividualTitleTop").append("User: " + tdata[i]._id.user + ", ")
                        $("#getIndividualTitleTop").append("Number Of Revisions: " + tdata[i].num + "<br>")
                    }
                });
                //draw a column chart with user type by year
                $.getJSON('/analytics/getIndividualTitleAnonByYear', parameters, function (rdata) {
                    console.log(rdata)
                    for (var i = 0; i < rdata.length; i++) {
                        for (var j = 0; j < columndataI.length; j++) {
                            if (rdata[i]._id == columndataI[j][0]) {
                                console.log(rdata[i].numofAnons)
                                columndataI[i+1][1] = rdata[i].numofAnons
                            }
                        }
                    }
                    $.getJSON('/analytics/getIndividualTitleAdminByYear', parameters, function (rdata) {
                        console.log(rdata)
                        for (var i = 0; i < rdata.length; i++) {
                            for (var j = 0; j < columndataI.length; j++) {
                                if (rdata[i]._id == columndataI[j][0]) {
                                    columndataI[i + 1][2] = rdata[i].numofAdmins
                                }
                            }
                        }
                        $.getJSON('/analytics/getIndividualTitleBotByYear', parameters, function (rdata) {
                            for (var i = 0; i < rdata.length; i++) {
                                for (var j = 0; j < columndataI.length; j++) {
                                    if (rdata[i]._id == columndataI[j][0]) {
                                        columndataI[i + 1][3] = rdata[i].numofBots
                                    }
                                }
                            }
                            $.getJSON('/analytics/getIndividualTitleRegByYear', parameters, function (rdata) {
                                for (var i = 0; i < rdata.length; i++) {
                                    for (var j = 0; j < columndataI.length; j++) {
                                        if (rdata[i]._id == columndataI[j][0]) {
                                            columndataI[i + 1][4] = rdata[i].numofRegs
                                        }
                                    }
                                }
                                google.charts.setOnLoadCallback(drawIndividualColumn);

                            });
                        });
                    });
                });
              //draw a piechart with user type and a title name
                $.getJSON('/analytics/getIndividualTitleAnon', parameters, function (rdata) {
                    for (var i = 0; i < rdata.length; i++) {
                        $("#getIndividualTitleAnon").append("Num of Anons: " + rdata[i].numofAnons + "<br>")
                        Anons1 = rdata[i].numofAnons
                    }


                    $.getJSON('/analytics/getIndividualTitleAdmin', parameters, function (rdata) {
                        for (var i = 0; i < rdata.length; i++) {
                            $("#getIndividualTitleAdmin").append("Num of Admins: " + rdata[i].numofAdmins + "<br>")
                            Admins1 = rdata[0].numofAdmins
                        }


                        $.getJSON('/analytics/getIndividualTitleBot', parameters, function (rdata) {
                            for (var i = 0; i < rdata.length; i++) {
                                $("#getIndividualTitleBot").append("Num of Bots: " + rdata[i].numofBots + "<br>")
                                Bots1 = rdata[0].numofBots
                            }


                            $.getJSON('/analytics/getIndividualTitleReg', parameters, function (rdata) {
                                for (var i = 0; i < rdata.length; i++) {
                                    $("#getIndividualTitleReg").append("Num of Regs: " + rdata[i].numofRegs + "<br>")
                                    Regs1 = rdata[0].numofRegs
                                }

                                google.charts.setOnLoadCallback(drawIndividualPie);


                            });
                        });
                    });
                });
            });
            //author analysis
        $("#getAuthorSubmit").click(function (e) {
            $("#getAuthorRevisions").empty()
            $("#getAuthorAnalysis").empty()
            var parameters = {inputAuthor: $('#inputAuthor').val()};
            $.get('/analytics/getAuthorRevisions', parameters, function (rdata) {
                    $("#getAuthorRevisions").append("Author name: " + rdata[0]._id + ", ")
                    $("#getAuthorRevisions").append("Number Of Revisions: " + rdata[0].count + "<br>")
            });
            $.get('/analytics/getAuthorAnalysis', parameters, function (rdata) {
                for (var i = 0; i < rdata.length; i++) {
                $("#getAuthorAnalysis").append("Article Name: " + rdata[i]._id.title + ", ")
                $("#getAuthorAnalysis").append("Revisions: " + rdata[i].count + "<br>")}
            });

        });


        })
