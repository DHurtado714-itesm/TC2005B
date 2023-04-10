const db = require("../util/database");

module.exports = class Escuderia {
  constructor() {}

  save() {}

  static fetchAll() {
    return db.execute(`
      SELECT id, nombre
      FROM escuderias
    `);
  }
};
