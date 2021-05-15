const Owner = require('../model/animals');

const daoCommon = require('./commons/daoCommon')

class OwnerDao {

  constructor() {
    this.common = new daoCommon();
  }

  async findById(id) {
    let sqlRequest = "SELECT id, name FROM owners WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return await this.common.findOne(sqlRequest, sqlParams).then(row =>
      new Owner(row.id, row.name));
  };

  async findAll() {
    let sqlRequest = "SELECT * FROM owners";
    return await this.common.findAll(sqlRequest).then(rows => {
      let owners = [];
      for (const row of rows) {
        owners.push(new Owner(row.id, row.name));
      }
      return owners;
    });
  };

  update(Owner) {
    let sqlRequest = "UPDATE owners SET " +
      "name=$name, " +
      "WHERE id=$id";

    let sqlParams = {
      $name: Owner.name
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  create(Owner) {
    let sqlRequest = "INSERT into owners (name) " +
      "VALUES ($name)";
    let sqlParams = {
      $name: Owner.name
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  deleteById(id) {
    let sqlRequest = "DELETE FROM owners WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return this.common.run(sqlRequest, sqlParams);
  };
}

module.exports = OwnerDao