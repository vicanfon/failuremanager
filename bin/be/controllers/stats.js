var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    if (req.query.company) {
      //get project by id
      dal.stats.getByCompany(req.query.company, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({message: "Missing required fields"})
    }
  }
}
