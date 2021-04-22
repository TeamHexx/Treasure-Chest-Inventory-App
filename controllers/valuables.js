const Valuable = require("../models/valuable");

module.exports = {
  index,
  show,
  new: newValuable,
  create,
};

function index(req, res) {
  Valuable.find({}, function (err, valuables) {
    res.render("valuables/index", { title: "Inside Your Treasure Chest", valuables });
  });
}

function show(req, res) {
  Valuable.findById(req.params.id, function (err, valuable) {
    res.render("valuables/show", { title: "Details", valuable });
  });
}

function newValuable (req, res) {
  res.render("valuables/new", { title: "Add Valuable" });
}

function create(req, res) {
  // remove empty/blank inputs from req.body
  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }

  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.warranty = !!req.body.warranty;


  Valuable.create(req.body, function (err, valuable) {
    // one way to handle errors
    if (err) return res.redirect("/valuables/new");
    // for now, redirect right back to the "new" view
    res.redirect("/valuables");
  });
}