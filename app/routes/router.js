/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();
const animals = require('./api/animals');
const animalType = require('./api/animalType');
const ownerAnimalAssignees = require('./api/ownerAnimalAssignees');
const owners = require('./api/owners');

/* API routes */
router.use('/animals', animals);
router.use('/animaltype', animalType);
router.use('/owneranimalassignees', ownerAnimalAssignees);
router.use('/owners', owners);

module.exports = router;