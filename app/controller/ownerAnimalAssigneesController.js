const AwnerAnimalAssigneesDao = require('../dao/ownerAnimalAssigneesDao');
const ControllerCommon = require('./common/controllerCommon');
const OwnerAnimalAssignees = require('../model/ownerAnimalAssignees');

class OwnerAnimalAssigneesController {

  constructor() {
    this.awnerAnimalAssigneesDao = new AwnerAnimalAssigneesDao();
    this.common = new ControllerCommon();
  }

  getOwnerAnimalAssigneeById(req, res) {
    let id = req.params.id;

    this.awnerAnimalAssigneesDao.findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  getOwnerAnimalAssignees(res) {
    this.awnerAnimalAssigneesDao.findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  updateOwnerAnimalAssignee(req, res) {
    let ownerAnimalAssignees = new OwnerAnimalAssignees();
    ownerAnimalAssignees.id = req.body.id;
    ownerAnimalAssignees.owner_id = req.body.owner_id;
    ownerAnimalAssignees.animal_id = req.body.animal_id;

    return this.awnerAnimalAssigneesDao.update(ownerAnimalAssignees)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  createOwnerAnimalAssignee(req, res) {
    let ownerAnimalAssignees = new OwnerAnimalAssignees();
    ownerAnimalAssignees.owner_id = req.body.owner_id;
    ownerAnimalAssignees.animal_id = req.body.animal_id;

    return this.awnerAnimalAssigneesDao.create(ownerAnimalAssignees)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  deleteOwnerAnimalAssignee(req, res) {
    let id = req.params.id;

    this.awnerAnimalAssigneesDao.deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };
}

module.exports = OwnerAnimalAssigneesController;