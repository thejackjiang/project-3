const express = require("express");
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
require("dotenv").config();
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var passport = require("passport");
var path = require('path');
var LocalStrategy = require('passport-local').Strategy;
// var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var User = require('./models/user');
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/node-auth')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/indieLA");

// Start the API server
// app.listen(PORT, function() {
//   console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

var db = require("./models");

var app = express();

// // Middleware
// app.use(require('cookie-parser')());
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

// app.use(ensureLoggedIn('/login'), require("./routes/apiRoutes"));
// app.use(ensureLoggedIn('/login'), function(req, res, next) {
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });

// set strategies and serializations
// passport.use(new LocalStrategy(db.User.authenticate));
// passport.serializeUser(db.User.serializeUser);
// passport.deserializeUser(db.User.deserializeUser);


var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/


// urrr new code for passport
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

module.exports = app;
