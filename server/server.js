var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var USERS_COLLECTION = "users";

var app = express();
var cors = require('cors');
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cookieParser());


// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/test",
{useUnifiedTopology: true}, function (err, client) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = client.db();
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 8083, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});


// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

app.get("/api/users", function(req, res) {
    db.collection(USERS_COLLECTION).find({}).toArray(function(err, docs) {
      if (err) {
        handleError(res, err.message, "Failed to get users.");
      } else {
        res.status(200).json(docs);
      }
    });
  });

  app.post("/api/users", function(req, res) {
    var newUser = req.body;
  console.log("new user is"+JSON.stringify(newUser))
    console.log('new user in server: ');
    newUser.createDate = new Date();
  
    if (!req.body.username) {
      handleError(res, "Invalid user input", "Must provide a name.", 400);
    } else {
      db.collection(USERS_COLLECTION).insertOne(newUser, function(err, doc) {
        if (err) {
          handleError(res, err.message, "Failed to create new contact.");
        } else {
          res.status(201).json(doc.ops[0]);
        }
      });
    }
  });
  