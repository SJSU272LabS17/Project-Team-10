var express = require("express");

//import mongodb package
var mongodb = require("mongodb");

//MongoDB connection URL - mongodb://host:port/dbName
var dbHost = "mongodb://localhost:27017/survey_database";

//DB Object
var dbObject;

//get instance of MongoClient to establish connection
var MongoClient = mongodb.MongoClient;


//Connecting to the Mongodb instance.
//Make sure your mongodb daemon mongod is running on port 27017 on localhost
MongoClient.connect(dbHost, function (err, db) {
    if (err) throw err;
    dbObject = db;
});

function getData(responseObj) {

    dbObject.collection("employee_satisfaction").find({}).toArray(function (err, docs) {
        if (err) throw err;
        var Response = [];
        //for ( index in docs){
        var doc = docs[0];
        var ResponseLabel = "Response";
        //category array
        var res1 = doc['very_Satisfied'];
        //series 1 values array
        var res2 = doc['satisfied'];
        //series 2 values array
        var res3 = doc['neutral'];
        var res4 = doc['dissatisfied'];
        var res5 = doc['very_Dissatisfied'];
        //var Response = 0;
        Response.push({"label": ResponseLabel});

        var dataset = [
            {
                "label": "Very Satisfied",
                "value": res1
            },
            {
                "label": "Satisfied",
                "value": res2
            },
            {
                "label": "Neutral",
                "value": res3
            },
            {
                "label": "Dissatisfied",
                "value": res4
            },
            {
                "label": "Very Dissatisfied",
                "value": res5
            }
        ];

        var employee_satistaction = {
            "dataset": dataset,
            "categories": Response
        };

        dbObject.collection("question52").find({}).toArray(function (err, docs) {
            if (err) throw err;
            //immediate supervisor
            var Response = [];
            //for ( index in docs){
            var doc = docs[0];
            var ResponseLabel = "Response";
            //category array
            var res1 = doc['very_Good'];
            //series 1 values array
            var res2 = doc['good'];
            //series 2 values array
            var res3 = doc['fair'];
            var res4 = doc['poor'];
            var res5 = doc['very_Poor'];
            //var Response = 0;
            Response.push({"label": ResponseLabel});

            var dataset = [
                {
                    "label": "Very Good",
                    "value": res1
                },
                {
                    "label": "Good",
                    "value": res2
                },
                {
                    "label": "Fair",
                    "value": res3
                },
                {
                    "label": "Poor",
                    "value": res4
                },
                {
                    "label": "Very Poor",
                    "value": res5
                }
            ];

            var immediate_supervisor = {
                "dataset": dataset,
                "categories": Response
            };
            dbObject.collection("work_life_set2").find({}).toArray(function (err, docs) {
                if (err) throw err;
                //immediate supervisor responses

                var Response = [];
                var doc = docs[0];
                var ResponseLabel = "Response";
                var res1 = doc['very_Satisfied'];
                var res2 = doc['satisfied'];
                var res3 = doc['neutral'];
                var res4 = doc['dissatisfied'];
                var res5 = doc['very_Dissatisfied'];
                var res6 = doc['no_Basis'];

                Response.push({"label": ResponseLabel});

                var dataset = [
                    {
                        "label": "Very Good",
                        "value": res1
                    },
                    {
                        "label": "Good",
                        "value": res2
                    },
                    {
                        "label": "Fair",
                        "value": res3
                    },
                    {
                        "label": "Poor",
                        "value": res4
                    },
                    {
                        "label": "Very Poor",
                        "value": res5
                    },
                    {
                        "label": "No Basis to Judge",
                        "value": res6
                    }
                ];

                var work_life = {
                    "dataset": dataset,
                    "categories": Response
                };
                dbObject.collection("career_growth").find({}).toArray(function (err, docs) {
                    if (err) throw err;
                    //career growth

                    var Response = [];
                    var doc = docs[0];
                    var ResponseLabel = "Response";
                    var res1 = doc['strongly_disagree'];
                    var res2 = doc['disagree'];
                    var res3 = doc['neutral'];
                    var res4 = doc['agree'];
                    var res5 = doc['strongly_agree'];

                    Response.push({"label": ResponseLabel});

                    var dataset = [
                        {
                            "label": "Strongly Disagree",
                            "value": res1
                        },
                        {
                            "label": "Disagree",
                            "value": res2
                        },
                        {
                            "label": "Neither Agree nor Disagree",
                            "value": res3
                        },
                        {
                            "label": "Agree",
                            "value": res4
                        },
                        {
                            "label": "Strongly Agree",
                            "value": res5
                        }
                    ];

                    var career_growth = {
                        "dataset": dataset,
                        "categories": Response
                    };
                    dbObject.collection("survey_viability").find({}).toArray(function (err, docs) {
                        if (err) throw err;
                        //immediate supervisor responses

                        var Response = [];
                        var doc = docs[0];
                        var ResponseLabel = "Response";
                        var res1 = doc['strongly_disagree'];
                        var res2 = doc['disagree'];
                        var res3 = doc['neutral'];
                        var res4 = doc['agree'];
                        var res5 = doc['strongly_agree'];
                        var res6 = doc['not_sure'];

                        Response.push({"label": ResponseLabel});

                        var dataset = [
                            {
                                "label": "Strongly Disagree",
                                "value": res1
                            },
                            {
                                "label": "Disagree",
                                "value": res2
                            },
                            {
                                "label": "Neither Agree nor Disagree",
                                "value": res3
                            },
                            {
                                "label": "Agree",
                                "value": res4
                            },
                            {
                                "label": "Strongly Agree",
                                "value": res5
                            },
                            {
                                "label": "Do Not Know",
                                "value": res6
                            }
                        ];

                        var survey_viability = {
                            "dataset": dataset,
                            "categories": Response
                        };

                        dbObject.collection("promotion_sentiment").find({}).toArray(function (err, docs) {
                            if (err) throw err;
                            //fair promotion response

                            var Response = [];
                            var doc = docs[0];
                            var ResponseLabel = "Response";
                            var res1 = doc['strongly_disagree'];
                            var res2 = doc['disagree'];
                            var res3 = doc['neutral'];
                            var res4 = doc['agree'];
                            var res5 = doc['strongly_agree'];
                            var res6 = doc['not_sure'];

                            Response.push({"label": ResponseLabel});

                            var dataset = [
                                {
                                    "label": "Strongly Disagree",
                                    "value": res1
                                },
                                {
                                    "label": "Disagree",
                                    "value": res2
                                },
                                {
                                    "label": "Neither Agree nor Disagree",
                                    "value": res3
                                },
                                {
                                    "label": "Agree",
                                    "value": res4
                                },
                                {
                                    "label": "Strongly Agree",
                                    "value": res5
                                },
                                {
                                    "label": "Do Not Know",
                                    "value": res6
                                }
                            ];

                            var promotion_sentiment = {
                                "dataset": dataset,
                                "categories": Response
                            };

                            dbObject.collection("appraisal").find({}).toArray(function (err, docs) {
                                if (err) throw err;
                                //fair promotion response

                                var Response = [];
                                var doc = docs[0];
                                var ResponseLabel = "Response";
                                var res1 = doc['strongly_disagree'];
                                var res2 = doc['disagree'];
                                var res3 = doc['neutral'];
                                var res4 = doc['agree'];
                                var res5 = doc['strongly_agree'];
                                var res6 = doc['not_sure'];

                                Response.push({"label": ResponseLabel});

                                var dataset = [
                                    {
                                        "label": "Strongly Disagree",
                                        "value": res1
                                    },
                                    {
                                        "label": "Disagree",
                                        "value": res2
                                    },
                                    {
                                        "label": "Neither Agree nor Disagree",
                                        "value": res3
                                    },
                                    {
                                        "label": "Agree",
                                        "value": res4
                                    },
                                    {
                                        "label": "Strongly Agree",
                                        "value": res5
                                    },
                                    {
                                        "label": "Do Not Know",
                                        "value": res6
                                    }
                                ];

                                var fair_appraisal = {
                                    "dataset": dataset,
                                    "categories": Response
                                };

                                dbObject.collection("work_unit_sentiment").find({}).toArray(function (err, docs) {
                                    if (err) throw err;
                                    //fair promotion response

                                    var Response = [];
                                    var doc = docs[0];
                                    var ResponseLabel = "Response";
                                    var res1 = doc['very_poor'];
                                    var res2 = doc['poor'];
                                    var res3 = doc['fair'];
                                    var res4 = doc['good'];
                                    var res5 = doc['very_good'];


                                    Response.push({"label": ResponseLabel});

                                    var dataset = [
                                        {
                                            "label": "Strongly Disagree",
                                            "value": res1
                                        },
                                        {
                                            "label": "Disagree",
                                            "value": res2
                                        },
                                        {
                                            "label": "Neither Agree nor Disagree",
                                            "value": res3
                                        },
                                        {
                                            "label": "Agree",
                                            "value": res4
                                        },
                                        {
                                            "label": "Strongly Agree",
                                            "value": res5
                                        }
                                    ];

                                    var work_unit_sentiment = {
                                        "dataset": dataset,
                                        "categories": Response
                                    };

                                    dbObject.collection("question60").find({}).toArray(function (err, docs) {
                                        if (err) throw err;
                                        //immediate supervisor
                                        var Response = [];
                                        //for ( index in docs){
                                        var doc = docs[0];
                                        var ResponseLabel = "Response";
                                        //category array
                                        var res1 = doc['very_Good'];
                                        //series 1 values array
                                        var res2 = doc['good'];
                                        //series 2 values array
                                        var res3 = doc['fair'];
                                        var res4 = doc['poor'];
                                        var res5 = doc['very_Poor'];

                                        Response.push({"label": ResponseLabel});

                                        var dataset = [
                                            {
                                                "label": "Very Good",
                                                "value": res1
                                            },
                                            {
                                                "label": "Good",
                                                "value": res2
                                            },
                                            {
                                                "label": "Fair",
                                                "value": res3
                                            },
                                            {
                                                "label": "Poor",
                                                "value": res4
                                            },
                                            {
                                                "label": "Very Poor",
                                                "value": res5
                                            }
                                        ];

                                        var manager_sentiment = {
                                            "dataset": dataset,
                                            "categories": Response
                                        };

                                        var response =
                                            {
                                                "employee_satisfaction": employee_satistaction,

                                                "immediate_supervisor": immediate_supervisor,

                                                "work_life": work_life,

                                                "career_growth": career_growth,

                                                "survey_viability": survey_viability,

                                                "promotion_sentiment": promotion_sentiment,

                                                "fair_appraisal": fair_appraisal,

                                                "work_unit_sentiment": work_unit_sentiment,

                                                "manager_sentiment": manager_sentiment
                                            };

                                        responseObj.json(response);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}
//create express app
var app = express();

//NPM Module to integrate Handlerbars UI template engine with Express
var exphbs = require('express-handlebars');

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Defining middleware to serve static files
app.use('/public', express.static('public'));

app.get("/employee", function (req, res) {
    getData(res);
});

app.get("/", function (req, res) {
    res.render("chart_new");
});

app.listen("3300", function () {
    console.log('Server up: http://localhost:3300');
});
