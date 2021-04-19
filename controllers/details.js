const Valuable = require("../models/valuable");

function create(req, res) {
  Valuable.findById(req.params.id, function (err, valuable) {
    Valuable.details.push(req.body);
    valuable.save(function (err) {
      res.redirect(`/valuables/${valuable._id}`);
    });
  });
}

module.exports = {
  create,
};