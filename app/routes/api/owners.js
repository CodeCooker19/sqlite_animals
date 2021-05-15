/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const OwnersController = require('../../controller/ownersController');
const ownersController = new OwnersController();

/**
 * Owners Entity routes
 */

router.post('/create', function (req, res) {
  ownersController.createOwnerAnimalAssignee(req, res);
});

router.get('/', function (req, res) {
  ownersController.getOwnerAnimalAssignees(req, res);
});

router.get('/:id', function (req, res) {
  ownersController.getOwnerAnimalAssigneeById(req, res);
});

router.put('/:id', function (req, res) {
  ownersController.updateOwnerAnimalAssignee(req, res);
});

router.delete('/:id', function (req, res) {
  ownersController.deleteOwnerAnimalAssignee(req, res);
});

module.exports = router;