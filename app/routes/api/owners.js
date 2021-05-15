/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const OwnersController = require('../../controller/ownersController');
const ownersController = new OwnersController();

/**
 * Owners Entity routes
 */

router.post('/', function (req, res) {
  ownersController.createOwner(req, res);
});

router.get('/', function (req, res) {
  ownersController.getOwners(req, res);
});

router.get('/:id', function (req, res) {
  ownersController.getOwnerById(req, res);
});

router.put('/:id', function (req, res) {
  ownersController.updateOwner(req, res);
});

router.delete('/:id', function (req, res) {
  ownersController.deleteOwner(req, res);
});

module.exports = router;