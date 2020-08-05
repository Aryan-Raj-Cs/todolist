
const User = require("../models/auth");



exports.postNote = (req, res) => {
  const { title, note,date } = req.body;
  console.log(req.body);
  const newUser = new User({ title, note ,date});
  newUser.save((err, userData) => {
    if (err) {
      return res.status(400).json({
        error: "Something went error.",
      });
    }
    //console.log(user);
    res.json({
      message: `Hey  welcome to the app!!`,
    });
  });

};


exports.getAll = (__, res) => {
  User.find({}).exec(
    (err, users) => {
      if (err) {
        return res.status(400).json({
          error: "Something went wrong. Please try again.",
        });
      }

      return res.json({
        result: users,
      });
    }
  );
};

exports.Delete =  (req, res)=> {
  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).json({user: user.title ,result:"successeful"});
  });
};

exports.edit =  (req, res)=> {
  User.findByIdAndUpdate({_id:req.body.id},{title:req.body.title,note:req.body.note}, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).json({user: user.title ,result:"successeful"});
  });
};

exports.search =  (req, res)=> {
  let val=req.body.title;
  console.log(val);
  User.find({title:{$regex: req.body.title,$options: 'i'}}, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");

    
    res.status(200).json({user: user
      ,result:"successeful"});

  });


  // User.find({}, function (err, user) {
  //     if (err) return res.status(500).send("There was a problem deleting the user.");
  
      
  //     res.status(200).json({user: user
  //       ,result:"successeful"});
  
  //   });

};

exports.complete =  (req, res)=> {
  User.findByIdAndUpdate({_id:req.body.id},{complete:true}, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).json({user: user,result:"successeful"});
  });
};