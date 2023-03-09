const Piloto = require("../models/pilotos.models");

exports.get_nuevo = (request, response, next) => {
  response.render("nuevo");
};

exports.post_nuevo = (request, response, next) => {
  const piloto = new Piloto({
    nombre: request.body.nombre,
    numero: request.body.numero,
    escuderia: request.body.escuderia,
  });

  piloto.save();

  response.setHeader("Set-Cookie", [
    "ultimoPiloto=" + piloto.nombre + "; HttpOnly",
  ]);

  request.session.ultimoPiloto = piloto.nombre;

  response.redirect("/pilotos/");
};

exports.listar = (request, response, next) => {
  let cookies = request.get("Cookie") || "";

  let consultas = cookies.split(";")[0].split("=")[1] || 0;
  consultas++; // Rastrear el número de consultas que hace el usuario

  response.setHeader("Set-Cookie", ["consultas=" + consultas + ";HttpOnly"]);

  request.session.utlimoPiloto;

  Piloto.fetchAll()
    .then(([rows, fieldData]) => {
      console.log(rows);

      response.render("lista", {
        pilotos: rows,
        ultimoPiloto: request.session.ultimoPiloto || "",
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
