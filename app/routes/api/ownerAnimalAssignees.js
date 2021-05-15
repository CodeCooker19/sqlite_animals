/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const OwnerAnimalAssigneesController = require('../../controller/ownerAnimalAssigneesController');
const ownerAnimalAssigneesController = new OwnerAnimalAssigneesController();

/**
 * AnimalAssignees Entity routes
 */

router.post('/owner-animals-assignees', function (req, res) {
  ownerAnimalAssigneesController.createOwnerAnimalAssignee(req, res);
});

router.get('/owner-animals-assignees', function (req, res) {
  ownerAnimalAssigneesController.getOwnerAnimalAssignees(req, res);
});

router.get('/owner-animals-assignees/:id', function (req, res) {
  ownerAnimalAssigneesController.getOwnerAnimalAssigneeById(req, res);
});

router.put('/owner-animals-assignees/:id', function (req, res) {
  ownerAnimalAssigneesController.updateOwnerAnimalAssignee(req, res);
});

router.delete('/owner-animals-assignees/:id', function (req, res) {
  ownerAnimalAssigneesController.deleteOwnerAnimalAssignee(req, res);
});

module.exports = router;