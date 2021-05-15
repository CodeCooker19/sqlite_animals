/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const AnimalTypeController = require('../../controller/animalTypeController');
const animalTypeController = new AnimalTypeController();

/**
 * AnimalType Entity routes
 */

router.post('/create', function (req, res) {
  animalTypeController.createAnimalType(req, res);
});

router.get('/', function (req, res) {
  animalTypeController.getAnimalTypes(req, res);
});

router.get('/:id', function (req, res) {
  animalTypeController.getAnimalTypeById(req, res);
});

router.put('/:id', function (req, res) {
  animalTypeController.updateAnimalType(req, res);
});

router.delete('/:id', function (req, res) {
  animalTypeController.deleteAnimalType(req, res);
});

module.exports = router;