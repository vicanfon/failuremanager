var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    if (req.query.id) {
      //get project by id
      dal.interventions.getById(req.query.id, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })

    } else {
      //get all projects by project
      dal.interventions.getByCompany(req.query.company, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    }
    //res.status(201).json({awesome: "working"})
  },
  create: function (req, res) {
    //body: {name,description}
    if (req.body.solution && req.body.comment && req.body.timestamp && req.body.duration && req.body.status) {
      dal.interventions.create(req.body.solution, req.body.comment, req.body.timestamp, req.body.duration, req.body.status, function (err, answer) {
        if (!err) {
          res.status(201).json(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({ message: "Missing required fields" })
    }
  },
  update: function (req, res) {
    // console.log("BODY", req.body)
    if (req.query.id && req.body.solution && req.body.comment && req.body.timestamp && req.body.duration && req.body.status) {
      dal.interventions.update(req.query.id, req.body.solution, req.body.comment, req.body.timestamp, req.body.duration, req.body.status, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({ message: "Missing required field" })
    }
  },
  delete: function (req, res) {
    if (req.query.id) {
      dal.interventions.delete(req.query.id, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      res.status(422).json({ message: "Missing required field" })
    }
  }
}
