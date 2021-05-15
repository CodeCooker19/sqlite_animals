const OwnerAnimalAssignees = require('../model/animals');

const daoCommon = require('./commons/daoCommon')

class OwnerAnimalAssigneesDao {

  constructor() {
    this.common = new daoCommon();
  }
  async findById(id) {
    let sqlRequest = "SELECT id, owner_id, animal_id FROM owner_animal_assignees WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return await this.common.findOne(sqlRequest, sqlParams).then(row =>
      new OwnerAnimalAssignees(row.id, row.owner_id, row.animal_id));
  };

  async findAll() {
    let sqlRequest = "SELECT * FROM owner_animal_assignees";
    return await this.common.findAll(sqlRequest).then(rows => {
      let owner_animal_assignees = [];
      for (const row of rows) {
        owner_animal_assignees.push(new OwnerAnimalAssignees(row.id, row.owner_id, row.animal_id));
      }
      return owner_animal_assignees;
    });
  };

  update(OwnerAnimalAssignees) {
    let sqlRequest = "UPDATE owner_animal_assignees SET " +
      "owner_id=$owner_id, animal_id=$animal_id " +
      "WHERE id=$id";

    let sqlParams = {
      $id: OwnerAnimalAssignees.id,
      $owner_id: OwnerAnimalAssignees.owner_id,
      $animal_id: OwnerAnimalAssignees.animal_id
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  create(OwnerAnimalAssignees) {
    let sqlRequest = "INSERT into owner_animal_assignees (owner_id, animal_id) " +
      "VALUES ($owner_id, $animal_id)";
    let sqlParams = {
      $owner_id: OwnerAnimalAssignees.owner_id,
      $animal_id: OwnerAnimalAssignees.animal_id
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  deleteById(id) {
    let sqlRequest = "DELETE FROM owner_animal_assignees WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return this.common.run(sqlRequest, sqlParams);
  };
}

module.exports = OwnerAnimalAssigneesDao