const express = require('express');
const router = express.Router();

const AnimalsController = require('../../controller/animalsController');
const animalsController = new AnimalsController();

/**
 * Animals Entity routes
 */
router.post('/', function (req, res) {
  animalsController.createAnimal(req, res);
});

router.get('/', function (req, res) {
  animalsController.getAnimals(req, res);
});

router.get('/:id', function (req, res) {
  animalsController.getAnimalById(req, res);
});

router.put('/:id', function (req, res) {
  animalsController.updateAnimal(req, res);
});

router.delete('/:id', function (req, res) {
  animalsController.deleteAnimal(req, res);
});

module.exports = router;