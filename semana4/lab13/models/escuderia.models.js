const db = require('../util/database');

module.exports = class Raza {
  constructor(){

  }

  save(){
  
  }

  static fetchAll(){
    return db.execute(`
      SELECT id, nombre
      FROM Piltosa
    `)
  }
}