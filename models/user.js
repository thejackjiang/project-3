module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: DataTypes.STRING,
      password: DataTypes.TEXT
//     });
  
//     // Class methods for use in passport
//     User.authenticate = function(username, password, done) {
//       console.log('hi from authenticate');
//       console.log(username, password);
  
//       User.findOne({ where: {username: username} }).then(function(user) {
//         if (!user) { return done(null, false); }
//         if (user.password !== password) { return done(null, false); }
//         console.log('we found a user, ', user);
//         return done(null, user);
//       }).catch(function(err) {
//         return done(err);
//       });
//     };
  
//     User.serializeUser = function(user, done) {
//       console.log('hi from serializeUser');
//       done(null, user.id);
//     };
  
//     User.deserializeUser = function(id, done) {
//       console.log('hi from deserializeUser');
//       User.findOne({ where: {id: id} }).then(function(user){
//         console.log('found user in deserializeUser');
//         done(null, user);
//       }).catch(function(err) {
//         done(err);
      });
    };
    
    // return User;
