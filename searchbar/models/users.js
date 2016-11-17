// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var schoolSchema = new Schema({
  instnm: String,
});

// userSchema.statics.incrementCount = function() {
//   // add some stuff to the users name
//   this.count = this.count + 1;
//
//   return this.count;
// };
// userSchema.statics.findBySchool = function(school,cb){
//   this.findOne({school: school},function(err,user){
//     if(err) return cb(err);
//     if(user) return cb(null,user);
//     return cb();
//   });
// };

// the schema is useless so far
// we need to create a model using it
var School = mongoose.model('School', schoolSchema);

// make this available to our users in our Node applications
module.exports = School;
