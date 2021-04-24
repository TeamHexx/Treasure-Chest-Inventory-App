const valuables = require("./valuables");

module.exports = {
    index,
    
};

function index(req, res) {
    res.render('valuables/index', {
        valuables: valuables.getAll()
    });

}

