const Usuario = require("../models/usuarios.model");
const bcrypt = require("bcryptjs");

exports.get_login = (request, response, next) => {
  const mensaje = request.session.mensaje || null;

  if (request.session.mensaje) {
    request.session.mensaje = null;
  }

  response.render("login", {
    mensaje: mensaje,
    isLoggedIn: request.session.isLoggedIn || "",
    nombre: request.session.nombre || "",
  });
};

exports.post_login = (request, response, next) => {
  Usuario.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
      if (rows.length == 1) {
        console.log(rows);
        bcrypt
          .compare(request.body.password, rows[0].password)
          .then((doMatch) => {
            if (doMatch) {
              request.session.isLoggedIn = true;
              request.session.nombre = rows[0].nombre;
              return request.session.save((error) => {
                response.redirect("/pilotos");
              });
            } else {
              request.session.mensaje = "Usuario y/o contraseña incorrecta";
              response.redirect("/usuarios/login");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        request.session.mensaje = "Usuario y/o contraseña incorrecta";
        response.redirect("/usuarios/login");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.get_signup = (request, response, next) => {
  response.render("signup", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
  });
};

exports.post_signup = (request, response, next) => {
  const usuario = new Usuario({
    nombre: request.body.nombre,
    username: request.body.username,
    password: request.body.password,
  });

  usuario
    .save()
    .then(([rows, fieldData]) => {
      response.redirect("/usuarios/login");
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/usuarios/login"); //Este código se ejecuta cuando la sesión se elimina.
  });
};
