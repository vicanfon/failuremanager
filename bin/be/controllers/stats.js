var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    if (req.query.company != 'mass') {
      //get project by id
      dal.stats.getByCompany(req.query.company, function (err, answer) {
        if (!err) {
          dal.stats.getMaxFailureByCompany(req.query.company, function (err2, answer2) {
            if (!err2) {
              dal.stats.getTimeStatsByCompany(req.query.company,function (err3, answer3) {
                if (!err3) {
                  res.status(200).send({alarmstats: answer, failurestats: answer2, timestats: answer3});
                }else{
                  res.status(500).end();
                }
              })
          }else{
              res.status(500).end();
            }
          })
        } else {
          res.status(500).end();
        }
      })
    }else if (req.query.company) {
      //get project by id
      dal.stats.get(function (err, answer) {
        if (!err) {
          dal.stats.getMaxFailure(function (err2, answer2) {
            if (!err2) {
              dal.stats.getTimeStats(function (err3, answer3) {
                if (!err3) {
                  res.status(200).send({alarmstats: answer, failurestats: answer2, timestats: answer3});
                }else{
                  res.status(500).end();
                }
              })
            }else{
              res.status(500).end();
            }
          })
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({message: "Missing required fields"})
    }
  }
}
