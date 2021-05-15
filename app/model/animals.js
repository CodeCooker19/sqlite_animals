/**
 * Animals Entity (ES6 Class)
 */

 class Animals {
  constructor(id, name, animal_type_id) {
      this.id = id;
      this.name = name;
      this.animal_type_id = animal_type_id;
  }
}

module.exports = Animals;