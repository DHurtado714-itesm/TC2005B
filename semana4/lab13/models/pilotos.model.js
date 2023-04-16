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
    return database.execute(
      // Falta incluir imagen
      `
    INSERT INTO pilotos (nombre, numero, imagen)
    VALUES (?, ?)
    `,
      [this.nombre, this.numero, this.imagen]
    );
  }

  static fetchAll() {
    return database.execute(
      `SELECT p.id, p.nombre, p.numero, p.imagen, e.nombre as escuderia
      FROM pilotos p, escuderias e, parrilla pa
      WHERE pa.idPiloto = p.id AND pa.idEscuderia = e.id`
    );
  }

  //Este método servirá para devolver los objetos del almacenamiento persistente.
  static fetchOne(id) {
    return database.execute(
      `SELECT p.id, p.nombre, p.numero, p.imagen, e.nombre
      FROM pilotos p, escuderias e, parrilla pa
      WHERE pa.idPiloto = p.id AND pa.idEscuderia = e.id AND p.id = ?`,
      [id]
    );
  }

  static find(valor_busqueda) {
    return database.execute(
      `SELECT p.id, p.nombre, p.numero, p.imagen, e.nombre as escuderia
      FROM pilotos p, escuderias e, parrilla pa
      WHERE pa.idPiloto = p.id AND pa.idEscuderia = e.id AND (p.nombre LIKE ? OR p.numero LIKE ? OR e.nombre LIKE ? )
      ORDER BY p.nombre ASC`,
      ['%' + valor_busqueda + '%', '%' + valor_busqueda + '%', '%' + valor_busqueda + '%']
    );
  }

  static fetch(id) {
    if (id) {
      return Piloto.fetchOne(id);
    } else {
      return Piloto.fetchAll();
    }
  }
};
