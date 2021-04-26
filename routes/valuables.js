const express = require('express');
const router = express.Router();
const valuablesCtrl = require('../controllers/valuables');

router.get('/', valuablesCtrl.index);
router.get('/new', valuablesCtrl.new);
router.get('/:id', valuablesCtrl.show);
router.post('/', valuablesCtrl.create);
router.delete('/:id', valuablesCtrl.delete);
router.get('/:id/edit', valuablesCtrl.edit);
router.put('/:id', valuablesCtrl.update);

module.exports = router;