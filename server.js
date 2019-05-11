var express  = require('express');
var app      = express();
var port     = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose');
var passport = require('passport');
var User = require('./models/user')
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());mongoose.connect('mongodb://localhost/loginapp');
mongoose.connect('mongodb://localhost/loginapp');
var db = mongoose.connection;

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Register User
app.post('/register', function(req, res){
  var password = req.body.password;
  var password2 = req.body.password2;

  if (password == password2){
    var newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });

    User.createUser(newUser, function(err, user){
      if(err) throw err;
      res.send(user).end()
    });
  } else{
    res.status(500).send("{errors: \"Passwords don't match\"}").end()
  }
});

app.listen(3000, () => console.log('App listening on port 3000!'))