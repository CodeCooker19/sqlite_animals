/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const OwnerAnimalAssigneesController = require('../../controller/ownerAnimalAssigneesController');
const ownerAnimalAssigneesController = new OwnerAnimalAssigneesController();

/**
 * AnimalAssignees Entity routes
 */

router.post('/create', function (req, res) {
  ownerAnimalAssigneesController.createOwnerAnimalAssignee(req, res);
});

router.get('/', function (req, res) {
  ownerAnimalAssigneesController.getOwnerAnimalAssignees(req, res);
});

router.get('/:id', function (req, res) {
  ownerAnimalAssigneesController.getOwnerAnimalAssigneeById(req, res);
});

router.put('/:id', function (req, res) {
  ownerAnimalAssigneesController.updateOwnerAnimalAssignee(req, res);
});

router.delete('/:id', function (req, res) {
  ownerAnimalAssigneesController.deleteOwnerAnimalAssignee(req, res);
});

module.exports = router;