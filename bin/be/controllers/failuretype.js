var dal = require('../DAL');

module.exports = {
  get: function (req, res) {
    //get project by id
    dal.failuretypes.get(function (err, answer) {
      if (!err) {
        res.status(200).send(answer);
      } else {
        res.status(500).end();
      }
    })
  },
  create: function (req, res) {
    //body: {name,description}
    if (req.body.name) {
      dal.failuretypes.create(req.body.name, function (err, answer) {
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
    if (req.query.id && req.body.name) {
      dal.failuretypes.update(req.query.id, req.body.name, function (err, answer) {
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
      dal.failuretypes.delete(req.query.id, function (err, answer) {
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
