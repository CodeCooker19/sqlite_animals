/**
 * Express Router configuration
 */
const express = require('express');
const router = express.Router();

/* API routes */
// router.use('/animals', require('./api/animals'));
router.use('/animaltype', require('./api/animalType'));
// router.use('/owneranimalassigness', require('./api/ownerAnimalAssignees'));
// router.use('/owners', require('./api/owners'));

module.exports = router;