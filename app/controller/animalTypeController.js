const AnimalTypeDao = require('../dao/animalTypeDao');
const ControllerCommon = require('./common/controllerCommon');
const AnimalType = require('../model/animalType');

class AnimalTypeController {

  constructor() {
    this.animalTypeDao = new AnimalTypeDao();
    this.common = new ControllerCommon();
  }

  getAnimalTypeById(req, res) {
    let id = req.params.id;

    this.animalTypeDao.findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  getAnimalTypes(req, res) {
    this.animalTypeDao.findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  updateAnimalType(req, res) {
    let animalType = new AnimalType();
    animalType.id = req.body.id;
    animalType.type = req.body.type;

    return this.animalTypeDao.update(animalType)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  createAnimalType(req, res) {
    let animalType = new AnimalType();
    animalType.type = req.body.type;
    return this.animalTypeDao.create(animalType)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  deleteAnimalType(req, res) {
    let id = req.params.id;

    this.animalTypeDao.deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };
}

module.exports = AnimalTypeController;