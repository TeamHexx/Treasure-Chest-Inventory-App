const Valuable = require("../models/valuable");

module.exports = {
  index,
  show,
  new: newValuable,
  create,
  delete: deleteValuable,
  edit,
  add,
  update,
  addDetails,
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
  res.render("valuables/new", { title: "Add an item" });
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

 
function deleteValuable(req, res) {
  Valuable.findByIdAndDelete(req.params.id, function(err, valuable) {
      res.redirect(`/valuables`);
  });
}
function edit(req, res) {
  Valuable.findById(req.params.id, function(err, valuable) {
    res.render('valuables/edit', { title: "Edit details", valuable: valuable})
  });
  
    // valuable: Valuable.getOne(req.params.id),
    
  };


function add(req, res) {
  const valuableId = req.params.id;
  res.render('valuables/add', { 
    valuableId, 
    title: 'Add Details'
  });
}
function addDetails(req, res) {
  req.body.done = false;
  console.log('hit the add function')
  
  Valuable.findById(req.params.id, function (err, valuable) {
    valuable.details.push(req.body);
    valuable.save(function (err) {
      res.redirect(`/valuables`)
    });
  });
}
function update(req, res) {
  // console.log('hit the update function')
  // console.log(req.body, 'update req.body')
  req.body.done = false;
  Valuable.findById(req.params.id, function(err, valuable) {
    console.log('valuable to update', valuable.details[0]);
    valuable.details[0].serialNumber = req.body.serialNumber
    valuable.details[0].description = req.body.description
    valuable.details[0].color = req.body.color
    valuable.details[0].countryOrigin = req.body.countryOrigin
    valuable.details[0].year = req.body.year
    valuable.details[0].pictures = req.body.pictures
    console.log(valuable.details[0], 'after update')
    valuable.save(function (err) {
      res.redirect(`/valuables/${valuable._id}`);
    });
  });
}
