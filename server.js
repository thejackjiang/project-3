const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport = require("passport");
var path = require('path');
var LocalStrategy = require('passport-local').Strategy;
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;



app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/indieLA");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(require('cookie-parser')());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setup Sessions Middleware
app.use(require('express-session')({
  secret: 'keyboard cat', resave: true, saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve Static Files Middleware
app.use(express.static("client/build", {'index': false}));
app.use(express.static("public", {'index': false}));

// Handlebars
app.engine( "handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
app.use(require("./routes/authRoutes"));
// app.use(require("./routes/htmlRoutes"));

app.use(ensureLoggedIn('/login'), require("./routes/apiRoutes"));
app.use(ensureLoggedIn('/login'), function(req, res, next) {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// set strategies and serializations
passport.use(new LocalStrategy(db.User.authenticate));
passport.serializeUser(db.User.serializeUser);
passport.deserializeUser(db.User.deserializeUser);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
