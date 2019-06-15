var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    if (req.query.id) {
      //get project by id
      dal.alarms.getById(req.query.id, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })

    } else {
      if (req.query.company !== "mass") {
        //get all projects by project
        dal.alarms.getByCompany(req.query.company, function (err, answer) {
          if (!err) {
            res.status(200).send(answer);
          } else {
            res.status(500).end();
          }
        })
      }else{
        dal.alarms.get(function (err, answer) {
          if (!err) {
            res.status(200).send(answer);
          } else {
            res.status(500).end();
          }
        })
      }
    }
    //res.status(201).json({awesome: "working"})
  },
  create: function (req, res) {
    //body: {name,description}
    if (req.body.timestamp && req.body.status && req.body.code && req.body.name && req.body.type && req.body.machine && req.body.company && req.body.origin) {
      dal.alarms.create(req.body.timestamp, req.body.status, req.body.code, req.body.name, req.body.type, req.body.machine, req.body.company, req.body.origin, req.body.comment, function (err, answer) {
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
    console.log("BODY", req.body)
    if (req.query.id && req.body.timestamp && req.body.status && req.body.code && req.body.type && req.body.machine && req.body.company && req.body.origin) {
      dal.alarms.update(req.query.id, req.body.timestamp, req.body.status, req.body.code, req.body.type, req.body.machine, req.body.company, req.body.origin, req.body.comment, function (err, answer) {
        if (!err) {
          res.status(200).send(answer);
        } else {
          res.status(500).end();
        }
      })
    } else {
      if (req.query.id && req.body.status) {
        dal.alarms.updateStatus(req.query.id, req.body.status, function (err, answer) {
          if (!err) {
            res.status(200).send(answer);
          } else {
            res.status(500).end();
          }
        })
      }else {
        res.status(422).json({ message: "Missing required fields" })
      }
    }
  },
  delete: function (req, res) {
    if (req.query.id) {
      dal.alarms.delete(req.query.id, function (err, answer) {
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
