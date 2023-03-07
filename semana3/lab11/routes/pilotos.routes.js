const express = require("express");
const app = express();
const router = express.Router();

router.get("/nuevo", (request, response, next) => {
  let html = `
  <form action="/pilotos/nuevo" method="POST">
  <label for="piloto">Nommbre del piloto:</label>
  <input type="text" name="piloto" id="piloto">
  <input type="submit" value="Enviar">
  </form>
  `;
  response.send(html);
});

router.post("/nuevo", (request, response, next) => {
  console.log(request.body);
  console.log(request.body.piloto);
  response.send("El piloto es: " + request.body.piloto);
});

router.get("/parilla", (request, response, next) => {
  const parrilla = ["Ferrarri", "Mercedes", "Red Bull", "McLaren"];
  response.send(parrilla);
});

router.get("/parilla", (request, response, next) => {
  response.get(parrilla);
});

router.post("/directores", (request, response, next) => {
  response.send("El director es: " + request.body.director);
  const directores = [];
  directores.push(request.body.director);
});

router.get("/directores", (request, response, next) => {
  response.get(directores);
});

if(router.length === 0 || router === undefined) {
  return response.status(404).send("No se encontró la ruta");
}

module.exports = router;
