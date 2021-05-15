const OwnerAnimalAssignees = require('../model/animals');

const daoCommon = require('./commons/daoCommon')

class OwnerAnimalAssigneesDao {

  constructor() {
    this.common = new daoCommon();
  }
  async findById(id) {
    let sqlRequest = "SELECT id, name FROM owner_animal_assignees WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return await this.common.findOne(sqlRequest, sqlParams).then(row =>
      new Owner(row.id, row.name));
  };

  async findAll() {
    let sqlRequest = "SELECT * FROM owner_animal_assignees";
    return await this.common.findAll(sqlRequest).then(rows => {
      let owner_animal_assignees = [];
      for (const row of rows) {
        owner_animal_assignees.push(new Owner(row.id, row.name));
      }
      return cars;
    });
  };

  update(Owner) {
    let sqlRequest = "UPDATE owner_animal_assignees SET " +
      "name=$name, " +
      "WHERE id=$id";

    let sqlParams = {
      $name: Owner.name
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  create(Owner) {
    let sqlRequest = "INSERT into owner_animal_assignees (name) " +
      "VALUES ($name)";
    let sqlParams = {
      $name: Owner.name,
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