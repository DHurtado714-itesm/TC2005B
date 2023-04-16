const Piloto = require("../models/pilotos.model");
const Escuderia = require("../models/escuderia.model");

exports.get_buscar = (request, response, next) => {
  Piloto.find(reques.body.valor_busqueda)
    .then(([rows, fieldData]) => {
      response.status(200).json({ pilotos: rows });
    })
    .catch((error) => {
      console.log(error);
      response.stauts(500).json({ message: "Internal Server Error" });
    });
};

exports.get_nuevo = (request, response, next) => {
  Escuderia.fetchAll()
    .then(([rows, fieldData]) => {
      response.render("nuevo", {
        escuderia: rows,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || "",
      });
    })
    .catch((error) => console.log(error));
};

exports.post_nuevo = (request, response, next) => {
  const piloto = new Piloto({
    nombre: request.body.nombre,
    raza: request.body.raza,
    descripcion: request.body.descripcion,
  });

  piloto
    .save()
    .then(([rows, fieldData]) => {
      request.session.mensaje = "El piloto fue registrado exitosamente.";

      request.session.ultimo_piloto = piloto.nombre;

      response.redirect("/pilotos/");
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.listar = (request, response, next) => {
  //Crear variable para que si no hay cookie se cuente con un string para hacer el split
  let cookies = request.get("Cookie") || "";

  let consultas = cookies.split(";")[0].split("=")[1] || 0;

  consultas++;

  response.setHeader("Set-Cookie", "consultas=" + consultas + "; HttpOnly");

  let mensaje = "";

  if (request.session.mensaje) {
    mensaje = request.session.mensaje;
    request.session.mensaje = "";
  }

  Piloto.fetch(request.params.id)
    .then(([rows, fieldData]) => {
      console.log(rows);

      response.render("lista", {
        pilotos: rows,
        ultimoPiloto: request.session.ultimo_piloto || "",
        mensaje: mensaje,
        isLoggedIn: request.session.isLoggedIn || false,
        nombre: request.session.nombre || "",
        privilegios: request.session.privilegios || [],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
