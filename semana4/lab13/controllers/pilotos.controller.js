const Piloto = require("../models/pilotos.model");

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

  response.setHeader("Set-Cookie", ["ultimoPiloto=" + piloto.nombre])

  response.redirect("/pilotos/");
};

exports.listar = (request, response, next) => {

  console.log(request.get("Cookie").split("=")[1]);

  response.render("lista", { pilotos: Piloto.fetchAll() });
};
