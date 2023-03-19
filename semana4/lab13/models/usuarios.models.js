const db = require("../util/database");
const bycrypt = require("bcryptjs");

module.exports = class Usuario {
  constructor(nuevo_usuario) {
    this.nombre = nuevo_usuario.nombre || "John Doe";
    this.username = nuevo_usuario.username || "johndoe";
    this.password = nuevo_usuario.password || "a123";
  }

  save() {
    return bycrypt
      .hash(this.password, 12)
      .then((password_cifrado) => {
        return db.execute(
          `
      INSERT INTO usuario(nombre, username, password)
      values(?, ?, ?)
    `,
          [this.nombre, this.username, password_cifrado]
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static fetchOne(username) {
    return db.execute(
      `SELECT * 
      FROM usuario 
      WHERE username = ?`, 
      [username]);
  }
};
