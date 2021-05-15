const OwnersDao = require('../dao/ownersDao');
const ControllerCommon = require('./common/controllerCommon');
const Owners = require('../model/owners');

class OwnersController {

  constructor() {
    this.ownersDao = new OwnersDao();
    this.common = new ControllerCommon();
  }

  getOwnerById(req, res) {
    let id = req.params.id;

    this.ownersDao.findById(id)
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  getOwners(res) {
    this.ownersDao.findAll()
      .then(this.common.findSuccess(res))
      .catch(this.common.findError(res));
  };

  updateOwner(req, res) {
    let owner = new Owners();
    owner.id = req.body.id;
    owner.name = req.body.name;

    return this.ownersDao.update(owner)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  createOwner(req, res) {
    let owner = new Owners();
    owner.name = req.body.name;

    return this.ownersDao.create(owner)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };

  deleteOwner(req, res) {
    let id = req.params.id;

    this.ownersDao.deleteById(id)
      .then(this.common.editSuccess(res))
      .catch(this.common.serverError(res));
  };
}

module.exports = OwnersController;