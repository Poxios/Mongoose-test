// app.js

// [LOAD PACKAGES]
var express = require("express");
var app = express();
var mongoose = require("mongoose");

// [ CONFIGURE mongoose ]

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function () {
  // CONNECTED TO MONGODB SERVER
  console.log("Connected to mongod server");
});

mongoose.connect("mongodb://localhost/mongodb_tutorial", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// [CONFIGURE APP TO USE bodyParser]
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [CONFIGURE SERVER PORT]
var port = process.env.PORT || 8080;

// [CONFIGURE ROUTER]
var Book = require("./models/book");
var router = require("./routes")(app, Book);


// [RUN SERVER]
var server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});
