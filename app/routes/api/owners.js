/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const OwnersController = require('../../controller/ownersController');
const ownersController = new OwnersController();

/**
 * Owners Entity routes
 */

router.post('/owners', function (req, res) {
  ownersController.createOwnerAnimalAssignee(req, res);
});

router.get('/owners', function (req, res) {
  ownersController.getOwnerAnimalAssignees(req, res);
});

router.get('/owners/:id', function (req, res) {
  ownersController.getOwnerAnimalAssigneeById(req, res);
});

router.put('/owners/:id', function (req, res) {
  ownersController.updateOwnerAnimalAssignee(req, res);
});

router.delete('/owners/:id', function (req, res) {
  ownersController.deleteOwnerAnimalAssignee(req, res);
});

module.exports = router;