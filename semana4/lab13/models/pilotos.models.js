const database = require("../util/database");

module.exports = class Piloto {
  //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
  constructor(nuevo_piloto) {
    this.nombre = nuevo_piloto.nombre || "Stig";
    this.numero = nuevo_piloto.numero || "0";
    this.escuderia = nuevo_piloto.escuderia || "Top Gear";
    this.imagen = nuevo_piloto.imagen || "";
  }

  //Este método servirá para guardar de manera persistente el nuevo objeto.
  save() {
    return db.execute(
      `
    INSERT INTO pilotos (nombre, numero, escuderia, imagen)
    VALUES (?, ?, ?, ?)
    `,
      [this.nombre, this.numero, this.escuderia, this.imagen]
    );
  }

  static fetchAll() {
    return database.execute(
      `SELECT p.id, p.nombre, p.numero, p.escuderia, p.imagen, e.nombre
      FROM pilotos p, escuderias e, parrila pa
      WHERE pa.idPiloto = p.id AND pa.idEscuderia = e.id`
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchOne(id) {
    return database.execute(
      `SELECT p.id, p.nombre, p.numero, p.imagen, e.nombre
      FROM pilotos p, escuderias e, parrila pa
      WHERE pa.idPiloto = p.id AND pa.idEscuderia = e.id AND p.id = ?`,
      [id]
    );
  }

  static fetch(id) {
    if (id) {
      return Perro.fetchOne(id);
    } else {
      return Perro.fetchAll();
    }
  }
};
