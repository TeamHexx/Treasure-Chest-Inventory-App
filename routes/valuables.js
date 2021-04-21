const express = require('express');
const router = express.Router();
const valuablesCtrl = require('../controllers/valuables');

router.get('/', valuablesCtrl.index);
router.get('/new', valuablesCtrl.new);
router.get('/:id', valuablesCtrl.show);
router.post('/', valuablesCtrl.create);

module.exports = router;