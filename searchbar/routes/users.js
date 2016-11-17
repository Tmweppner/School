var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // User.findBySchool(req.user._json.school, function(err, user){
  //   var out = req.user._json;
  //   if(user){
  //     	console.log("increment count of school");
  // onsole.log("check if tutr is at the school");
  //
  //
  // /increment count of school
  //     //check if school is available and if so convey that info
  //   }
  //   else{
  // onsole.log("you spelled it wrong");
  //     //suggest different spelling/correct name of school
  //   }
  // });

  res.send('respond with a resource');
});
// router.get('/',function(req,res,next){
//   User.findBySchool(rew.user._json.school,function(err,user){
//     if(user && user.available == true){
//       //go to school available page
//     }
//     else{
//       res.render(err, {
//         message: "tutr is not at your school, to change that ....."
//       });
//     }
//   });
// });


module.exports = router;
