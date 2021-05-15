const express = require('express');
const router = express.Router();

const AnimalsController = require('../../controller/animalsController');
const animalsController = new AnimalsController();

/**
 * Animals Entity routes
 */
router.post('/animals', function (req, res) {
  animalsController.createAnimal(req, res);
});

router.get('/animals', function (req, res) {
  animalsController.getAnimals(req, res);
});

router.get('/animals/:id', function (req, res) {
  animalsController.getAnimalById(req, res);
});

router.put('/animals/:id', function (req, res) {
  animalsController.updateAnimal(req, res);
});

router.delete('/animals/:id', function (req, res) {
  animalsController.deleteAnimal(req, res);
});

module.exports = router;