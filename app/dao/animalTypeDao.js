const AnimalType = require('../model/animalType');

const daoCommon = require('./commons/daoCommon')

class AnimalTypeDao {

  constructor() {
    this.common = new daoCommon();
  }

  async findById(id) {
    let sqlRequest = "SELECT id, type FROM animal_type WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return await this.common.findOne(sqlRequest, sqlParams).then(row =>
      new AnimalType(row.id, row.type));
  };

  async findAll() {
    let sqlRequest = "SELECT * FROM animal_type";
    return await this.common.findAll(sqlRequest).then(rows => {
      let animal_type = [];
      for (const row of rows) {
        animal_type.push(new AnimalType(row.id, row.type));
      }
      return animal_type;
    });
  };

  update(AnimalType) {
    let sqlRequest = "UPDATE animal_type SET " +
      "type=$type, " +
      "WHERE id=$id";

    let sqlParams = {
      $type: AnimalType.type
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  create(AnimalType) {
    let sqlRequest = "INSERT into animal_type (type) " +
      "VALUES ($type)";
    let sqlParams = {
      $type: AnimalType.type,
    };
    return this.common.run(sqlRequest, sqlParams);
  };

  deleteById(id) {
    let sqlRequest = "DELETE FROM animal_type WHERE id=$id";
    let sqlParams = {
      $id: id
    };
    return this.common.run(sqlRequest, sqlParams);
  };

}

module.exports = AnimalTypeDao