const OwnerAnimalAssigneesDao = require('../dao/ownerAnimalAssigneesDao');
const ControllerCommon = require('./common/controllerCommon');
const OwnerAnimalAssignees = require('../model/ownerAnimalAssignees');

class OwnerAnimalAssigneesController {

  constructor() {
    this.ownerAnimalAssigneesDao = new OwnerAnimalAssigneesDao();
    this.common = new ControllerCommon();
  }

  getOwnerAnimalAssigneeById(req, res) {
    let id = req.params.id;

    this.ownerAnimalAssigneesDao.findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  getOwnerAnimalAssignees(req, res) {
    this.ownerAnimalAssigneesDao.findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  updateOwnerAnimalAssignees(req, res) {
    let ownerAnimalAssignees = new OwnerAnimalAssignees();
    ownerAnimalAssignees.id = req.params.id;
    ownerAnimalAssignees.owner_id = req.body.owner_id;
    ownerAnimalAssignees.animal_id = req.body.animal_id;

    return this.ownerAnimalAssigneesDao.update(ownerAnimalAssignees)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  createOwnerAnimalAssignees(req, res) {
    let ownerAnimalAssignees = new OwnerAnimalAssignees();
    ownerAnimalAssignees.owner_id = req.body.owner_id;
    ownerAnimalAssignees.animal_id = req.body.animal_id;

    return this.ownerAnimalAssigneesDao.create(ownerAnimalAssignees)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  deleteOwnerAnimalAssignees(req, res) {
    let id = req.params.id;

    this.ownerAnimalAssigneesDao.deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };
}

module.exports = OwnerAnimalAssigneesController;