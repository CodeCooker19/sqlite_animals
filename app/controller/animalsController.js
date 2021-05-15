/* Load Animals Data Access Object */
const AnimalsDao = require('../dao/animalsDao');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Animals entity */
const Animals = require('../model/animals');

/**
 * Animals Controller
 */
class AnimalsController {

  constructor() {
    this.animalsDao = new AnimalsDao();
    this.common = new ControllerCommon();
  }

  getAnimalById(req, res) {
    let id = req.params.id;

    this.animalsDao.findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  getAnimals(req, res) {
    this.animalsDao.findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  updateAnimal(req, res) {
    let animal = new Animals();
    animal.id = req.params.id;
    animal.name = req.body.name;
    animal.animal_type_id = req.body.animal_type_id;

    return this.animalsDao.update(animal)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  createAnimal(req, res) {
    let animal = new Animals();
    if (req.body.id) {
      animal.id = req.body.id;
    }
    animal.name = req.body.name;
    animal.animal_type_id = req.body.animal_type_id;

    return this.animalsDao.create(animal)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  deleteAnimal(req, res) {
    let id = req.params.id;

    this.animalsDao.deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };
}

module.exports = AnimalsController;